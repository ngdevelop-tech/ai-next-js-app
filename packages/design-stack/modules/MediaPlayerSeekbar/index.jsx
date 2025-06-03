/**
 * @typedef {Object} MediaPlayerSeekbarProps
 * @property {any} exceptions? - An array of objects representing exceptions/marker data, each containing an id, startTime (in seconds), and type ('warning' or 'error').
 * @property {string} id?
 * @property {number} startTime?
 * @property {any} type?
 */

import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { MediaPlayerContextData } from "../../shared/mediaPlayerContext";
import Tooltip from "../Tooltip";
import TooltipBody from "../TooltipBody";

import Marker from "./components/Marker";
import convertSecondsToTimeFormat from "./utils/convertSecondsToTimeFormat";
import { getElementOffsetXRatio } from "./utils/getElementOffsetXRatio";
import useMediaPlayerSeekbar from "./useMediaPlayerSeekbar";

const hoverAnimationClasses = "transition-height ease-in-out duration-300";

/**
 * @type {React.ForwardRefExoticComponent<MediaPlayerSeekbarProps & React.RefAttributes<HTMLDivElement>>}
 */
const MediaPlayerSeekbar = forwardRef(
  (
    {
      exceptions = [],
      id = null,
      showMarkers = true,
      onMarkerClick = () => {},
      onSeekTime = () => {},
      wrapperClassName = "",
    },
    ref
  ) => {
    const { duration, currentTime, bufferedTime, startTime } = useContext(
      MediaPlayerContextData
    );
    const [draggingSeekbar, setDraggingSeekbar] = useState(false);
    const [hoverState, setHoverState] = useState(false);
    const [hoverSeekPosition, setHoverSeekPosition] = useState(0);
    const [hoverTime, setHoverTime] = useState(0);
    const [hoverOnWarningMarker, setHoverOnWarningMarker] = useState(false);
    const [hoverOnErrorMarker, setHoverOnErrorMarker] = useState(false);
    const durationInTimeFormat = convertSecondsToTimeFormat(duration);
    const currentTimeInTimeFormat = convertSecondsToTimeFormat(
      currentTime >= duration ? duration : currentTime
    );
    const seekbarRef = useRef(null);
    const bufferedRatio = bufferedTime / duration;
    const bufferProgress = bufferedRatio > 1 ? 100 : bufferedRatio * 100;
    const progressRatio = currentTime / duration;
    const progress = progressRatio > 1 ? 100 : progressRatio * 100;
    const { warningProgress, errorProgress } = useMediaPlayerSeekbar(
      exceptions,
      currentTime
    );

    const handleHoverSeekbarMouseMove = useCallback(
      event => {
        const offsetXRatio = getElementOffsetXRatio(event, seekbarRef?.current);
        setHoverSeekPosition(offsetXRatio * 100);
        setHoverTime(convertSecondsToTimeFormat(offsetXRatio * duration));
      },
      [duration]
    );

    const handleMouseEnter = event => {
      document.addEventListener("mousemove", handleHoverSeekbarMouseMove);
      setHoverState(true);
      const offsetXRatio = getElementOffsetXRatio(event, seekbarRef?.current);
      setHoverSeekPosition(offsetXRatio * 100);
      setHoverTime(convertSecondsToTimeFormat(offsetXRatio * duration));
    };

    useEffect(() => {
      if (!hoverState)
        document.removeEventListener("mousemove", handleHoverSeekbarMouseMove);
    }, [hoverState, handleHoverSeekbarMouseMove]);

    const handleMouseLeave = () => {
      setHoverState(false);
    };

    const handleSeekbarDrag = event => {
      const offsetXRatio = getElementOffsetXRatio(event, seekbarRef?.current);
      const timeStampDefault = offsetXRatio * duration;
      let finalTimeStamp = timeStampDefault;
      if (startTime) {
        finalTimeStamp = timeStampDefault + startTime;
      }
      ref?.current?.seekTo(finalTimeStamp);
      onSeekTime?.();
    };

    const handleSeekbarMouseMove = event => {
      handleSeekbarDrag(event);
    };

    const handleSeekbarMouseUp = event => {
      setDraggingSeekbar(false);
      handleSeekbarDrag(event);
      document.removeEventListener("mousemove", handleSeekbarMouseMove);
      document.removeEventListener("mouseup", handleSeekbarMouseUp);
    };

    const handleSeekbarMouseDown = () => {
      document.addEventListener("mousemove", handleSeekbarMouseMove);
      document.addEventListener("mouseup", handleSeekbarMouseUp);
      setDraggingSeekbar(true);
    };

    const handleMarkerMouseEvent = (event, IsEntering) => {
      const markerType = event.target.dataset.markertype;
      if (markerType === "warning") {
        setHoverOnWarningMarker(IsEntering);
      } else if (markerType === "error") {
        setHoverOnErrorMarker(IsEntering);
      }
    };

    return (
      <div
        className={twClassNames(
          "flex h-[62px] w-full flex-row items-center bg-neutral-default p-1 sm:gap-4 sm:p-4",
          wrapperClassName
        )}
        {...(id !== null && { id })}
      >
        <div
          className={twClassNames(
            "group flex h-3.5 w-full flex-row items-center gap-1 p-0 sm:gap-4"
          )}
        >
          <div
            className={twClassNames(
              "h-3 text-xs font-normal not-italic leading-3 text-neutral-default"
            )}
          >
            {currentTimeInTimeFormat}
          </div>
          <div className={twClassNames("flex w-full")}>
            <div
              role="presentation"
              className={twClassNames(
                "relative h-1  w-full  cursor-pointer rounded-full bg-neutral-strongest group-hover:h-2",
                hoverAnimationClasses
              )}
              ref={seekbarRef}
              onMouseDown={handleSeekbarMouseDown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={twClassNames(
                  "h-1 rounded-full bg-neutral-strongest group-hover:h-2",
                  hoverAnimationClasses
                )}
                style={{ width: `calc(${bufferProgress}%)` }}
              />
              <div
                className={twClassNames(
                  "absolute top-0 h-1 rounded-l-full bg-brand-default group-hover:h-2",
                  hoverAnimationClasses
                )}
                style={{ width: `calc(${progress}% - 2px)` }}
              />
              {showMarkers && (
                <div
                  className={twClassNames(
                    "absolute top-0 h-1 w-full overflow-hidden group-hover:h-2",
                    hoverAnimationClasses
                  )}
                >
                  {exceptions?.map(
                    exception =>
                      exception.startTime <= duration && (
                        <Marker
                          key={`marker_${exception.id}`}
                          startTime={exception.startTime}
                          duration={duration}
                          type={exception.type}
                          onMarkerMouseEnter={e =>
                            handleMarkerMouseEvent(e, true)
                          }
                          onMarkerMouseLeave={e =>
                            handleMarkerMouseEvent(e, false)
                          }
                          onMarkerClick={onMarkerClick}
                        />
                      )
                  )}
                </div>
              )}
              {/* w/o hole */}
              {!draggingSeekbar && (
                <svg
                  className={twClassNames(
                    "absolute top-0 -mt-2.5 icon-brand-default group-hover:-mt-2",
                    hoverAnimationClasses,
                    {
                      "icon-attention-weaker": warningProgress,
                      "icon-danger-default": errorProgress,
                    }
                  )}
                  style={{
                    marginLeft:
                      progress === 0 ? "" : `calc(${progress}% - 2px)`,
                  }}
                  width="8"
                  height="24"
                  viewBox="0 0 8 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="8"
                    height="24"
                    rx="4"
                    className="fill-neutral-inverse-default"
                  />
                  <rect
                    x="2"
                    y="2"
                    width="4"
                    height="20"
                    rx="2"
                    fill="currentColor"
                  />
                </svg>
              )}
              {/* blue one with hole */}
              {draggingSeekbar && (
                <svg
                  className="-mt-4 ml-0.5 icon-brand-default group-hover:-mt-4"
                  style={{ marginLeft: `calc(${hoverSeekPosition}% - 4px` }}
                  width="18"
                  height="26"
                  viewBox="0 0 18 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="18"
                    height="26"
                    rx="9"
                    className="fill-neutral-inverse-default"
                  />
                  <rect
                    x="3"
                    y="3"
                    width="12"
                    height="20"
                    rx="6"
                    fill="currentColor"
                  />
                  <rect
                    x="6"
                    y="6"
                    width="6"
                    height="14"
                    rx="3"
                    className="fill-neutral-inverse-default"
                  />
                </svg>
              )}
              {/* all one with hole */}
              {hoverState && !draggingSeekbar ? (
                <Tooltip
                  show
                  content={
                    <TooltipBody wrapperClassName="px-1 mb-0 text-xs">
                      {hoverTime}
                    </TooltipBody>
                  }
                  wrapperClassName="py-1 px-1.5"
                  arrowClassName="w-0 h-0"
                  size="xs"
                  placementSide="top"
                  triggerWrapperClassName="block"
                  triggerAriaLabel="seekbar time"
                  theme="dark"
                >
                  <svg
                    className={twClassNames(
                      "absolute -mt-3.5 icon-neutral-weaker group-hover:-mt-4",
                      {
                        "icon-attention-weaker": hoverOnWarningMarker,
                        "icon-danger-default": hoverOnErrorMarker,
                      }
                    )}
                    style={{ marginLeft: `calc(${hoverSeekPosition}% - 4px` }}
                    width="14"
                    height="24"
                    viewBox="0 0 14 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="14"
                      height="24"
                      rx="7"
                      className="fill-neutral-inverse-default"
                    />
                    <rect
                      x="2"
                      y="2"
                      width="10"
                      height="20"
                      rx="5"
                      fill="currentColor"
                    />
                    <rect
                      x="5.33331"
                      y="5.33325"
                      width="3.33333"
                      height="13.3333"
                      rx="1.66667"
                      className="fill-neutral-inverse-default"
                    />
                  </svg>
                </Tooltip>
              ) : null}
            </div>
          </div>

          <div
            className={twClassNames(
              "h-3 text-xs font-normal not-italic leading-3 text-neutral-default"
            )}
          >
            {durationInTimeFormat}
          </div>
        </div>
      </div>
    );
  }
);

MediaPlayerSeekbar.propTypes = {
  /** An array of objects representing exceptions/marker data, each containing an id, startTime (in seconds), and type ('warning' or 'error'). */
  exceptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      startTime: PropTypes.number,
      type: PropTypes.oneOf(["warning", "error"]),
    })
  ),
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** Callback function invoked when a marker is clicked. */
  onMarkerClick: PropTypes.func,
  /** Callback function triggered when the seekbar is used to seek to a specific time. */
  onSeekTime: PropTypes.func,
  /** Boolean indicating whether to show markers/exceptions on the seekbar. */
  showMarkers: PropTypes.bool,
  /** Additional CSS class(es) to customize the styling of the seekbar component. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-mediaplayer--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/96389e-media-player/b/4635b4
 * @end
 */

export default MediaPlayerSeekbar;

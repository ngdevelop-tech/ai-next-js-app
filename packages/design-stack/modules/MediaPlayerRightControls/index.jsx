/**
 * @typedef {Object} MediaPlayerRightControlsProps
 * @property {React.ReactNode} customSetting? - Custom React node to render additional controls within the right controls area.
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {(event: React.MouseEvent<any>) => void} onDownloadClick? - Callback function invoked when the download option is clicked.
 * @property {(event: React.MouseEvent<any>) => void} onFullScreen? - Callback function triggered when the full-screen option is clicked.
 * @property {(event: React.MouseEvent<any>) => void} onPlaybackSpeedClick? - Callback function called with the selected playback speed when a speed option is clicked.
 * @property {boolean} showAdditionalSettings? - Boolean to determine if additional settings options should be shown.
 * @property {boolean} showFullScreenOption? - Boolean indicating whether the full-screen option should be displayed.
 * @property {boolean} showSpeedOption? - Boolean determining whether the playback speed options should be visible.
 * @property {string} wrapperClassName? - Additional CSS class(es) to customize the styling of the right controls area.
 */

import React, { forwardRef, useCallback, useState } from "react";
import { MdFullscreen, MdMoreVert } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import Button from "../Button";
import Dropdown from "../Dropdown";
import DropdownOptionGroup from "../DropdownOptionGroup";
import DropdownOptionItem from "../DropdownOptionItem";
import DropdownTrigger from "../DropdownTrigger";

import {
  ADDITIONAL_SETTINGS_OPTIONS,
  PLAYBACK_SPEED_OPTIONS,
} from "./const/rightControlsConstants";

/**
 * @type {React.ForwardRefExoticComponent<MediaPlayerRightControlsProps & React.RefAttributes<HTMLDivElement>>}
 */
const MediaPlayerRightControls = forwardRef(
  (
    {
      customSetting = null,
      id = null,
      onDownloadClick = null,
      onFullScreen = null,
      onPlaybackSpeedClick = null,
      showAdditionalSettings = false,
      showFullScreenOption = false,
      showSpeedOption = false,
      wrapperClassName = null,
    },
    ref
  ) => {
    const targetRef = ref;
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const handlePlaybackOptionClick = option => {
      const newSpeed = option.value;
      setPlaybackSpeed(newSpeed);
      targetRef.current.getInternalPlayer().playbackRate = newSpeed;
      onPlaybackSpeedClick?.(newSpeed);
    };

    const handleFullScreenClick = useCallback(() => {
      if (!document.fullscreenElement) {
        ref.current.getInternalPlayer().requestFullscreen();
      } else {
        document.exitFullscreen();
      }

      onFullScreen?.();
    }, [ref, onFullScreen]);

    const handleAdditionalSettingClick = option => {
      if (option.body === "Download") {
        const videoUrl = ref.current.getInternalPlayer().currentSrc;
        const link = document.createElement("a");
        link.href = videoUrl;
        link.download = "video.mp4";
        link.role = "button";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        onDownloadClick?.();
      }
    };

    return (
      <div
        className={twClassNames(
          "flex h-[62px] flex-row items-center bg-neutral-default sm:gap-4 sm:p-4",
          wrapperClassName
        )}
        {...(id !== null && { id })}
      >
        {showSpeedOption && (
          <div className={twClassNames("w-8 p-0")}>
            <Dropdown onClick={option => handlePlaybackOptionClick(option)}>
              <DropdownTrigger
                triggerAriaLabel="Playback speed"
                wrapperClassName="p-0 border-0 shadow-transparent bg-transparent"
                isIconOnly
                icon={`${playbackSpeed}x`}
              />
              <DropdownOptionGroup>
                {PLAYBACK_SPEED_OPTIONS.map(speedOption => (
                  <DropdownOptionItem
                    option={speedOption}
                    key={speedOption.id}
                  />
                ))}
              </DropdownOptionGroup>
            </Dropdown>
          </div>
        )}
        {showFullScreenOption && (
          <div className={twClassNames("h-6 w-6")}>
            <Button
              colors="white"
              variant="minimal"
              wrapperClassName={twClassNames(
                "h-6 w-6 p-0 hover:bg-neutral-default-hover"
              )}
              isIconOnlyButton
              icon={<MdFullscreen className="h-6 w-6" />}
              onClick={e => {
                handleFullScreenClick();
                e.currentTarget.blur();
              }}
              aria-label="full screen video"
              size="large"
            />
          </div>
        )}
        {showAdditionalSettings && (
          <div className={twClassNames("h-6 w-6")}>
            <Dropdown onClick={option => handleAdditionalSettingClick(option)}>
              <DropdownTrigger
                wrapperClassName="p-0 border-0 shadow-transparent bg-transparent"
                triggerAriaLabel="additional settings"
                isIconOnly
                icon={<MdMoreVert className="h-6 w-6" />}
              />
              <DropdownOptionGroup>
                {ADDITIONAL_SETTINGS_OPTIONS.map(settingsOption => (
                  <DropdownOptionItem
                    option={settingsOption}
                    key={settingsOption.id}
                  />
                ))}
              </DropdownOptionGroup>
            </Dropdown>
          </div>
        )}
        {customSetting && <>{customSetting}</>}
      </div>
    );
  }
);

MediaPlayerRightControls.propTypes = {
  /** Custom React node to render additional controls within the right controls area. */
  customSetting: PropTypes.node,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** Callback function invoked when the download option is clicked. */
  onDownloadClick: PropTypes.func,
  /** Callback function triggered when the full-screen option is clicked. */
  onFullScreen: PropTypes.func,
  /** Callback function called with the selected playback speed when a speed option is clicked. */
  onPlaybackSpeedClick: PropTypes.func,
  /** Boolean to determine if additional settings options should be shown. */
  showAdditionalSettings: PropTypes.bool,
  /** Boolean indicating whether the full-screen option should be displayed. */
  showFullScreenOption: PropTypes.bool,
  /** Boolean determining whether the playback speed options should be visible. */
  showSpeedOption: PropTypes.bool,
  /** Additional CSS class(es) to customize the styling of the right controls area. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-mediaplayer--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/96389e-media-player/b/4635b4
 * @end
 */

export default MediaPlayerRightControls;

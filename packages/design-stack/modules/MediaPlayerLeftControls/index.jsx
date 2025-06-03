/**
 * Represents the properties for the MediaPlayerLeftControls component.
 * @typedef {Object} MediaPlayerLeftControlsProps
 * @property {string} [id] - Optional unique identifier attribute for the root element of the component.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [onForwardClick] - Optional callback function invoked when the forward button is clicked. Receives the click event as an argument. Useful for custom logic execution upon forward action. Defaults to an empty function.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [onRewindClick] - Optional callback function invoked when the rewind button is clicked. Receives the click event as an argument. Useful for custom logic execution upon rewind action. Defaults to an empty function.
 * @property {boolean} [showRewindForwardButtons=false] - Determines if the rewind and forward buttons should be displayed. Defaults to `false`.
 * @property {string} [wrapperClassName] - Optional additional CSS class(es) to apply to the wrapper `div` element for custom styling. Defaults to an empty string.
 */

import React, { forwardRef, useEffect, useRef } from "react"; // Import useRef
import { MdForward10, MdPause, MdPlayArrow, MdReplay10 } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import Button from "../Button";

import useMediaPlayerLeftControls from "./useMediaPlayerLeftControls";

/**
 * MediaPlayerLeftControls provides the primary playback controls (play/pause) and optional rewind/forward buttons for a media player.
 * It handles user interactions like clicks and keyboard shortcuts (Space, K, Left Arrow, J, Right Arrow, L) for controlling media playback.
 *
 * @component
 * @param {MediaPlayerLeftControlsProps} props - The props for the MediaPlayerLeftControls component.
 * @param {React.Ref<any>} ref - Forwarded ref pointing to the media player instance or an object containing the player instance (expected to have a `player` property). Used to control playback state (play/pause, seek).
 *
 * @example
 * // Basic usage with only play/pause
 * <MediaPlayerLeftControls ref={mediaPlayerRef} />
 *
 * @example
 * // Usage with rewind/forward buttons and custom click handlers
 * <MediaPlayerLeftControls
 *   ref={mediaPlayerRef}
 *   showRewindForwardButtons={true}
 *   onRewindClick={(e) => console.log('Rewind clicked', e)}
 *   onForwardClick={(e) => console.log('Forward clicked', e)}
 *   wrapperClassName="custom-controls-style"
 * />
 *
 * @see {@link https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-mediaplayer--primary|Storybook Example}
 * @see {@link https://zeroheight.com/023d5159d/p/96389e-media-player/b/4635b4|Zeroheight Design Specs}
 *
 * @accessibility
 * - The play/pause button has an `aria-label` "toggle play pause video".
 * - The rewind button (if shown) has an `aria-label` "rewind 10 sec".
 * - The forward button (if shown) has an `aria-label` "forward 10 sec".
 * - Supports keyboard navigation:
 *   - `Space` or `k`: Toggles play/pause.
 *   - `ArrowLeft` or `j`: Rewinds (typically 10 seconds).
 *   - `ArrowRight` or `l`: Forwards (typically 10 seconds).
 * - Buttons lose focus after click (`e.currentTarget.blur()`) to prevent unexpected behavior with subsequent spacebar presses.
 *
 * @type {React.ForwardRefExoticComponent<MediaPlayerLeftControlsProps & React.RefAttributes<any>>}
 */
const MediaPlayerLeftControls = forwardRef(
  (
    {
      id = null,
      showRewindForwardButtons = false,
      onForwardClick = () => {},
      onRewindClick = () => {},
      wrapperClassName = "",
    },
    ref
  ) => {
    const { handlePlayPauseClick, handleRewindClick, handleForwardClick } =
      useMediaPlayerLeftControls({
        ref,
        onRewindClick,
        onForwardClick,
      });
    const playPauseButtonRef = useRef(null);

    useEffect(() => {
      const handleKeyDown = e => {
        if (e.key === "ArrowLeft" || e.key === "j") {
          handleRewindClick(10);
          return;
        }
        if (e.key === "ArrowRight" || e.key === "l") {
          handleForwardClick(10);
          return;
        }
        if (
          e.key === " " ||
          (e.key === "k" && e.target !== playPauseButtonRef?.current)
        ) {
          handlePlayPauseClick();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [handleRewindClick, handleForwardClick, handlePlayPauseClick]);

    return (
      <div
        className={twClassNames(
          "flex h-[62px] flex-row items-center border-r border-solid border-neutral-strong bg-neutral-default py-2.5 sm:gap-4 sm:px-4",
          wrapperClassName
        )}
        {...(id !== null && { id })}
      >
        {showRewindForwardButtons && (
          <div
            className={twClassNames("flex h-6 w-6 flex-row items-start p-0")}
          >
            <Button
              variant="minimal"
              wrapperClassName={twClassNames(
                "flex h-6 w-6 flex-row items-center justify-center p-0 hover:bg-neutral-default-hover"
              )}
              isIconOnlyButton
              icon={<MdReplay10 className="h-6 w-6 icon-neutral-weak" />}
              onClick={() => {
                handleRewindClick(10);
              }}
              aria-label="rewind 10 sec"
              size="large"
            />
          </div>
        )}
        <div
          className={twClassNames(
            "flex h-[42px] flex-row items-center justify-center p-0"
          )}
        >
          <button
            ref={playPauseButtonRef} // Assign the ref
            type="button"
            onClick={() => {
              handlePlayPauseClick();
            }}
            className={twClassNames(
              "flex h-[42px] w-[42px] flex-row items-center justify-center rounded-3xl bg-neutral-inverse-default p-[9px] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
            )}
            aria-label="toggle play pause video"
          >
            {ref?.current?.player?.isPlaying ? (
              <MdPause size={24} className="icon-neutral-inverse-default" />
            ) : (
              <MdPlayArrow size={24} className="icon-neutral-inverse-default" />
            )}
          </button>
        </div>
        {showRewindForwardButtons && (
          <div
            className={twClassNames("flex h-6 w-6 flex-row items-start p-0")}
          >
            <Button
              variant="minimal"
              wrapperClassName={twClassNames(
                "flex h-6 w-6 flex-row items-center justify-center p-0 hover:bg-neutral-default-hover "
              )}
              isIconOnlyButton
              icon={<MdForward10 className="h-6 w-6 icon-neutral-weak " />}
              onClick={() => {
                handleForwardClick(10);
              }}
              aria-label="forward 10 sec"
              size="large"
            />
          </div>
        )}
      </div>
    );
  }
);

MediaPlayerLeftControls.propTypes = {
  /** Optional unique identifier attribute for the root element of the component. */
  id: PropTypes.string,
  /** Optional callback function invoked when the forward button is clicked. Receives the click event as an argument. */
  onForwardClick: PropTypes.func,
  /** Optional callback function invoked when the rewind button is clicked. Receives the click event as an argument. */
  onRewindClick: PropTypes.func,
  /** Determines if the rewind and forward buttons should be displayed. */
  showRewindForwardButtons: PropTypes.bool,
  /** Optional additional CSS class(es) to apply to the wrapper `div` element for custom styling. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-mediaplayer--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/96389e-media-player/b/4635b4
 * @end
 */

export default MediaPlayerLeftControls;

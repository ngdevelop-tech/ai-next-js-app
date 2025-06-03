/**
 * Represents the properties for the MediaPlayer component.
 * @typedef {Object} MediaPlayerProps
 * @property {React.ReactNode} [children] - Child elements, typically controls, to be rendered within the media player's control panel. These children will receive a `ref` to the `ReactPlayer` instance.
 * @property {boolean} [controlPanelAtBottom=true] - If true, positions the control panel fixed at the bottom of the viewport. Otherwise, it renders below the player.
 * @property {string} [controlPanelWrapperClassName=''] - Additional CSS classes to apply to the control panel wrapper div.
 * @property {string} [id] - Optional ID attribute for the main wrapper div of the media player.
 * @property {(player: any) => void} [onFirstReady] - Callback function invoked when the player is ready for the first time. Receives the internal player instance.
 * @property {() => void} [onPauseCallback] - Callback function invoked when the media playback is paused.
 * @property {() => void} [onPlayCallback] - Callback function invoked when the media playback starts or resumes.
 * @property {() => void} [onVideoError] - Callback function invoked if there's an error loading or playing the media.
 * @property {() => void} [timeUpdateCallBack] - Callback function invoked repeatedly as the playback time progresses.
 * @property {string} [url=''] - The URL of the media to play. Supports URL fragments like `#t=startTime,endTime` to specify playback range in seconds (e.g., `video.mp4#t=10,30`).
 * @property {string} [wrapperClassName=''] - Additional CSS classes to apply to the main wrapper div containing the ReactPlayer instance.
 */

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ReactPlayer from "react-player";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { MediaPlayerContextData } from "../../shared/mediaPlayerContext";
import Loader from "../Loader";

/**
 * MediaPlayer component provides a customizable video/audio player using ReactPlayer.
 * It includes features like buffering indication, custom start/end times via URL fragments,
 * and allows embedding custom controls as children.
 *
 * @component
 * @example
 * ```jsx
 * <MediaPlayer url="video.mp4#t=5,25" wrapperClassName="custom-player">
 *   <CustomPlayButton />
 *   <CustomSeekBar />
 *   <CustomVolumeControl />
 * </MediaPlayer>
 * ```
 * @see {@link https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-mediaplayer--primary} Storybook
 * @see {@link https://zeroheight.com/023d5159d/p/96389e-media-player/b/4635b4} Zeroheight
 * @type {React.ForwardRefExoticComponent<MediaPlayerProps & React.RefAttributes<import('react-player').default>>}
 */
const MediaPlayer = forwardRef(
  (
    {
      children = null,
      controlPanelWrapperClassName = "",
      id = null,
      onFirstReady = null,
      onPauseCallback = null,
      onPlayCallback = null,
      onVideoError = null,
      controlPanelAtBottom = true,
      timeUpdateCallBack = null,
      url = "",
      wrapperClassName = "",
    },
    ref
  ) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [bufferedTime, setBufferedTime] = useState(0);
    const [isBuffering, setIsBuffering] = useState(false);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [isReady, setIsReady] = useState(false);

    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const lastActiveElementRef = useRef(null);

    useEffect(() => {
      const adjustedSeekTo = videoRef.current.seekTo;
      videoRef.current.seekTo = (timestampReceived, ...args) => {
        if (timestampReceived >= 1) {
          adjustedSeekTo(timestampReceived, ...args);
        } else {
          adjustedSeekTo(0, ...args);
        }
      };
    }, [videoRef]);

    const handleOnReady = () => {
      if (!isReady) {
        const customStartAndEndInSeconds =
          (url &&
            url.includes("#") &&
            url.split("#")[1].split("=")[1].split(",")) ||
          null;
        const customDurationTaken =
          customStartAndEndInSeconds &&
          customStartAndEndInSeconds[1] - customStartAndEndInSeconds[0];
        const calculatedDuration = customStartAndEndInSeconds
          ? customDurationTaken
          : videoRef.current.getDuration();
        setDuration(calculatedDuration);
        setStartTime(
          customStartAndEndInSeconds
            ? parseInt(customStartAndEndInSeconds[0], 10)
            : 0
        );
        setEndTime(
          customStartAndEndInSeconds
            ? parseInt(customStartAndEndInSeconds[1], 10)
            : calculatedDuration
        );
        setIsReady(true);
        onFirstReady?.(videoRef.current.getInternalPlayer());
      }
      setIsBuffering(false);
    };

    const handleProgress = () => {
      setCurrentTime(videoRef.current.getCurrentTime() - startTime);

      const { buffered } = videoRef.current.getInternalPlayer();
      if (buffered.length) {
        setBufferedTime(buffered.end(buffered.length - 1));
      }
      if (videoRef.current.getCurrentTime() - startTime >= duration) {
        setIsPlaying(false);
      }
      timeUpdateCallBack?.();
    };

    const handleOnPlay = () => {
      if (!isPlaying) {
        if (currentTime >= duration || currentTime < 1) {
          videoRef.current.seekTo(startTime);
        }
        setIsPlaying(true);
      }
      onPlayCallback?.();
    };

    const handleOnPause = () => {
      if (isPlaying) setIsPlaying(false);
      onPauseCallback?.();
    };

    const handleBuffering = () => {
      setIsBuffering(true);
    };

    const toggleFullscreen = () => {
      const videoElement = videoRef.current?.getInternalPlayer();
      if (!videoElement) return;

      if (!document.fullscreenElement) {
        lastActiveElementRef.current = document.activeElement;
        videoElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    };

    const handleKeyDown = useCallback(event => {
      if (
        event.key.toLowerCase() === "f" &&
        !event.shiftKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.metaKey &&
        containerRef.current &&
        containerRef.current.contains(document.activeElement)
      ) {
        toggleFullscreen();
      }
    }, []);

    useImperativeHandle(ref, () => ({
      seekTo(timeStamp) {
        if (timeStamp < 1) {
          videoRef.current.seekTo(0);
        }
        if (timeStamp >= startTime && timeStamp <= endTime) {
          videoRef.current.seekTo(timeStamp);
        }
      },
      play() {
        setIsPlaying(true);
      },
      pause() {
        setIsPlaying(false);
      },
      getCurrentTime() {
        return videoRef.current.getCurrentTime();
      },
    }));

    useEffect(() => {
      if (startTime < 1) {
        videoRef.current.seekTo(0);
      } else {
        videoRef.current.seekTo(startTime);
      }
    }, [startTime]);

    useEffect(() => {
      const handleFullscreenChange = () => {
        if (!document.fullscreenElement && lastActiveElementRef.current) {
          lastActiveElementRef.current.focus?.();
          lastActiveElementRef.current = null;
        }
      };

      document.addEventListener("fullscreenchange", handleFullscreenChange);
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener(
          "fullscreenchange",
          handleFullscreenChange
        );
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [handleKeyDown]);

    const modifiedChildren = React.Children.map(children, child =>
      // Clone the child element and add the ref to it
      React.cloneElement(child, { ref: videoRef })
    );

    return (
      <div ref={containerRef} className="w-full max-w-full focus:outline-none">
        <div
          className={twClassNames("relative max-w-full", wrapperClassName)}
          {...(id !== null && { id })}
        >
          <ReactPlayer
            url={url}
            width="100%"
            height="100%"
            ref={videoRef}
            playing={isPlaying}
            onPlay={handleOnPlay}
            onPause={handleOnPause}
            onBuffer={handleBuffering}
            onError={() => {
              onVideoError?.();
            }}
            onProgress={handleProgress}
            onReady={handleOnReady}
          />
          {isBuffering && (
            <div
              className={twClassNames(
                "absolute left-0 top-0 z-10 block h-full w-full overflow-hidden bg-neutral-inverse-weakest opacity-50"
              )}
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Loader wrapperClassName="w-6 h-6" />
              </div>
            </div>
          )}
        </div>
        <MediaPlayerContextData.Provider
          value={{
            bufferedTime,
            currentTime,
            duration,
            endTime,
            startTime,
          }}
        >
          <div
            className={twClassNames(
              "box-border flex h-[62px] w-full max-w-full flex-row items-start border-t border-neutral-strong p-0",
              {
                "fixed bottom-0": controlPanelAtBottom,
              },
              controlPanelWrapperClassName
            )}
          >
            <div className="flex w-full max-w-full flex-row flex-nowrap items-start">
              {modifiedChildren}
            </div>
          </div>
        </MediaPlayerContextData.Provider>
      </div>
    );
  }
);

MediaPlayer.propTypes = {
  children: PropTypes.node,
  controlPanelAtBottom: PropTypes.bool,
  controlPanelWrapperClassName: PropTypes.string,
  id: PropTypes.string,
  onFirstReady: PropTypes.func,
  onPauseCallback: PropTypes.func,
  onPlayCallback: PropTypes.func,
  onVideoError: PropTypes.func,
  timeUpdateCallBack: PropTypes.func,
  url: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-mediaplayer--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/96389e-media-player/b/4635b4
 * @end
 */

export default MediaPlayer;

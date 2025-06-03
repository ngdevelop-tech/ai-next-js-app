import { useContext } from 'react';

import { MediaPlayerContextData } from '../../shared/mediaPlayerContext';
import { printToConsole } from '../../utils/common';

const useMediaPlayerLeftControls = ({ ref, onRewindClick, onForwardClick }) => {
  const { currentTime, duration, endTime, startTime } = useContext(
    MediaPlayerContextData
  );

  const handlePlayPauseClick = () => {
    if (ref.current?.player?.isPlaying) {
      ref.current.getInternalPlayer().pause();
    } else {
      const playPromise = ref.current.getInternalPlayer().play();
      if (playPromise instanceof Promise) {
        playPromise.catch((e) => printToConsole('warn', e));
      }
    }
  };

  const handleRewindClick = (timeJump) => {
    if (startTime && currentTime - timeJump < startTime) {
      ref.current.seekTo(startTime);
    } else if (currentTime - timeJump < 1) {
      ref.current.seekTo(0);
    } else {
      ref.current.seekTo(currentTime - timeJump);
    }
    onRewindClick?.();
  };
  const handleForwardClick = (timeJump) => {
    if (endTime && currentTime + timeJump > endTime) {
      ref.current.seekTo(endTime);
    } else if (currentTime + timeJump > duration) {
      ref.current.seekTo(duration);
    } else {
      ref.current.seekTo(currentTime + timeJump);
    }
    onForwardClick?.();
  };

  return { handlePlayPauseClick, handleRewindClick, handleForwardClick };
};

export default useMediaPlayerLeftControls;

import { TAG_MODIFYING_CLASS } from './constants/tag';

const useTag = ({ anchorProps, disabled, onClick, withBorder, modifier }) => {
  const DynamicTag = anchorProps && !disabled ? 'a' : 'span';
  const clickableTag = onClick || anchorProps;

  let dismissIconStyles;

  if (disabled) {
    if (withBorder) {
      dismissIconStyles = 'icon-neutral-weaker';
    } else {
      dismissIconStyles = TAG_MODIFYING_CLASS[modifier].DISMISS_ICON.DISABLED;
    }
  } else {
    dismissIconStyles = TAG_MODIFYING_CLASS[modifier].DISMISS_ICON.HOVER_FOCUS;
    if (withBorder) {
      dismissIconStyles += ` ${TAG_MODIFYING_CLASS[modifier].DISMISS_ICON.WITH_BORDER} hover:bg-input-default-hover focus-visible:ring-brand-strong`;
    } else {
      dismissIconStyles += ` ${TAG_MODIFYING_CLASS[modifier].DISMISS_ICON.DEFAULT}`;
    }
  }

  return {
    DynamicTag,
    clickableTag,
    dismissIconStyles
  };
};

export default useTag;

export const SIDEBAR_MODIFIER = { SIMPLE: 'simple', BRAND: 'brand' };

export const MODIFIER_CLASSNAMES = {
  [SIDEBAR_MODIFIER.SIMPLE]: {
    ACTIVE_ITEM_CLASS: 'bg-neutral-strong text-brand-default',
    INACTIVE_ITEM_CLASS:
      'text-neutral-weak hover:bg-neutral-default-hover hover:text-brand-default',
    ACTIVE_ICON_CLASS: 'icon-brand-default h-5 w-5',
    INACTIVE_ICON_CLASS:
      'icon-neutral-weaker h-5 w-5 group-hover:icon-brand-default'
  },
  [SIDEBAR_MODIFIER.BRAND]: {
    ACTIVE_ITEM_CLASS:
      'bg-brand-weakest rounded-none pl-2 border-l-4 border-brand-stronger text-brand-strong',
    INACTIVE_ITEM_CLASS:
      'text-neutral-default hover:bg-neutral-default hover:text-brand-default rounded-none pl-4',
    ACTIVE_ICON_CLASS: 'icon-brand-strong h-5 w-5',
    INACTIVE_ICON_CLASS:
      'icon-neutral-strong h-5 w-5 group-hover:icon-brand-default'
  }
};

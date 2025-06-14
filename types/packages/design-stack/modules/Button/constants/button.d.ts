export declare const BUTTON_SIZES: {
    EXTRA_SMALL: string;
    SMALL: string;
    DEFAULT: string;
    LARGE: string;
    EXTRA_LARGE: string;
};
export declare const BUTTON_COLORS: {
    BRAND: string;
    SUCCESS: string;
    ATTENTION: string;
    DANGER: string;
    WHITE: string;
};
export declare const BUTTON_VARIANTS: {
    PRIMARY: string;
    SECONDARY: string;
    ROUNDED: string;
    MINIMAL: string;
};
export declare const BUTTON_ICON_PLACEMENT: {
    START: string;
    END: string;
};
export declare const BUTTON_DEFAULT_PROPS: {
    ariaLabel: string;
    children: string;
    colors: string;
    disabled: boolean;
    form: any;
    fullWidth: boolean;
    hasFocusWhenDisabled: boolean;
    icon: any;
    iconPlacement: string;
    id: any;
    isIconOnlyButton: boolean;
    loaderText: string;
    loading: boolean;
    onClick: any;
    size: string;
    type: string;
    variant: string;
    wrapperClassName: string;
};
export declare const BUTTON_ICON_SIZES: {
    'false-extra-small': string;
    'false-small': string;
    'false-default': string;
    'false-large': string;
    'false-extra-large': string;
    'true-extra-small': string;
    'true-small': string;
    'true-default': string;
    'true-large': string;
    'true-extra-large': string;
};
export declare const BUTTON_ICON_SIZES_CLASS: {
    'false-extra-small': string;
    'false-small': string;
    'false-default': string;
    'false-large': string;
    'false-extra-large': string;
    'true-extra-small': string;
    'true-small': string;
    'true-default': string;
    'true-large': string;
    'true-extra-large': string;
};
export declare const BUTTON_ICON_COLORS: {
    'brand-secondary': string;
    'success-secondary': string;
    'attention-secondary': string;
    'attention-primary': string;
    'attention-rounded': string;
    'danger-secondary': string;
    'white-secondary': string;
    'brand-minimal': string;
    'white-minimal': string;
    'white-primary': string;
    'white-rounded': string;
    'brand-secondary-only-icon': string;
    'success-secondary-only-icon': string;
    'attention-secondary-only-icon': string;
    'attention-primary-only-icon': string;
    'attention-rounded-only-icon': string;
    'danger-secondary-only-icon': string;
    'brand-minimal-only-icon': string;
    'white-minimal-only-icon': string;
    'white-primary-only-icon': string;
    'white-rounded-only-icon': string;
};
export declare const BUTTON_DISABLED_ICON_COLORS: {
    brand: string;
    success: string;
    attention: string;
    'attention-secondary': string;
    danger: string;
    white: string;
};
/**
 * BUTTON_LOADER_CLASSES to be accessed in below format -
{
  '[colors]-[variant]': {
    loaderPrimaryColor :'primary-color-class',
    loaderSecondaryColor: 'secondary-color-class'
  }
}
 */
export declare const BUTTON_LOADER_CLASSES: {
    'brand-primary': {
        LOADER_PRIMARY_COLOR: string;
        LOADER_SECONDARY_COLOR: string;
    };
    'brand-secondary': {
        LOADER_PRIMARY_COLOR: string;
        LOADER_SECONDARY_COLOR: string;
    };
    'brand-rounded': {
        LOADER_PRIMARY_COLOR: string;
        LOADER_SECONDARY_COLOR: string;
    };
    'brand-minimal': {
        LOADER_PRIMARY_COLOR: string;
        LOADER_SECONDARY_COLOR: string;
    };
    'success-primary': {
        LOADER_PRIMARY_COLOR: string;
        LOADER_SECONDARY_COLOR: string;
    };
    'success-secondary': {
        LOADER_PRIMARY_COLOR: string;
        LOADER_SECONDARY_COLOR: string;
    };
    'success-rounded': {
        LOADER_PRIMARY_COLOR: string;
        LOADER_SECONDARY_COLOR: string;
    };
    'success-minimal': {
        LOADER_PRIMARY_COLOR: string;
        LOADER_SECONDARY_COLOR: string;
    };
    'attention-primary': {
        LOADER_PRIMARY_COLOR: string;
        LOADER_SECONDARY_COLOR: string;
    };
    'attention-secondary': {
        LOADER_PRIMARY_COLOR: string;
        LOADER_SECONDARY_COLOR: string;
    };
    'attention-rounded': {
        LOADER_PRIMARY_COLOR: string;
        LOADER_SECONDARY_COLOR: string;
    };
    'attention-minimal': {
        LOADER_PRIMARY_COLOR: string;
        LOADER_SECONDARY_COLOR: string;
    };
    'danger-primary': {
        LOADER_PRIMARY_COLOR: string;
        LOADER_SECONDARY_COLOR: string;
    };
    'danger-secondary': {
        LOADER_PRIMARY_COLOR: string;
        LOADER_SECONDARY_COLOR: string;
    };
    'danger-rounded': {
        LOADER_PRIMARY_COLOR: string;
        LOADER_SECONDARY_COLOR: string;
    };
    'danger-minimal': {
        LOADER_PRIMARY_COLOR: string;
        LOADER_SECONDARY_COLOR: string;
    };
    'white-primary': {
        LOADER_PRIMARY_COLOR: string;
        LOADER_SECONDARY_COLOR: string;
    };
    'white-secondary': {
        LOADER_PRIMARY_COLOR: string;
        LOADER_SECONDARY_COLOR: string;
    };
    'white-rounded': {
        LOADER_PRIMARY_COLOR: string;
        LOADER_SECONDARY_COLOR: string;
    };
    'white-minimal': {
        LOADER_PRIMARY_COLOR: string;
        LOADER_SECONDARY_COLOR: string;
    };
};
export declare const BUTTON_STYLE_CLASSES: {
    'extra-small-brand-primary': string;
    'extra-small-brand-secondary': string;
    'extra-small-brand-rounded': string;
    'extra-small-brand-minimal': string;
    'extra-small-success-primary': string;
    'extra-small-success-secondary': string;
    'extra-small-success-rounded': string;
    'extra-small-danger-primary': string;
    'extra-small-danger-secondary': string;
    'extra-small-danger-rounded': string;
    'extra-small-attention-primary': string;
    'extra-small-attention-secondary': string;
    'extra-small-attention-rounded': string;
    'extra-small-white-primary': string;
    'extra-small-white-rounded': string;
    'extra-small-white-minimal': string;
    'small-brand-primary': string;
    'small-brand-secondary': string;
    'small-brand-rounded': string;
    'small-brand-minimal': string;
    'small-success-primary': string;
    'small-success-secondary': string;
    'small-success-rounded': string;
    'small-danger-primary': string;
    'small-danger-secondary': string;
    'small-danger-rounded': string;
    'small-attention-primary': string;
    'small-attention-secondary': string;
    'small-attention-rounded': string;
    'small-white-primary': string;
    'small-white-rounded': string;
    'small-white-minimal': string;
    'default-brand-primary': string;
    'default-brand-secondary': string;
    'default-brand-rounded': string;
    'default-brand-minimal': string;
    'default-success-primary': string;
    'default-success-secondary': string;
    'default-success-rounded': string;
    'default-danger-primary': string;
    'default-danger-secondary': string;
    'default-danger-rounded': string;
    'default-attention-primary': string;
    'default-attention-secondary': string;
    'default-attention-rounded': string;
    'default-white-primary': string;
    'default-white-rounded': string;
    'default-white-minimal': string;
    'large-brand-primary': string;
    'large-brand-secondary': string;
    'large-brand-rounded': string;
    'large-brand-minimal': string;
    'large-success-primary': string;
    'large-success-secondary': string;
    'large-success-rounded': string;
    'large-danger-primary': string;
    'large-danger-secondary': string;
    'large-danger-rounded': string;
    'large-attention-primary': string;
    'large-attention-secondary': string;
    'large-attention-rounded': string;
    'large-white-primary': string;
    'large-white-rounded': string;
    'large-white-minimal': string;
    'extra-large-brand-primary': string;
    'extra-large-brand-secondary': string;
    'extra-large-brand-rounded': string;
    'extra-large-brand-minimal': string;
    'extra-large-success-primary': string;
    'extra-large-success-secondary': string;
    'extra-large-success-rounded': string;
    'extra-large-danger-primary': string;
    'extra-large-danger-secondary': string;
    'extra-large-danger-rounded': string;
    'extra-large-attention-primary': string;
    'extra-large-attention-secondary': string;
    'extra-large-attention-rounded': string;
    'extra-large-white-primary': string;
    'extra-large-white-rounded': string;
    'extra-large-white-minimal': string;
    'extra-small-brand-primary-disabled': string;
    'extra-small-brand-secondary-disabled': string;
    'extra-small-brand-rounded-disabled': string;
    'extra-small-brand-minimal-disabled': string;
    'extra-small-success-primary-disabled': string;
    'extra-small-success-secondary-disabled': string;
    'extra-small-success-rounded-disabled': string;
    'extra-small-danger-primary-disabled': string;
    'extra-small-danger-secondary-disabled': string;
    'extra-small-danger-rounded-disabled': string;
    'extra-small-attention-primary-disabled': string;
    'extra-small-attention-secondary-disabled': string;
    'extra-small-attention-rounded-disabled': string;
    'extra-small-white-primary-disabled': string;
    'extra-small-white-rounded-disabled': string;
    'extra-small-white-minimal-disabled': string;
    'small-brand-primary-disabled': string;
    'small-brand-secondary-disabled': string;
    'small-brand-rounded-disabled': string;
    'small-brand-minimal-disabled': string;
    'small-success-primary-disabled': string;
    'small-success-secondary-disabled': string;
    'small-success-rounded-disabled': string;
    'small-danger-primary-disabled': string;
    'small-danger-secondary-disabled': string;
    'small-danger-rounded-disabled': string;
    'small-attention-primary-disabled': string;
    'small-attention-secondary-disabled': string;
    'small-attention-rounded-disabled': string;
    'small-white-primary-disabled': string;
    'small-white-rounded-disabled': string;
    'small-white-minimal-disabled': string;
    'default-brand-primary-disabled': string;
    'default-brand-secondary-disabled': string;
    'default-brand-rounded-disabled': string;
    'default-brand-minimal-disabled': string;
    'default-success-primary-disabled': string;
    'default-success-secondary-disabled': string;
    'default-success-rounded-disabled': string;
    'default-danger-primary-disabled': string;
    'default-danger-secondary-disabled': string;
    'default-danger-rounded-disabled': string;
    'default-attention-primary-disabled': string;
    'default-attention-secondary-disabled': string;
    'default-attention-rounded-disabled': string;
    'default-white-primary-disabled': string;
    'default-white-rounded-disabled': string;
    'default-white-minimal-disabled': string;
    'large-brand-primary-disabled': string;
    'large-brand-secondary-disabled': string;
    'large-brand-rounded-disabled': string;
    'large-brand-minimal-disabled': string;
    'large-success-primary-disabled': string;
    'large-success-secondary-disabled': string;
    'large-success-rounded-disabled': string;
    'large-danger-primary-disabled': string;
    'large-danger-secondary-disabled': string;
    'large-danger-rounded-disabled': string;
    'large-attention-primary-disabled': string;
    'large-attention-secondary-disabled': string;
    'large-attention-rounded-disabled': string;
    'large-white-primary-disabled': string;
    'large-white-rounded-disabled': string;
    'large-white-minimal-disabled': string;
    'extra-large-brand-primary-disabled': string;
    'extra-large-brand-secondary-disabled': string;
    'extra-large-brand-rounded-disabled': string;
    'extra-large-brand-minimal-disabled': string;
    'extra-large-success-primary-disabled': string;
    'extra-large-success-secondary-disabled': string;
    'extra-large-success-rounded-disabled': string;
    'extra-large-danger-primary-disabled': string;
    'extra-large-danger-secondary-disabled': string;
    'extra-large-danger-rounded-disabled': string;
    'extra-large-attention-primary-disabled': string;
    'extra-large-attention-secondary-disabled': string;
    'extra-large-attention-rounded-disabled': string;
    'extra-large-white-primary-disabled': string;
    'extra-large-white-rounded-disabled': string;
    'extra-large-white-minimal-disabled': string;
    'extra-small-brand-primary-loading': string;
    'extra-small-brand-secondary-loading': string;
    'extra-small-brand-rounded-loading': string;
    'extra-small-success-primary-loading': string;
    'extra-small-success-secondary-loading': string;
    'extra-small-success-rounded-loading': string;
    'extra-small-danger-primary-loading': string;
    'extra-small-danger-secondary-loading': string;
    'extra-small-danger-rounded-loading': string;
    'extra-small-attention-primary-loading': string;
    'extra-small-attention-secondary-loading': string;
    'extra-small-attention-rounded-loading': string;
    'extra-small-white-primary-loading': string;
    'extra-small-white-rounded-loading': string;
    'small-brand-primary-loading': string;
    'small-brand-secondary-loading': string;
    'small-brand-rounded-loading': string;
    'small-success-primary-loading': string;
    'small-success-secondary-loading': string;
    'small-success-rounded-loading': string;
    'small-danger-primary-loading': string;
    'small-danger-secondary-loading': string;
    'small-danger-rounded-loading': string;
    'small-attention-primary-loading': string;
    'small-attention-secondary-loading': string;
    'small-attention-rounded-loading': string;
    'small-white-primary-loading': string;
    'small-white-rounded-loading': string;
    'default-brand-primary-loading': string;
    'default-brand-secondary-loading': string;
    'default-brand-rounded-loading': string;
    'default-success-primary-loading': string;
    'default-success-secondary-loading': string;
    'default-success-rounded-loading': string;
    'default-danger-primary-loading': string;
    'default-danger-secondary-loading': string;
    'default-danger-rounded-loading': string;
    'default-attention-primary-loading': string;
    'default-attention-secondary-loading': string;
    'default-attention-rounded-loading': string;
    'default-white-primary-loading': string;
    'default-white-rounded-loading': string;
    'large-brand-primary-loading': string;
    'large-brand-secondary-loading': string;
    'large-brand-rounded-loading': string;
    'large-success-primary-loading': string;
    'large-success-secondary-loading': string;
    'large-success-rounded-loading': string;
    'large-danger-primary-loading': string;
    'large-danger-secondary-loading': string;
    'large-danger-rounded-loading': string;
    'large-attention-primary-loading': string;
    'large-attention-secondary-loading': string;
    'large-attention-rounded-loading': string;
    'large-white-primary-loading': string;
    'large-white-rounded-loading': string;
    'extra-large-brand-primary-loading': string;
    'extra-large-brand-secondary-loading': string;
    'extra-large-brand-rounded-loading': string;
    'extra-large-success-primary-loading': string;
    'extra-large-success-secondary-loading': string;
    'extra-large-success-rounded-loading': string;
    'extra-large-danger-primary-loading': string;
    'extra-large-danger-secondary-loading': string;
    'extra-large-danger-rounded-loading': string;
    'extra-large-attention-primary-loading': string;
    'extra-large-attention-secondary-loading': string;
    'extra-large-attention-rounded-loading': string;
    'extra-large-white-primary-loading': string;
    'extra-large-white-rounded-loading': string;
};
export declare const BUTTON_TYPES: {
    BUTTON: string;
    SUBMIT: string;
};

export declare const HIGHLIGHT_TYPE: {
    NEUTRAL: string;
    DANGER: string;
    ATTENTION: string;
};
export declare const COLOR_SHADES: {
    [HIGHLIGHT_TYPE.DANGER]: {
        TEXT_COLOR: string;
        DARK_COLOR: string;
        LIGHT_COLOR: string;
    };
    [HIGHLIGHT_TYPE.ATTENTION]: {
        TEXT_COLOR: string;
        DARK_COLOR: string;
        LIGHT_COLOR: string;
    };
    [HIGHLIGHT_TYPE.NEUTRAL]: {
        TEXT_COLOR: string;
        DARK_COLOR: string;
        LIGHT_COLOR: string;
    };
};
export declare const CODE_VIEW: {
    NEUTRAL: string;
    DANGER: string;
    ATTENTION: string;
};
export declare const VIEW_SHADES: {
    [CODE_VIEW.DANGER]: {
        TEXT_COLOR: string;
        BACKGROUND_BORDER_COLOR: string;
    };
    [CODE_VIEW.ATTENTION]: {
        TEXT_COLOR: string;
        BACKGROUND_BORDER_COLOR: string;
    };
};
export declare const CODE_VIEW_COLOR_CLASSES: {
    [CODE_VIEW.NEUTRAL]: {};
    [CODE_VIEW.DANGER]: {
        BORDER_COLOR: string;
        BACKGROUND_COLOR: string;
        TEXT_COLOR: string;
    };
    [CODE_VIEW.ATTENTION]: {
        BORDER_COLOR: string;
        BACKGROUND_COLOR: string;
        TEXT_COLOR: string;
    };
};

export declare const INPUT_BADGE_TYPE: {
    BASE: string;
    PRIMARY: string;
    SUCCESS: string;
    ERROR: string;
    WARN: string;
    INFO: string;
    WHITE: string;
    PINK: string;
};
export declare const INPUT_BADGE_COLOUR_CLASSES: {
    [INPUT_BADGE_TYPE.BASE]: {
        BG_TEXT: string;
    };
    [INPUT_BADGE_TYPE.PRIMARY]: {
        BG_TEXT: string;
    };
    [INPUT_BADGE_TYPE.SUCCESS]: {
        BG_TEXT: string;
    };
    [INPUT_BADGE_TYPE.ERROR]: {
        BG_TEXT: string;
    };
    [INPUT_BADGE_TYPE.WARN]: {
        BG_TEXT: string;
    };
    [INPUT_BADGE_TYPE.INFO]: {
        BG_TEXT: string;
    };
    [INPUT_BADGE_TYPE.WHITE]: {
        BG_TEXT: string;
    };
    [INPUT_BADGE_TYPE.PINK]: {
        BG_TEXT: string;
    };
};
export declare const MENTION_INPUT_STYLES: {
    '&singleLine': {
        highlighter: {
            fontSize: string;
            substring: {
                visibility: string;
            };
        };
        input: {
            fontSize: string;
        };
    };
    suggestions: {
        backgroundColor: string;
        margin: number;
        zIndex: number;
        list: {
            marginTop: string;
        };
        item: {
            '&focused': {
                backgroundColor: string;
            };
        };
    };
};

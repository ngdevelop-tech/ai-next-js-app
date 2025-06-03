export declare const STATS_VARIANTS: {
    WITH_ICON: string;
    WITHOUT_ICON: string;
    SIMPLE: string;
    KPI_VARIANT: string;
    GRAPH_VARIANT: string;
};
export declare const STATS_INC = "increase";
export declare const STATS_DEC = "decrease";
export declare const COMMON_WRAPPER_CLASSES = "py-5 sm:py-6";
export declare const STATS_WRAPPER_CLASSES: {
    [STATS_VARIANTS.WITH_ICON]: string;
    [STATS_VARIANTS.WITHOUT_ICON]: string;
    [STATS_VARIANTS.SIMPLE]: string;
    [STATS_VARIANTS.KPI_VARIANT]: string;
    [STATS_VARIANTS.GRAPH_VARIANT]: string;
};
export declare const STATS_OPTION_CLASSES: {
    [STATS_VARIANTS.WITH_ICON]: string;
    [STATS_VARIANTS.WITHOUT_ICON]: string;
    [STATS_VARIANTS.SIMPLE]: string;
    [STATS_VARIANTS.KPI_VARIANT]: string;
    [STATS_VARIANTS.GRAPH_VARIANT]: string;
};
export declare const VARIANTS_PROPTYPES: {
    /** Determines whether the digits in the component should be displayed using a monospaced font */
    monospacedDigits: any;
    /** An object containing data related to the stat card */
    option: any;
    /** A custom CSS color value to style the text color of the stat value in option */
    textColor: any;
};

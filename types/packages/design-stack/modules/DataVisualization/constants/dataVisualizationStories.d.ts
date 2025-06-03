export declare const OPTIONS: ({
    id: string;
    body: string;
    divider?: undefined;
} | {
    id: string;
    body: string;
    divider: boolean;
})[];
export declare const DATA_VISUALIZATION_DESCRIPTION = "This description is optional. The legend and charts displayed above are image references intended to maintain the package's lightweight nature. This section serves as a node where High-chart visualizations or tables can be seamlessly integrated.";
export declare const DATA_VISUALIZATION_FOOTER_LINK_PROPS: {
    href: string;
    target: string;
};
export declare const KPI_ARRAY: {
    id: string;
    title: string;
    stat: string;
}[];
export declare const KPI_ARRAY_HORIZONTAL: {
    id: string;
    title: string;
    stat: string;
    description: string;
    leadingIconNode: import("react/jsx-runtime").JSX.Element;
    badgeNode: import("react/jsx-runtime").JSX.Element;
}[];
export declare const KPI_ARRAY_VERTICAL: {
    id: string;
    title: string;
    stat: string;
    description: string;
    direction: string;
    isBadgeBeforeDescription: boolean;
    trailingIconNode: import("react/jsx-runtime").JSX.Element;
    badgeNode: import("react/jsx-runtime").JSX.Element;
}[];
export declare const DATA_VISUALIZATION_ANALYTICS_IMAGE: import("react/jsx-runtime").JSX.Element;

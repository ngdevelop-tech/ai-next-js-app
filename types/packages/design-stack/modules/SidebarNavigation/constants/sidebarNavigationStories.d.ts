export declare const SELECT_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const PRIMARY_NAVS: ({
    id: string;
    label: string;
    activeIcon: import("react-icons/lib").IconType;
    inActiveIcon: import("react-icons/lib").IconType;
    path: string;
    badge: import("react/jsx-runtime").JSX.Element;
    childrens?: undefined;
} | {
    id: string;
    label: string;
    activeIcon: import("react-icons/lib").IconType;
    inActiveIcon: import("react-icons/lib").IconType;
    path: string;
    badge?: undefined;
    childrens?: undefined;
} | {
    id: string;
    label: string;
    activeIcon: import("react-icons/lib").IconType;
    inActiveIcon: import("react-icons/lib").IconType;
    path: string;
    childrens: {
        id: string;
        label: string;
        path: string;
        badge: import("react/jsx-runtime").JSX.Element;
    }[];
    badge?: undefined;
} | {
    id: string;
    label: string;
    activeIcon: import("react-icons/lib").IconType;
    inActiveIcon: import("react-icons/lib").IconType;
    path: string;
    childrens: ({
        id: string;
        menuNode: import("react/jsx-runtime").JSX.Element;
        label?: undefined;
        path?: undefined;
    } | {
        id: string;
        label: string;
        path: string;
        menuNode?: undefined;
    })[];
    badge?: undefined;
})[];
export declare const NAV_OPTIONS_WITH_LABEL: {
    id: string;
    label: string;
    activeIcon: import("react-icons/lib").IconType;
    inActiveIcon: import("react-icons/lib").IconType;
    path: string;
}[];
export declare const EXTRA_NAV_OPTIONS_WITH_LABEL: {
    id: string;
    label: string;
    activeIcon: import("react-icons/lib").IconType;
    inActiveIcon: import("react-icons/lib").IconType;
    path: string;
}[];
export declare const SECONDARY_NAVS: ({
    id: string;
    label: string;
    activeIcon: import("react-icons/lib").IconType;
    inActiveIcon: import("react-icons/lib").IconType;
    path: string;
    badge?: undefined;
} | {
    id: string;
    label: string;
    activeIcon: import("react-icons/lib").IconType;
    inActiveIcon: import("react-icons/lib").IconType;
    path: string;
    badge: import("react/jsx-runtime").JSX.Element;
})[];
export declare const SIDEBAR_COMBOBOX_OPTIONS: {
    value: number;
    label: string;
}[];

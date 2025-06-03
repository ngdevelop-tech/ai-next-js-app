export declare const HEADINGS: string[];
export declare const NAMES: string[];
export declare const TITLES: string[];
export declare const EMAILS: string[];
export declare const ROLES: string[];
export declare const TABLE_ROWS: ({
    id: string;
    name: string;
    title: string;
    email: string;
    role: string;
} | {
    name: string;
    title: string;
    email: string;
    role: string;
    id?: undefined;
})[];
export declare const SELECTABLE_TABLE_ROWS: {
    id: string;
    name: string;
    title: string;
    email: string;
    role: string;
}[];
export declare const MLC_COLUMNS: ({
    name: string;
    key: string;
    cell: (value: any) => import("react/jsx-runtime").JSX.Element;
} | {
    name: string;
    key: string;
    cell?: undefined;
})[];
export declare const MLC_ROWS: {
    name: string;
    title: string;
    department: string;
    email: string;
    role: string;
    image: string;
    key: number;
}[];
export declare const COLUMNS: ({
    name: string;
    key: string;
    isSortable: boolean;
    isResizable: boolean;
    defaultWidth: number;
    maxWidth: number;
    minWidth?: undefined;
    cell?: undefined;
} | {
    name: string;
    key: string;
    isSortable: boolean;
    isResizable?: undefined;
    defaultWidth?: undefined;
    maxWidth?: undefined;
    minWidth?: undefined;
    cell?: undefined;
} | {
    name: string;
    key: string;
    isResizable: boolean;
    minWidth: number;
    defaultWidth: number;
    isSortable?: undefined;
    maxWidth?: undefined;
    cell?: undefined;
} | {
    name: string;
    key: string;
    isSortable?: undefined;
    isResizable?: undefined;
    defaultWidth?: undefined;
    maxWidth?: undefined;
    minWidth?: undefined;
    cell?: undefined;
} | {
    name: string;
    key: string;
    cell: () => import("react/jsx-runtime").JSX.Element;
    isSortable?: undefined;
    isResizable?: undefined;
    defaultWidth?: undefined;
    maxWidth?: undefined;
    minWidth?: undefined;
})[];
export declare const GRT_COLUMNS: ({
    name: string;
    key: string;
    cell?: undefined;
} | {
    name: string;
    key: string;
    cell: () => import("react/jsx-runtime").JSX.Element;
})[];
export declare const GRT_ROWS: {
    name: string;
    id: string;
    people: {
        id: string;
        name: string;
        title: string;
        email: string;
        role: string;
    }[];
}[];
export declare const GROUPED_NAMES: string[];
export declare const GROUPED_TITLES: string[];
export declare const GROUPED_ROLES: string[];
export declare const GROUPED_EMAILS: string[];
export declare const GROUPED_LOCATIONS: string[];
export declare const DEFAULT_STYLING_COL_0 = "text-neutral-default font-medium";
export declare const DEFAULT_STYLING_COL_OTHERS = "text-neutral-weaker";
export declare const TBT_ROWS: {
    name: string;
    title: string;
    email: string;
    role: string;
}[];
export declare const TBT_COLUMNS: ({
    name: string;
    key: string;
    isSortable: boolean;
    cell?: undefined;
} | {
    name: string;
    key: string;
    isSortable?: undefined;
    cell?: undefined;
} | {
    name: string;
    key: string;
    cell: () => import("react/jsx-runtime").JSX.Element;
    isSortable?: undefined;
})[];
export declare const DRAGGABLE_ROWS_DATA: {
    name: string;
    id: number;
    title: string;
    email: string;
    role: string;
}[];
export declare const COLUMNS_VERTICAL_LINES_DATA: ({
    key: string;
    name: string;
    isResizable: boolean;
    defaultWidth: number;
    maxWidth: number;
} | {
    key: string;
    name: string;
    isResizable?: undefined;
    defaultWidth?: undefined;
    maxWidth?: undefined;
})[];
export declare const ROWS_VERTICAL_LINES_DATA: ({
    id: number;
    coverage: {
        cell: import("react/jsx-runtime").JSX.Element;
        rowspan: number;
    };
    testCases: {
        cell: import("react/jsx-runtime").JSX.Element;
        rowspan?: undefined;
    };
    testExecution: {
        cell: import("react/jsx-runtime").JSX.Element;
        colspan?: undefined;
    };
    issues: {
        cell: import("react/jsx-runtime").JSX.Element;
    };
} | {
    id: number;
    testCases: {
        cell: import("react/jsx-runtime").JSX.Element;
        rowspan: number;
    };
    testExecution: {
        cell: import("react/jsx-runtime").JSX.Element;
        colspan: number;
    };
    coverage?: undefined;
    issues?: undefined;
} | {
    id: number;
    testExecution: {
        cell: import("react/jsx-runtime").JSX.Element;
        colspan?: undefined;
    };
    issues: {
        cell: import("react/jsx-runtime").JSX.Element;
    };
    coverage?: undefined;
    testCases?: undefined;
})[];
export declare const LOADING_TABLE_COLUMNS: ({
    name: string;
    key: string;
    loadingVariant: string;
    cell: (value: any) => import("react/jsx-runtime").JSX.Element;
} | {
    name: string;
    key: string;
    loadingVariant: string;
    cell?: undefined;
})[];
export declare const LOADING_TABLE_ROWS: {
    name: string;
    title: string;
    department: string;
    email: string;
    role: string;
    image: string;
    key: number;
}[];

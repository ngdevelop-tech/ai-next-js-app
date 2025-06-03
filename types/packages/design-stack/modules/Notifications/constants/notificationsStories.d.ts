export declare const NOTIFICATIONS_DATA: ({
    title: string;
    description: string;
    actionButtons: any;
    headerIcon: import("react/jsx-runtime").JSX.Element;
    notifyArgs: {
        position: string;
        duration: number;
        autoClose: boolean;
        size: string;
    };
    isCondensed?: undefined;
} | {
    title: string;
    isCondensed: boolean;
    actionButtons: (toastData: any) => import("react/jsx-runtime").JSX.Element;
    notifyArgs: {
        position: string;
        duration: number;
        size: string;
        autoClose?: undefined;
    };
    description?: undefined;
    headerIcon?: undefined;
} | {
    title: string;
    description: string;
    headerIcon: import("react/jsx-runtime").JSX.Element;
    actionButtons: (toastData: any) => import("react/jsx-runtime").JSX.Element;
    notifyArgs: {
        position: string;
        duration: number;
        autoClose?: undefined;
        size?: undefined;
    };
    isCondensed?: undefined;
})[];

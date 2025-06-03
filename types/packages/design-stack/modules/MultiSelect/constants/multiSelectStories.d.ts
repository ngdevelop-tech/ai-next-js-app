declare const DATA: ({
    id: string;
    title: string;
    icon: import("react/jsx-runtime").JSX.Element;
    subCategories: {
        id: string;
        title: string;
        icon: import("react/jsx-runtime").JSX.Element;
        subCategories: {
            id: string;
            icon: import("react/jsx-runtime").JSX.Element;
            title: string;
            details: string;
        }[];
    }[];
} | {
    id: string;
    title: string;
    icon: import("react/jsx-runtime").JSX.Element;
    subCategories: {
        id: string;
        title: string;
        icon: import("react/jsx-runtime").JSX.Element;
        subCategories: {
            id: string;
            icon: import("react/jsx-runtime").JSX.Element;
            title: string;
        }[];
    }[];
} | {
    id: string;
    title: string;
    icon: import("react/jsx-runtime").JSX.Element;
    subCategories: {
        id: string;
        title: string;
    }[];
})[];
declare const ADVANCED_DATA: ({
    id: string;
    title: string;
    icon: import("react/jsx-runtime").JSX.Element;
    triggerLabel: string;
    triggerIcon: import("react/jsx-runtime").JSX.Element;
    subCategories: ({
        id: string;
        title: string;
        hasScrollHelper: boolean;
        subCategories: {
            id: string;
            title: string;
            icon: import("react/jsx-runtime").JSX.Element;
            hasScrollHelper: boolean;
            subCategories: ({
                id: string;
                title: string;
                icon: import("react/jsx-runtime").JSX.Element;
                triggerLabel: string;
                triggerIcon: import("react/jsx-runtime").JSX.Element;
                actionIcons: {
                    icon: import("react/jsx-runtime").JSX.Element;
                    value: string;
                }[];
                details: string;
            } | {
                id: string;
                title: string;
                icon: import("react/jsx-runtime").JSX.Element;
                triggerLabel: string;
                triggerIcon: import("react/jsx-runtime").JSX.Element;
                details: string;
                actionIcons?: undefined;
            })[];
        }[];
    } | {
        id: string;
        title: string;
        hasScrollHelper: boolean;
        subCategories: {
            id: string;
            title: string;
            icon: import("react/jsx-runtime").JSX.Element;
            hasScrollHelper: boolean;
            subCategories: {
                id: string;
                title: string;
                icon: import("react/jsx-runtime").JSX.Element;
                triggerLabel: string;
                triggerIcon: import("react/jsx-runtime").JSX.Element;
                actionIcons: {
                    icon: import("react/jsx-runtime").JSX.Element;
                    value: string;
                }[];
            }[];
        }[];
    })[];
} | {
    id: string;
    title: string;
    icon: import("react/jsx-runtime").JSX.Element;
    subCategories: {
        id: string;
        title: string;
        triggerLabel: string;
        triggerIcon: import("react/jsx-runtime").JSX.Element;
        subCategories: {
            id: string;
            title: string;
            icon: import("react/jsx-runtime").JSX.Element;
            subCategories: {
                id: string;
                title: string;
                triggerLabel: string;
                triggerIcon: import("react/jsx-runtime").JSX.Element;
            }[];
        }[];
    }[];
    triggerLabel?: undefined;
    triggerIcon?: undefined;
})[];
export { ADVANCED_DATA, DATA };

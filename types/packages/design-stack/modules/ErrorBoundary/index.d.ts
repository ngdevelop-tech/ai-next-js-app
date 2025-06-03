/**
 * @typedef {Object} ErrorBoundaryContainerProps
 * @property {React.ReactNode} children?
 * @property {boolean} error?
 * @property {React.ReactNode} fallbackUI?
 * @property {(event: React.MouseEvent<any>) => void} onError
 */
import React from "react";
export declare const ErrorBoundary: {
    ({ children: any, fallbackUI }: any): React.ReactElement;
    propTypes: {
        /** Node containing the content that will be displayed within children of the ErrorBoundary component to contain any errors in the children */
        children: any;
        /** Incase of an error show fallback UI */
        fallbackUI: any;
    };
    defaultProps: {
        children: any;
        fallbackUI: any;
    };
    displayName: string;
};
export declare const withErrorBoundary: (WrappedComponent: any) => {
    (props: any): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const useErrorBoundary: (componentDidCatch: any) => any[];

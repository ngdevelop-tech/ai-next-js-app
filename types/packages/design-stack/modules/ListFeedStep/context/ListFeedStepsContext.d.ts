/**
 * @typedef {Object} ListFeedStepsProviderProps
 * @property {React.ReactNode} children
 * @property {Record<string, any>} value?
 */
import React from "react";
export declare const ListFeedStepsContext: React.Context<any>;
export declare const ListFeedStepsProvider: {
    ({ children: any, value }: any): React.ReactElement;
    propTypes: {
        children: any;
        value: any;
    };
};

/**
 * @typedef {Object} SkeletonLoaderProps
 * @property {boolean} animate?
 * @property {React.ReactNode} icon?
 * @property {any} iconSize?
 * @property {string} id?
 * @property {any} shape?
 * @property {string} wrapperClassName?
 */
import React from "react";
/**
 * @type {React.FC<SkeletonLoaderProps>}
 */
declare const SkeletonLoader: {
    ({ animate: any, icon: any, iconSize: any, id: any, shape: any, wrapperClassName: any, }: any): React.ReactElement;
    propTypes: {
        animate: any;
        icon: any;
        iconSize: any;
        id: any;
        shape: any;
        wrapperClassName: any;
    };
    defaultProps: {
        animate: boolean;
        icon: any;
        iconSize: string;
        id: any;
        shape: string;
        wrapperClassName: string;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-skeletonloader--primary
 * @zeroHeight
 * @end
 */
export default SkeletonLoader;

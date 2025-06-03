/**
 * @typedef {Object} MarkerProps
 * @property {number} duration
 * @property {(event: React.MouseEvent<any>) => void} onMarkerClick?
 * @property {(event: React.MouseEvent<any>) => void} onMarkerMouseEnter?
 * @property {(event: React.MouseEvent<any>) => void} onMarkerMouseLeave?
 * @property {number} startTime
 * @property {any} type?
 * @property {string} wrapperClassName?
 */
import React from "react";
/**
 * @type {React.FC<MarkerProps>}
 */
declare const Marker: {
    ({ startTime: any, duration: any, onMarkerClick: any, onMarkerMouseEnter: any, onMarkerMouseLeave: any, type: any, wrapperClassName: any, }: any): React.ReactElement;
    propTypes: {
        duration: any;
        onMarkerClick: any;
        onMarkerMouseEnter: any;
        onMarkerMouseLeave: any;
        startTime: any;
        type: any;
        wrapperClassName: any;
    };
    defaultProps: {
        onMarkerClick: () => void;
        onMarkerMouseEnter: () => void;
        onMarkerMouseLeave: () => void;
        type: string;
        wrapperClassName: string;
    };
};
export default Marker;

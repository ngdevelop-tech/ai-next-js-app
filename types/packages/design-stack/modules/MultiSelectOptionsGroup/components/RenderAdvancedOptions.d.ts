import React from "react";
declare const RenderAdvancedOptions: {
    ({ option: any, data: any, currentLevel }: any): React.ReactElement;
    propTypes: {
        /** Current level number */
        currentLevel: any;
        /** Available nested data for level */
        data: any;
        /** Available data for level */
        option: any;
    };
};
export default RenderAdvancedOptions;

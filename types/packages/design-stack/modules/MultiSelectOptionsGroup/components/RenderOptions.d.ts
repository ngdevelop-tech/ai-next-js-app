declare function RenderOptions({ data, currentLevel, isLastLevel }: {
    data: any;
    currentLevel: any;
    isLastLevel?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare namespace RenderOptions {
    var propTypes: {
        /** Current level number */
        currentLevel: any;
        /** Available nested data for level */
        data: any;
        /** Specify if this level is last level as per available data */
        isLastLevel: any;
    };
}
export default RenderOptions;

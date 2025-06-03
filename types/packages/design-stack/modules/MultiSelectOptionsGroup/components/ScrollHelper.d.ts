declare function ScrollHelper({ data, currentLevel, handleSelection }: {
    data: any;
    currentLevel: any;
    handleSelection?: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace ScrollHelper {
    var propTypes: {
        /** Current level number */
        currentLevel: any;
        /** column subcategory data to help scroll */
        data: any;
        /** Callback to select that option */
        handleSelection: any;
    };
}
export default ScrollHelper;

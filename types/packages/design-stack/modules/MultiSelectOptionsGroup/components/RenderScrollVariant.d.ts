declare function RenderScrollVariant({ data, selectedCategory, currentLevel }: {
    data: any;
    selectedCategory: any;
    currentLevel: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace RenderScrollVariant {
    var propTypes: {
        /** Current level number */
        currentLevel: any;
        /** Available options */
        data: any;
        /** Selected category of options */
        selectedCategory: any;
    };
}
export default RenderScrollVariant;

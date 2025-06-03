/**
 * @typedef {Object} StackedCardProps
 * @property {boolean} checked - Indicates if the item is checked
 * @property {string} description - Represents the descriptive label for the RadioItem
 * @property {any} direction - Represents the deirection of the card if inline it shows a circle
 * @property {boolean} disabled - Boolean indicating if the radio card is disabled
 * @property {string} primaryLabel - Represents primary label of the item
 * @property {string} secondaryDescription - Represents secondary description of the item
 * @property {string} secondaryLabel - Represents secondary label of the item
 */
/**
 * @type {React.FC<StackedCardProps>}
 */
declare function StackedCard({ checked, description, direction, disabled, primaryLabel, secondaryDescription, secondaryLabel, }: {
    checked: any;
    description: any;
    direction: any;
    disabled: any;
    primaryLabel: any;
    secondaryDescription: any;
    secondaryLabel: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace StackedCard {
    var propTypes: {
        /** Indicates if the item is checked */
        checked: any;
        /** Represents the descriptive label for the RadioItem */
        description: any;
        /** Represents the deirection of the card if inline it shows a circle */
        direction: any;
        /** Boolean indicating if the radio card is disabled */
        disabled: any;
        /** Represents primary label of the item */
        primaryLabel: any;
        /** Represents secondary description of the item */
        secondaryDescription: any;
        /** Represents secondary label of the item */
        secondaryLabel: any;
    };
}
export default StackedCard;

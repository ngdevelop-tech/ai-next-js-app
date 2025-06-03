/**
 * Represents the properties for the GroupOptionLabel component.
 * @typedef {Object} GroupOptionLabelProps
 * @property {Object} option - The option object representing the group.
 * @property {string} option.label - The label text to display for the group header.
 */
import React from "react";
/**
 * Renders a non-interactive list item used as a header for a group of options
 * within a Combobox or similar list structure. It displays the group's label.
 *
 * @type {React.FC<GroupOptionLabelProps>}
 */
declare const GroupOptionLabel: {
    ({ option }: {
        option?: {
            label: string;
        };
    }): React.ReactElement;
    propTypes: {
        option: any;
    };
};
export default GroupOptionLabel;

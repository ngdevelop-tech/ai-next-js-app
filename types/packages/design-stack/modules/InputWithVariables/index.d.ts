import React from "react";
/**
 * @typedef {object} VariableConfig
 * @property {boolean} [appendSpaceOnAdd] - If true, appends a space after adding a variable of this type.
 * @property {boolean} [forceSpaceBeforeTrigger] - If true, requires a space before the trigger character to activate suggestions.
 * @property {Array<{id: string, display: string}> | ((query: string) => Array<{id: string, display: string}> | Promise<Array<{id: string, display: string}>>)} data - The data source for suggestions. Can be a static array of objects (with `id` and `display` keys) or an asynchronous function that receives the query string and returns/resolves to an array of suggestions.
 * @property {string} trigger - The character(s) that trigger the suggestions for this variable type (e.g., '@', '#').
 * @property {("primary" | "secondary" | "success" | "danger" | "warning" | "info" | "neutral")} [badgeType="primary"] - The color theme for the variable badge displayed in the input. Defaults to 'primary'.
 * @property {string} [newDatasetId] - Internal ID used for display transformation logic within the component.
 * @property {string} [markup] - The template for the markup inserted into the input when a variable is selected. Uses `__id__` and `__display__` placeholders. Defaults to `${trigger}[__display__](__id__)`.
 * @property {(suggestion: {id: string, display: string}, search: string, highlightedDisplay: React.ReactNode, index: number, focused: boolean) => React.ReactNode} [renderSuggestion] - Custom function to render each suggestion item in the dropdown list.
 * @property {(id: string, display: string, startPos: number, endPos: number) => void} [onVariableAdd] - Callback function invoked when a variable of this type is added to the input. Receives the id, display text, start position, and end position of the added mention.
 */
/**
 * @typedef {object} InputWithVariablesProps
 * @property {string} [a11ySuggestionsListLabel="Variable dataset list"] - ARIA label for the suggestions list, used by screen readers.
 * @property {boolean} [allowSpaceInQuery=false] - If true, allows spaces within the query term while keeping the suggestions popover open.
 * @property {boolean} [allowSuggestionsAboveCursor=true] - If true, allows the suggestions popover to render above the cursor if there's insufficient space below.
 * @property {string} [cornerHintText=""] - Optional hint text displayed in the top-right corner, above the input field.
 * @property {string} [description=""] - Optional description text displayed below the input field.
 * @property {boolean} [disabled=false] - If true, disables the input field, preventing user interaction.
 * @property {string} [errorText=""] - If provided, displays an error message below the input and styles the input border to indicate an error state.
 * @property {string} id - A unique identifier for the input element, used for accessibility and associating labels/descriptions.
 * @property {React.ReactNode} [infoText=null] - If provided, displays an info icon next to the label with a tooltip containing this content.
 * @property {boolean} [isMandatory=false] - If true, adds a visual indicator (*) next to the label to signify a required field.
 * @property {string} [label=""] - The label text displayed above the input field.
 * @property {(event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>, clickedSuggestion: boolean) => void} [onBlur] - Callback function triggered when the input field loses focus. The second argument indicates if the blur was caused by clicking a suggestion item.
 * @property {(event: { target: { value: string } }, newValue: string, newPlainTextValue: string, mentions: Array<{ id: string, display: string }>) => void} [onChange] - Callback function triggered when the input value changes. Provides the event, the new value with markup, the plain text value, and an array of current mentions.
 * @property {(event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void} [onFocus] - Callback function triggered when the input field gains focus.
 * @property {(event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void} [onKeyDown] - Callback function triggered when a key is pressed while the input field is focused.
 * @property {string} [placeholder=""] - Placeholder text displayed within the input field when it is empty.
 * @property {boolean} [readonly=false] - If true, makes the input field read-only, preventing user edits but allowing interaction like focusing and selecting text.
 * @property {string} [role="contentinfo"] - The ARIA role assigned to the container div wrapping the label and input.
 * @property {string | number} value - The controlled value of the input field, which may include markup for inserted variables.
 * @property {Array<VariableConfig>} variables - An array of configuration objects, each defining a type of variable that can be mentioned.
 * @property {string} [wrapperClassName=""] - Optional CSS class name to apply to the main wrapper element of the `MentionsInput` component.
 */
/**
 * InputWithVariables is a specialized input component built upon `react-mentions`.
 * It enables users to type text and insert predefined variables (mentions) using trigger characters (e.g., '@', '#').
 * Features include customizable variable types, styling, labels, hints, error handling, and accessibility enhancements.
 * This component forwards refs to the underlying `textarea` element used by `MentionsInput`.
 *
 * @example
 * // Basic usage with user mentions
 * const userVariables = [
 *   {
 *     trigger: '@',
 *     data: [{ id: 'user1', display: 'John Doe' }, { id: 'user2', display: 'Jane Smith' }],
 *     badgeType: 'primary',
 *   },
 * ];
 * const [message, setMessage] = useState('');
 * <InputWithVariables
 *   id="message-input"
 *   label="Message"
 *   placeholder="Type your message and mention users with @"
 *   value={message}
 *   onChange={(e, newValue) => setMessage(newValue)}
 *   variables={userVariables}
 * />
 *
 * @example
 * // Advanced usage with async data fetching and custom rendering
 * const projectVariables = [
 *   {
 *     trigger: '#',
 *     data: async (query) => {
 *       const response = await fetch(`/api/projects?q=${query}`);
 *       const projects = await response.json();
 *       return projects.map(p => ({ id: p.id, display: p.name }));
 *     },
 *     markup: '#[__display__](project:__id__)',
 *     badgeType: 'secondary',
 *     appendSpaceOnAdd: true,
 *     onVariableAdd: (id, display) => console.log(`Added project: ${display} (${id})`),
 *   },
 * ];
 * const [taskDesc, setTaskDesc] = useState('Fix bug in #[Billing Module](project:proj123)');
 * <InputWithVariables
 *   id="task-input"
 *   label="Task Description"
 *   placeholder="Describe the task, mention #projects"
 *   value={taskDesc}
 *   onChange={(e, newValue) => setTaskDesc(newValue)}
 *   variables={projectVariables}
 *   description="Use # to reference project names."
 *   infoText="Project variables are fetched dynamically."
 *   isMandatory
 * />
 *
 * @see {@link https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-inputfield--primary Storybook}
 * @see {@link https://zeroheight.com/023d5159d/p/795ae0-input-field/b/4635b4 Zeroheight}
 * @see {@link https://github.com/signavio/react-mentions React Mentions Documentation}
 *
 * @type {React.ForwardRefExoticComponent<InputWithVariablesProps & React.RefAttributes<HTMLTextAreaElement>>}
 */
declare const InputWithVariables: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-inputfield--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/795ae0-input-field/b/4635b4
 * @end
 */
export default InputWithVariables;

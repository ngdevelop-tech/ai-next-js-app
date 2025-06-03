/**
 * @typedef {Object} TextAreaProps
 * @property {string} [defaultValue] - The initial value of the textarea when uncontrolled. Use this if you don't need to manage the state externally.
 * @property {string} [description] - Additional text displayed below the textarea to provide context or guidance.
 * @property {boolean} [disabled=false] - If `true`, the textarea will be visually muted and unresponsive to user input.
 *   @accessibility Ensures the textarea cannot be focused or interacted with.
 * @property {string} [errorText] - Text displayed below the textarea when in an error state. This also sets `aria-invalid="true"` and links the error message via `aria-describedby`.
 * @property {string} [id] - A unique identifier for the textarea element. If not provided, a unique ID will be generated automatically. Used for associating the label via `htmlFor`.
 *   @accessibility Crucial for associating the label with the textarea.
 * @property {boolean} [isMandatory=false] - If `true`, adds a visual indicator (`*`) to the label signifying the field is required.
 * @property {boolean} [isResizable=false] - If `true`, allows the user to resize the textarea vertically. Defaults to non-resizable.
 * @property {string} [label] - The text content for the `<label>` element associated with the textarea.
 *   @accessibility Provides a descriptive label for screen readers and improves usability.
 * @property {string} [name] - The name attribute for the textarea element, used when submitting forms.
 * @property {(event: React.ChangeEvent<HTMLTextAreaElement>) => void} [onChange] - Callback function triggered when the textarea's value changes. Receives the standard React change event.
 * @property {string} [placeholder] - Placeholder text displayed inside the textarea when it is empty.
 * @property {number} [rows=3] - Specifies the initial visible number of lines in the textarea.
 * @property {string} [value] - The controlled value of the textarea. Use this when managing the state externally (e.g., with `useState`). `onChange` is typically required when using `value`.
 */
import React from "react";
/**
 * Renders a multi-line text input field.
 *
 * This component provides a standard textarea element with enhancements like labels, descriptions, error handling, and styling.
 * It supports both controlled and uncontrolled state management.
 *
 * @example
 * // Uncontrolled example with a label and placeholder
 * <TextArea label="Your Feedback" placeholder="Enter your comments here..." rows={5} />
 *
 * @example
 * // Controlled example with error state
 * const [feedback, setFeedback] = useState('');
 * const [error, setError] = useState('');
 *
 * const handleChange = (event: any): React.ReactElement => {
 *   setFeedback(event.target.value);
 *   if (event.target.value.length < 10) {
 *     setError('Feedback must be at least 10 characters.');
 *   } else {
 *     setError('');
 *   }
 * };
 *
 * <TextArea
 *   label="Detailed Feedback"
 *   value={feedback}
 *   onChange={handleChange}
 *   errorText={error}
 *   isMandatory
 * />
 *
 * @accessibility
 * - Automatically associates the label with the textarea using `htmlFor` and `id`.
 * - Uses `aria-invalid` and `aria-describedby` to announce error states and link error messages.
 * - Disabled state prevents interaction and focus.
 *
 * @type {React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>}
 */
declare const TextArea: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-textarea--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/21e67c-textarea/b/4635b4
 * @end
 */
export default TextArea;

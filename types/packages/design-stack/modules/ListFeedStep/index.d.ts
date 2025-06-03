/**
 * Represents the properties for the ListFeedSteps component.
 * @typedef {Object} ListFeedStepsProps
 * @property {(string|number)} [activeStep] - The key of the currently active step. Used to highlight the active step and connector.
 * @property {string} [aria-label='Steps'] - Provides an accessible name for the steps container.
 * @property {React.ReactNode} [children] - The content of the component, expected to be `ListFeedSteps.Step` components.
 * @property {string} [connectorActiveColor='divide-brand-strong'] - Tailwind CSS class name for the color of the connector line when a step is active. Example: 'divide-brand-strong'.
 * @property {string} [descriptionClassName] - Additional CSS class name(s) to apply to the description node container.
 * @property {React.ReactNode} [descriptionNode] - Optional content displayed below the list of steps, aligned with the step descriptions.
 * @property {React.ReactNode} feedIcon - The main icon displayed at the top of the feed, typically an SVG component. This is required.
 * @property {keyof typeof LF_ICON_CONTAINER_SIZE} [feedIconContainerSize='LG'] - Controls the size of the container holding the `feedIcon`. See `LF_ICON_CONTAINER_SIZE`.
 * @property {keyof typeof LF_ICON_SIZE} [feedIconSize='MD'] - Controls the size of the `feedIcon` itself. See `LF_ICON_SIZE`.
 * @property {keyof typeof LF_ICON_VARIANT} [feedIconVariant='DARK'] - Visual variant of the feed icon. Can be 'dark' or 'light'.
 * @property {React.ReactNode} [feedNumber] - Optional node (e.g., a number or label) displayed to the left of the `feedIcon`.
 * @property {string} [feedNumberClassName] - Additional CSS class name(s) to apply to the `feedNumber` container.
 * @property {string} [headerClassName] - Additional CSS class name(s) to apply to the header node container.
 * @property {React.ReactNode} [headerNode] - Optional content displayed next to the `feedIcon`.
 * @property {string} [iconContainerClassName] - Additional CSS class name(s) to apply to the container wrapping the `feedIcon`.
 * @property {keyof typeof ICON_DESCRIPTION_GAP} [iconDescriptionGap='DEFAULT'] - Controls the horizontal gap between the icon area and the description area for steps and header/description nodes. See `ICON_DESCRIPTION_GAP`.
 * @property {string} [id] - HTML `id` attribute for the main wrapper element.
 * @property {boolean} [isFeedIconBorder=false] - If `true` and `feedIconVariant` is 'light', adds a border around the `feedIcon`.
 * @property {(stepKey: string | number, event: React.MouseEvent<HTMLDivElement>) => void} [onStepClick] - Callback function triggered when a step is clicked. Receives the `stepKey` of the clicked step and the event object.
 * @property {string} [rootClassName] - Additional CSS class name(s) to apply to the root `div` element.
 * @property {boolean} [showConnector=true] - If `true`, displays vertical connector lines between the steps.
 * @property {keyof typeof LF_MARGIN_SIZE} [spacing='DEFAULT'] - Controls the vertical spacing between steps and between the header/description nodes and the steps. See `LF_MARGIN_SIZE`.
 * @property {string} [wrapperClassName] - Additional CSS class name(s) to apply to the inner wrapper `div` element that contains the steps and related nodes.
 */
import React from "react";
/**
 * `ListFeedSteps` displays a vertical sequence of steps, often used to represent progress or a timeline.
 * It consists of a main feed icon, optional header/description nodes, and a series of `ListFeedSteps.Step` components.
 * Connectors can be shown between steps, and the active step can be highlighted.
 *
 * @component
 * @example
 * const [active, setActive] = useState('step1');
 * return (
 *   <ListFeedSteps
 *     feedIcon={<YourIcon />}
 *     activeStep={active}
 *     onStepClick={(key) => setActive(key)}
 *     headerNode={<div>Workflow Started</div>}
 *     descriptionNode={<div>Workflow Ended</div>}
 *   >
 *     <ListFeedSteps.Step stepKey="step1" title="Step 1 Title">Step 1 Description</ListFeedSteps.Step>
 *     <ListFeedSteps.Step stepKey="step2" title="Step 2 Title">Step 2 Description</ListFeedSteps.Step>
 *     <ListFeedSteps.Step stepKey="step3" title="Step 3 Title">Step 3 Description</ListFeedSteps.Step>
 *   </ListFeedSteps>
 * );
 *
 * @param {ListFeedStepsProps} props - The props for the ListFeedSteps component.
 * @param {React.Ref<HTMLDivElement>} ref - Forwarded ref to the inner wrapper div element.
 *
 * @see {@link LF_ICON_CONTAINER_SIZE} For feed icon container size options.
 * @see {@link LF_ICON_SIZE} For feed icon size options.
 * @see {@link LF_ICON_VARIANT} For feed icon variant options.
 * @see {@link ICON_DESCRIPTION_GAP} For icon-description gap options.
 * @see {@link LF_MARGIN_SIZE} For spacing options.
 *
 * @accessibility
 * - The component uses `role="tablist"` on the root element to indicate a list of steps.
 * - The `aria-label` prop provides an accessible name for the step list.
 * - Individual steps (`ListFeedSteps.Step`) should handle their own accessibility attributes (e.g., `role="tab"`, `aria-selected`).
 *
 * @type {React.ForwardRefExoticComponent<ListFeedStepsProps & React.RefAttributes<HTMLDivElement>>}
 */
declare const ListFeedSteps: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
export default ListFeedSteps;

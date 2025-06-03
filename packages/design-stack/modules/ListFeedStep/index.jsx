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

import React, { Children, forwardRef, isValidElement } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import {
  ICON_DESCRIPTION_GAP,
  ICON_DESCRIPTION_GAP_CLASSES,
  LF_ICON_CLASSES,
  LF_ICON_CONTAINER_CLASSES,
  LF_ICON_CONTAINER_SIZE,
  LF_ICON_SIZE,
  LF_ICON_VARIANT,
  LF_ICON_WITH_FEED_NO_CLASSES,
  LF_MARGIN_CLASSES,
  LF_MARGIN_SIZE,
} from "../ListFeedsNode/constants/listFeedsNode";
import { useListFeedsNode } from "../ListFeedsNode/useListFeedsNode";

import Step from "./components/Step";
import { ListFeedStepsProvider } from "./context/ListFeedStepsContext";

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
const ListFeedSteps = forwardRef(
  (
    {
      activeStep = null,
      "aria-label": ariaLabel = undefined,
      children = null,
      connectorActiveColor = "divide-brand-strong",
      descriptionClassName = "",
      descriptionNode = null,
      feedIcon,
      feedIconContainerSize = LF_ICON_CONTAINER_SIZE.LG,
      feedIconSize = LF_ICON_SIZE.MD,
      feedIconVariant = LF_ICON_VARIANT.DARK,
      feedNumber = null,
      feedNumberClassName = "",
      headerClassName = "",
      headerNode = null,
      iconContainerClassName = "",
      iconDescriptionGap = ICON_DESCRIPTION_GAP.DEFAULT,
      id = null,
      isFeedIconBorder = false,
      onStepClick = undefined,
      rootClassName = "",
      showConnector = true,
      spacing = LF_MARGIN_SIZE.DEFAULT,
      wrapperClassName = "",
    },
    ref
  ) => {
    const { throttledMouseMove, hideHoverContainer, combinedRefs } =
      useListFeedsNode(ref);

    // Validate children are Step components
    const steps = Children.toArray(children).filter(
      child => isValidElement(child) && child.type === Step
    );

    const contextValue = {
      activeStep,
      connectorActiveColor,
      feedIconContainerSize,
      feedIconSize,
      iconDescriptionGap,
      onStepClick,
      showConnector,
      spacing,
    };

    return (
      <div
        className={twClassNames("mb-2 flex items-start", rootClassName)}
        role="tablist"
        aria-label={ariaLabel || "Steps"}
      >
        {!!feedNumber && (
          <div
            className={twClassNames(
              "flex min-w-[20px] max-w-[20px] items-center justify-center",
              LF_ICON_WITH_FEED_NO_CLASSES[feedIconSize],
              feedNumberClassName
            )}
          >
            {feedNumber}
          </div>
        )}
        <div
          ref={combinedRefs}
          className={twClassNames("relative flex flex-col", wrapperClassName)}
          onMouseLeave={hideHoverContainer}
          onMouseMove={throttledMouseMove}
          {...(id !== null && { id })}
        >
          <div className="relative flex">
            <div
              className={twClassNames(
                "flex justify-center",
                {
                  "self-start": !showConnector,
                },
                iconContainerClassName
              )}
            >
              <div
                className={twClassNames(
                  "relative flex items-center justify-center",
                  LF_ICON_CONTAINER_CLASSES[feedIconContainerSize]
                )}
              >
                <div
                  className={twClassNames(
                    "box-border flex items-center justify-center rounded-full",
                    LF_ICON_CLASSES[feedIconSize],
                    {
                      "border-0": !isFeedIconBorder,
                    }
                  )}
                >
                  {feedIcon}
                </div>
              </div>
              {!!headerNode && (
                <div
                  className={twClassNames(
                    "grow",
                    LF_MARGIN_CLASSES[spacing],
                    ICON_DESCRIPTION_GAP_CLASSES[iconDescriptionGap],
                    headerClassName
                  )}
                >
                  {headerNode}
                </div>
              )}
            </div>
          </div>

          <ListFeedStepsProvider value={contextValue}>
            {steps}
          </ListFeedStepsProvider>

          {!!descriptionNode && (
            <div className={twClassNames("flex h-full", descriptionClassName)}>
              <div
                className={twClassNames(
                  "relative flex items-start justify-center divide-neutral-strong",
                  LF_ICON_CONTAINER_CLASSES[feedIconContainerSize],
                  "max-h-full",
                  showConnector ? "divide-x" : "divide-x-0"
                )}
              >
                <div
                  className={twClassNames(
                    "min-h-full w-1/2",
                    LF_ICON_CLASSES[feedIconSize],
                    "h-full"
                  )}
                />
                <div
                  className={twClassNames(
                    "min-h-full w-1/2",
                    LF_ICON_CLASSES[feedIconSize],
                    "h-full"
                  )}
                />
              </div>

              <div
                className={twClassNames(
                  "flex grow",
                  LF_MARGIN_CLASSES[spacing],
                  ICON_DESCRIPTION_GAP_CLASSES[iconDescriptionGap]
                )}
              >
                {descriptionNode}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

ListFeedSteps.Step = Step;

ListFeedSteps.propTypes = {
  /** The key of the currently active step. */
  activeStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Provides an accessible name for the steps container. Defaults to 'Steps'. */
  "aria-label": PropTypes.string,
  /** The content of the component, expected to be `ListFeedSteps.Step` components. */
  children: PropTypes.node,
  /** Tailwind CSS class name for the color of the connector line when a step is active. */
  connectorActiveColor: PropTypes.string,
  /** Additional CSS class name(s) to apply to the description node container. */
  descriptionClassName: PropTypes.string,
  /** Optional content displayed below the list of steps. */
  descriptionNode: PropTypes.node,
  /** The main icon displayed at the top of the feed (required). */
  feedIcon: PropTypes.node.isRequired,
  /** Controls the size of the container holding the `feedIcon`. */
  feedIconContainerSize: PropTypes.oneOf(Object.values(LF_ICON_CONTAINER_SIZE)),
  /** Controls the size of the `feedIcon` itself. */
  feedIconSize: PropTypes.oneOf(Object.values(LF_ICON_SIZE)),
  /** Visual variant of the feed icon ('dark' or 'light'). */
  feedIconVariant: PropTypes.oneOf(Object.values(LF_ICON_VARIANT)),
  /** Optional node (e.g., a number) displayed to the left of the `feedIcon`. */
  feedNumber: PropTypes.node,
  /** Additional CSS class name(s) to apply to the `feedNumber` container. */
  feedNumberClassName: PropTypes.string,
  /** Additional CSS class name(s) to apply to the header node container. */
  headerClassName: PropTypes.string,
  /** Optional content displayed next to the `feedIcon`. */
  headerNode: PropTypes.node,
  /** Additional CSS class name(s) to apply to the container wrapping the `feedIcon`. */
  iconContainerClassName: PropTypes.string,
  /** Controls the horizontal gap between the icon area and the description area. */
  iconDescriptionGap: PropTypes.oneOf(Object.values(ICON_DESCRIPTION_GAP)),
  /** HTML `id` attribute for the main wrapper element. */
  id: PropTypes.string,
  /** If `true` and `feedIconVariant` is 'light', adds a border around the `feedIcon`. */
  isFeedIconBorder: PropTypes.bool,
  /** Callback function triggered when a step is clicked. Receives `stepKey` and the event object. */
  onStepClick: PropTypes.func,
  /** Additional CSS class name(s) to apply to the root `div` element. */
  rootClassName: PropTypes.string,
  /** If `true`, displays vertical connector lines between the steps. */
  showConnector: PropTypes.bool,
  /** Controls the vertical spacing between elements. */
  spacing: PropTypes.oneOf(Object.values(LF_MARGIN_SIZE)),
  /** Additional CSS class name(s) to apply to the inner wrapper `div` element. */
  wrapperClassName: PropTypes.string,
};

ListFeedSteps.displayName = "ListFeedSteps";

export default ListFeedSteps;

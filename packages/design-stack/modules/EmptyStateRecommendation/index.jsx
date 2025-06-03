/**
 * @typedef {Object} EmptyStateRecommendationProps
 * @property {Record<string, any>} action? - Object containing details of the icon and text to be shown in the component
 * @property {any} icon?
 * @property {string} text?
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import Button from "../Button";
import {
  ACTION_ICON,
  RECOMMENDATION_ACTION_ICON,
} from "../EmptyState/constants/emptyState";

/**
 * @type {React.FC<EmptyStateRecommendationProps>}
 */
const EmptyStateRecommendation = ({
  icon,
  id,
  title,
  description,
  onClick,
  isRounded,
  isBordered,
  action,
  wrapperClassName,
}) => {
  const ActionIcon = ACTION_ICON[action.icon];

  return (
    <li className={twClassNames(wrapperClassName)} {...(id !== null && { id })}>
      <Button
        variant={isRounded ? "rounded" : "minimal"}
        wrapperClassName={twClassNames(
          "group w-full space-x-2 p-2 text-left shadow-sm",
          {
            "border-neutral-default": isBordered,
            "bg-transparent hover:bg-neutral-default-hover": isRounded,
          }
        )}
        onClick={onClick}
      >
        <div className="flex w-full items-center justify-between">
          <span className="flex min-w-0 flex-1 items-center space-x-2">
            <span
              className={twClassNames(
                "block h-10 w-10 shrink-0 overflow-hidden",
                {
                  "rounded-md": !isRounded,
                  "rounded-full": isRounded,
                }
              )}
            >
              {icon}
            </span>
            <span className="block min-w-0 flex-1">
              <span className="block truncate text-sm font-medium leading-5 text-neutral-default">
                {title}
              </span>
              <span className="block truncate text-sm font-normal leading-5 text-neutral-weaker">
                {description}
              </span>
            </span>
          </span>
          {(action.icon || action.text) && (
            <span
              className={twClassNames(
                "inline-flex min-h-[40px] min-w-[40px] shrink-0 items-center justify-center"
              )}
            >
              {action.icon && (
                <ActionIcon
                  className="h-5 w-5 icon-neutral-weaker group-hover:icon-neutral-weak"
                  aria-hidden="true"
                />
              )}
              {action.text && (
                <span className="ml-2 text-sm font-medium text-neutral-default">
                  {action.text}
                </span>
              )}
            </span>
          )}
        </div>
      </Button>
    </li>
  );
};

EmptyStateRecommendation.propTypes = {
  /** Object containing details of the icon and text to be shown in the component */
  action: PropTypes.shape({
    icon: PropTypes.oneOf(Object.values(RECOMMENDATION_ACTION_ICON)),
    text: PropTypes.string,
  }),
  /** Description for the Recommendation */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  /** Node containing Icon /Image to be displayed */
  icon: PropTypes.node.isRequired,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** Determines whether the Recommendation component has border */
  isBordered: PropTypes.bool,
  /** Determines whether the Recommendation component is rounded */
  isRounded: PropTypes.bool,
  /** Callback function onClick when the Recommendation is clicked */
  onClick: PropTypes.func,
  /** Title for the Recommendation */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** A custom CSS class name to style the EmptyStateRecommendation component. */
  wrapperClassName: PropTypes.string,
};

EmptyStateRecommendation.defaultProps = {
  action: {
    icon: RECOMMENDATION_ACTION_ICON.NULL,
    text: "",
  },
  id: null,
  isBordered: true,
  isRounded: true,
  onClick: null,
  wrapperClassName: "",
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-emptystate--primary
 * @zeroHeight
 * @end
 */

export default EmptyStateRecommendation;

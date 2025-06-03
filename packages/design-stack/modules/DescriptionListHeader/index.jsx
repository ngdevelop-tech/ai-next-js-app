/**
 * @typedef {Object} DescriptionListHeaderProps
 * @property {React.ReactNode} heading? - Node containing the content that will be displayed within the heading of Description List
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {boolean} isCard? - Apply different styles for card type wrapper.
 * @property {React.ReactNode} subHeading? - Node containing the content that will be displayed within the sub-heading of Description List.
 * @property {string} wrapperClassName? - A custom CSS class name to style the List Header.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * @type {React.FC<DescriptionListHeaderProps>}
 */
const DescriptionListHeader = ({
  heading = null,
  id = null,
  isCard = false,
  subHeading = null,
  wrapperClassName = "",
}) => (
  <div
    className={twClassNames(
      {
        "px-6 py-5": isCard,
        "p-0": !isCard,
      },
      wrapperClassName
    )}
    {...(id !== null && { id })}
  >
    {!!heading && (
      <h3 className="text-base font-semibold leading-6 text-neutral-default">
        {heading}
      </h3>
    )}
    {!!subHeading && (
      <p className="mt-1 max-w-2xl text-sm text-neutral-weaker">{subHeading}</p>
    )}
  </div>
);

DescriptionListHeader.propTypes = {
  /** Node containing the content that will be displayed within the heading of Description List */
  heading: PropTypes.node,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** Apply different styles for card type wrapper. */
  isCard: PropTypes.bool,
  /** Node containing the content that will be displayed within the sub-heading of Description List. */
  subHeading: PropTypes.node,
  /** A custom CSS class name to style the List Header. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-descriptionlist--left-aligned-in-card
 * @zeroHeight https://zeroheight.com/023d5159d/p/0257f9-description-lists/b/4635b4
 * @end
 */

export default DescriptionListHeader;

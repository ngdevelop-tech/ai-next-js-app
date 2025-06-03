/**
 * Represents the media section (typically an image or illustration) within a CTACard.
 * This component is designed to be used as a child of CTACard and conditionally renders based on the CTACard's size context.
 * It is hidden when the CTACard size is 'sm'.
 * @component CTACardMedia
 * @typedef {Object} CTACardMediaProps
 * @property {React.ReactNode} children - The visual content (e.g., `<img>`, `<svg>`, custom component) to be displayed as the media element.
 * @property {string} [id] - Optional unique identifier for the root `div` element of the component.
 * @property {string} [wrapperClassName] - Optional CSS class name(s) to apply to the root `div` element for custom styling.
 */

import React, { useContext } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { FEATURE_FENCING_SIZES } from "../CTACard/constants/ctaCard";
import { CTACardContextData } from "../CTACard/context";

/**
 * Renders the media container for a CTACard.
 * It consumes the `size` from `CTACardContextData` to determine visibility.
 * @type {React.FC<CTACardMediaProps>}
 */
const CTACardMedia = ({ children, id = null, wrapperClassName = "" }) => {
  const { size } = useContext(CTACardContextData);

  if (size === FEATURE_FENCING_SIZES.SM) {
    return null;
  }
  return (
    <div
      className={twClassNames("hidden flex-1 sm:block", wrapperClassName)}
      {...(id !== null && { id })}
    >
      {children}
    </div>
  );
};

CTACardMedia.propTypes = {
  /** The visual content (e.g., `<img>`, `<svg>`, custom component) to be displayed as the media element. */
  children: PropTypes.node.isRequired,
  /** Optional unique identifier for the root `div` element of the component. */
  id: PropTypes.string,
  /** Optional CSS class name(s) to apply to the root `div` element for custom styling. */
  wrapperClassName: PropTypes.string,
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-ctacard--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/688da5-cta-card/b/4635b4
 * @end
 */

export default CTACardMedia;

/**
 * Props for the CTACardContent component.
 *
 * @typedef {Object} CTACardContentProps
 * @property {React.ReactNode} children - The child elements or content to be displayed within the CTA card content, typically action buttons or links.
 * @property {string} description - The descriptive text providing context or details below the header.
 * @property {string} header - The main title or heading for the CTA card content.
 * @property {('h2'|'h3'|'h4'|'h5'|'h6'|'p'|'span')} [headerTagType='h2'] - Specifies the HTML heading tag type for the header. Defaults to 'h2'. Must be one of the values defined in `TAG_TYPES`.
 * @property {string} [id] - Optional unique identifier to be added to the root element of the component.
 * @property {string} [wrapperClassName] - Optional custom CSS class name to apply to the component's root `div` element for custom styling.
 */

import React, { useContext } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { TAG_TYPES } from "../../shared/tagTypesConstants";
import { FEATURE_FENCING_SIZES } from "../CTACard/constants/ctaCard";
import { CTACardContextData } from "../CTACard/context";

import {
  CONTENT_PADDING,
  DESCRIPTION_STYLES,
  HEADER_STYLES,
} from "./constants/ctaCardContent";

/**
 * Renders the main content area within a CTACard, including a header, description, and children elements.
 * It adapts its padding and typography based on the size context provided by the parent CTACard.
 *
 * @type {React.FC<CTACardContentProps>}
 */
const CTACardContent = ({
  children,
  description,
  header,
  headerTagType = TAG_TYPES[0],
  id = null,
  wrapperClassName = "",
}) => {
  const { size } = useContext(CTACardContextData);
  const Tag = TAG_TYPES.includes(headerTagType) ? headerTagType : TAG_TYPES[0];

  return (
    <div
      className={twClassNames(
        "flex flex-1 flex-col justify-center",
        CONTENT_PADDING[size],
        wrapperClassName
      )}
      {...(id !== null && { id })}
    >
      <Tag
        className={twClassNames(
          "font-semibold text-neutral-default",
          HEADER_STYLES[size]
        )}
      >
        {header}
      </Tag>
      <p
        className={twClassNames(
          "font-normal text-neutral-weaker",
          DESCRIPTION_STYLES[size],
          {
            "mt-1.5": size === FEATURE_FENCING_SIZES.BASE,
          }
        )}
      >
        {description}
      </p>
      <div
        className={twClassNames({
          "mt-6": size === FEATURE_FENCING_SIZES.BASE,
        })}
      >
        {children}
      </div>
    </div>
  );
};

CTACardContent.propTypes = {
  /** The child elements or content to be displayed within the CTA card content, typically action buttons or links. */
  children: PropTypes.node.isRequired,
  /** The descriptive text providing context or details below the header. */
  description: PropTypes.string.isRequired,
  /** The main title or heading for the CTA card content. */
  header: PropTypes.string.isRequired,
  /** Specifies the HTML heading tag type for the header. Defaults to 'h2'. Must be one of the values defined in `TAG_TYPES`. */
  headerTagType: PropTypes.oneOf(TAG_TYPES),
  /** Optional unique identifier to be added to the root element of the component. */
  id: PropTypes.string,
  /** Optional custom CSS class name to apply to the component's root `div` element for custom styling. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-ctacard--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/688da5-cta-card/b/4635b4
 * @end
 */

export default CTACardContent;

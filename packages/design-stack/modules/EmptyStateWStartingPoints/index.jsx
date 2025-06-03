/**
 * @typedef {Object} EmptyStateWStartingPointsProps
 * @property {string} ctaText? - CTA text to be shown at end.
 * @property {any} data? - Array containing data for all the layout items
 * @property {string} background?
 * @property {string} description?
 * @property {any} icon?
 * @property {(event: React.MouseEvent<any>) => void} onClick?
 * @property {string} title?
 */

import React from "react";
import { MdEast } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import SingleColumnLayout from "./components/SingleColumnLayout";
import TwoColumnLayout from "./components/TwoColumnLayout";
import { LAYOUT_TYPES } from "./constants/emptyStateWStaringPoints";

/**
 * @type {React.FC<EmptyStateWStartingPointsProps>}
 */
const EmptyStateWStartingPoints = ({
  ctaText = "",
  data = [],
  handleCTAClick = () => {},
  heading = "",
  id = null,
  layout = LAYOUT_TYPES.TWO_COLUMN,
  showBorders = true,
  subHeading = "",
}) => {
  const handleClick = (e, action, item = null) => {
    e.preventDefault();
    if (action) action(item);
  };

  return (
    <div {...(id !== null && { id })}>
      <h2 className="text-lg font-medium text-neutral-default">{heading}</h2>
      <p className="mt-1 text-sm text-neutral-weaker">{subHeading}</p>
      <ul
        className={twClassNames("", {
          "mt-6 grid grid-cols-1 gap-6 py-6 sm:grid-cols-2":
            layout === LAYOUT_TYPES.TWO_COLUMN,
          "mt-6 divide-y divide-neutral-default":
            layout === LAYOUT_TYPES.SINGLE_COLUMN,
          "border-t border-neutral-default": true,
          "border-b border-neutral-default": showBorders,
        })}
      >
        {data.map((item, itemIdx) => {
          const key = itemIdx;
          return (
            <React.Fragment key={key}>
              {layout === LAYOUT_TYPES.TWO_COLUMN ? (
                <TwoColumnLayout item={item} handleClick={handleClick} />
              ) : (
                <SingleColumnLayout item={item} handleClick={handleClick} />
              )}
            </React.Fragment>
          );
        })}
      </ul>

      {ctaText && (
        <div className="mt-4 flex">
          <a
            href="/"
            className="flex items-center text-sm font-medium text-brand-default hover:text-brand-strong"
            onClick={e => {
              handleClick(e, handleCTAClick);
            }}
          >
            {ctaText}
            <span aria-hidden="true">
              <MdEast className="ml-1 h-4 w-4" />
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

EmptyStateWStartingPoints.propTypes = {
  /** CTA text to be shown at end. */
  ctaText: PropTypes.string,
  /** Array containing data for all the layout items */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      background: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.elementType,
      onClick: PropTypes.func,
      title: PropTypes.string,
    })
  ),
  /** Callback to triggered on clicking CTA text */
  handleCTAClick: PropTypes.func,
  /** Top heading for the component */
  heading: PropTypes.string,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** Type of layout to show data in <b>two-column</b> or <b>single-column</b> */
  layout: PropTypes.oneOf(Object.values(LAYOUT_TYPES)),
  /** Controls whether to show borders */
  showBorders: PropTypes.bool,
  /** Sub heading for the component */
  subHeading: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-emptystatewstartingpoints--primary
 * @zeroHeight
 * @end
 */

export default EmptyStateWStartingPoints;

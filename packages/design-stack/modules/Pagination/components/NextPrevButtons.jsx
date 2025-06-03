/**
 * @typedef {Object} NextPrevButtonsProps
 * @property {boolean} hasNumber? - The pagination with numbers or with next/previous buttons only.
 * @property {boolean} isNextDisabled? - Specifies if next button is disabled or not
 * @property {boolean} isPrevDisabled? - Specifies if previous button is disabled or not
 * @property {(event: React.MouseEvent<any>) => void} nextClick? - Callback function called when next page button clicked.
 * @property {(event: React.MouseEvent<any>) => void} prevClick? - Callback function called when previous page button clicked.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import Button from "../../Button";

/**
 * @type {React.FC<NextPrevButtonsProps>}
 */
const NextPrevButtons = ({
  hasNumber,
  isNextDisabled,
  isPrevDisabled,
  nextClick,
  prevClick,
}) => (
  <div
    className={twClassNames("flex flex-1 justify-between sm:justify-end", {
      "sm:hidden": hasNumber,
      flex: !hasNumber,
    })}
  >
    <Button
      wrapperClassName="focus:ring-offset-0"
      onClick={prevClick}
      colors="white"
      disabled={isPrevDisabled}
      aria-label="Go to previous page"
    >
      Previous
    </Button>
    <Button
      wrapperClassName="ml-3 focus:ring-offset-0"
      onClick={nextClick}
      colors="white"
      disabled={isNextDisabled}
      aria-label="Go to next page"
    >
      Next
    </Button>
  </div>
);
NextPrevButtons.propTypes = {
  /** The pagination with numbers or with next/previous buttons only. */
  hasNumber: PropTypes.bool,
  /** Specifies if next button is disabled or not */
  isNextDisabled: PropTypes.bool,
  /** Specifies if previous button is disabled or not */
  isPrevDisabled: PropTypes.bool,
  /** Callback function called when next page button clicked. */
  nextClick: PropTypes.func,
  /** Callback function called when previous page button clicked. */
  prevClick: PropTypes.func,
};

NextPrevButtons.defaultProps = {
  hasNumber: true,
  isNextDisabled: false,
  isPrevDisabled: false,
  nextClick: null,
  prevClick: null,
};

export default NextPrevButtons;

/**
 * @typedef {Object} DowntimePageProps
 * @property {React.ReactNode} footer? - Node containing the footer that will be displayed within the DowntimePage.
 * @property {React.ReactNode} icon? - Node containing the Icon that will be displayed within the DowntimePage.
 * @property {React.ReactNode} subTitle - Node containing the subTitle that will be displayed within the DowntimePage.
 * @property {React.ReactNode} title - Node containing the title that will be displayed within the DowntimePage.
 * @property {string} wrapperClassName? - A custom CSS class name to style the DowntimePage.
 */

import React from "react";
import DowntimeIcon from "@/packages/design-stack-icons/src/DowntimeIcon";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * @type {React.FC<DowntimePageProps>}
 */
const DowntimePage = ({
  footer = null,
  icon = <DowntimeIcon />,
  subTitle,
  title,
  wrapperClassName = "",
}) => (
  <div
    className={twClassNames(
      "m-auto flex max-w-lg flex-col items-center",
      wrapperClassName
    )}
  >
    {icon}
    <h1 className="mb-6 mt-10 text-center text-2xl font-semibold text-neutral-default">
      {title}
    </h1>
    <p className="text-center font-normal text-neutral-weaker">{subTitle}</p>
    {footer ? (
      <>
        <div className="my-10 w-full border-t border-neutral-strong" />
        {footer}
      </>
    ) : null}
  </div>
);

DowntimePage.propTypes = {
  /** Node containing the footer that will be displayed within the DowntimePage. */
  footer: PropTypes.node,
  /** Node containing the Icon that will be displayed within the DowntimePage. */
  icon: PropTypes.node,
  /** Node containing the subTitle that will be displayed within the DowntimePage. */
  subTitle: PropTypes.node.isRequired,
  /** Node containing the title that will be displayed within the DowntimePage. */
  title: PropTypes.node.isRequired,
  /** A custom CSS class name to style the DowntimePage. */
  wrapperClassName: PropTypes.string,
};

export default DowntimePage;

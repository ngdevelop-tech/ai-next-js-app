/**
 * @typedef {Object} KpiProps
 * @property {React.ReactNode} badgeNode? - Node containing badge for Kpi data
 * @property {string} description? - Description for Kpi data
 * @property {any} direction? - Specify whether stat data should be shown in horizontal direction or vertical
 * @property {boolean} isBadgeBeforeDescription? - Specify whether Badge should come before description of Kpi data or not
 * @property {React.ReactNode} leadingIconNode? - Leadling node with Kpi data description
 * @property {any} stat? - Stat for Kpi data
 * @property {string} title? - Title for Kpi data
 * @property {React.ReactNode} trailingIconNode? - Trailing node with Kpi data description
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { KPI_DATA_DIRECTION } from "../../DataVisualization/constants/dataVisualization";

/**
 * @type {React.FC<KpiProps>}
 */
const Kpi = ({
  badgeNode = null,
  description = "",
  direction = KPI_DATA_DIRECTION.HORIZONTAL,
  isBadgeBeforeDescription = false,
  leadingIconNode = null,
  stat = "",
  title = "",
  trailingIconNode = null,
}) => (
  <div>
    <p className="mb-1 text-base font-normal leading-6 text-neutral-weaker">
      {title}
    </p>

    <div
      className={twClassNames(
        "flex",
        direction === KPI_DATA_DIRECTION.VERTICAL
          ? "flex-col items-start gap-1"
          : "items-center gap-2"
      )}
    >
      <p
        className={twClassNames(
          "flex text-3xl font-semibold leading-9 text-neutral-default"
        )}
      >
        {stat}
      </p>
      {isBadgeBeforeDescription && badgeNode}
      {description.length > 0 && (
        <>
          <div className="flex items-center gap-1">
            {leadingIconNode}
            <p className="text-sm font-medium leading-5 text-neutral-weaker">
              {description}
            </p>
            {trailingIconNode}
          </div>
        </>
      )}
      {!isBadgeBeforeDescription && badgeNode}
    </div>
  </div>
);

Kpi.propTypes = {
  /** Node containing badge for Kpi data */
  badgeNode: PropTypes.node,
  /** Description for Kpi data */
  description: PropTypes.string,
  /** Specify whether stat data should be shown in horizontal direction or vertical */
  direction: PropTypes.oneOf(Object.values(KPI_DATA_DIRECTION)),
  /** Specify whether Badge should come before description of Kpi data or not */
  isBadgeBeforeDescription: PropTypes.bool,
  /** Leadling node with Kpi data description */
  leadingIconNode: PropTypes.node,
  /** Stat for Kpi data */
  stat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Title for Kpi data */
  title: PropTypes.string,
  /** Trailing node with Kpi data description */
  trailingIconNode: PropTypes.node,
};

export default Kpi;

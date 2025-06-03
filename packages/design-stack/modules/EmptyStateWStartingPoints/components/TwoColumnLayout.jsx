/**
 * @typedef {Object} TwoColumnLayoutProps
 * @property {(event: React.MouseEvent<any>) => void} handleClick? - Callback triggered on clicking title
 * @property {Record<string, any>} item? - Item data containing lauout details
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

/**
 * @type {React.FC<TwoColumnLayoutProps>}
 */
const TwoColumnLayout = ({ handleClick, item }) => {
  const { background, description, icon: Icon, onClick, title } = item;
  return (
    <li className="flow-root">
      <div className="relative -m-2 flex items-center space-x-4 rounded-xl p-2 hover:bg-neutral-default-hover [&:has(:focus-visible)]:ring-2 [&:has(:focus-visible)]:ring-brand-strong">
        <div
          className={twClassNames(
            background,
            "flex h-16 w-16 shrink-0 items-center justify-center rounded-lg"
          )}
        >
          <Icon
            className="h-6 w-6 icon-neutral-inverse-default"
            aria-hidden="true"
          />
        </div>
        <div>
          <h3 className="text-sm font-medium text-neutral-default">
            <a
              href="/"
              className="flex items-center focus:outline-none"
              onClick={e => {
                handleClick?.(e, onClick, item);
              }}
            >
              <span className="absolute inset-0" aria-hidden="true" />
              <span>{title}</span>
              <span aria-hidden="true">
                <MdEast className="ml-1 h-4 w-4" />
              </span>
            </a>
          </h3>
          <p className="mt-1 text-sm text-neutral-weaker">{description}</p>
        </div>
      </div>
    </li>
  );
};
TwoColumnLayout.propTypes = {
  /** Callback triggered on clicking title */
  handleClick: PropTypes.func,
  /** Item data containing lauout details */
  item: PropTypes.shape({
    background: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.elementType,
    onClick: PropTypes.func,
    title: PropTypes.string,
  }).isRequired,
};

TwoColumnLayout.defaultProps = { handleClick: null };

export default TwoColumnLayout;

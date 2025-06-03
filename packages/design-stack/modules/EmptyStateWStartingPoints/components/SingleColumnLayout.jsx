/**
 * @typedef {Object} SingleColumnLayoutProps
 * @property {(event: React.MouseEvent<any>) => void} handleClick? - Callback triggered on clicking title
 * @property {Record<string, any>} item? - Item data containing lauout details
 * @property {string} background?
 * @property {string} description?
 * @property {string} href?
 * @property {any} icon?
 * @property {(event: React.MouseEvent<any>) => void} onClick?
 * @property {string} title?
 */

import React from "react";
import { MdChevronRight } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * @type {React.FC<SingleColumnLayoutProps>}
 */
const SingleColumnLayout = ({ handleClick, item }) => {
  const { background, description, href, icon: Icon, onClick, title } = item;
  return (
    <li>
      <div className="group relative flex items-start space-x-3 py-4">
        <div className="shrink-0">
          <span
            className={twClassNames(
              background,
              "inline-flex h-10 w-10 items-center justify-center rounded-lg"
            )}
          >
            <Icon
              className="h-6 w-6 icon-neutral-inverse-default"
              aria-hidden="true"
            />
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-medium text-neutral-default">
            <a
              href={href}
              onClick={e => {
                handleClick?.(e, onClick, item);
              }}
              className="cursor-pointer"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              {title}
            </a>
          </div>
          <p className="text-sm text-neutral-weaker">{description}</p>
        </div>
        <div className="shrink-0 self-center">
          <MdChevronRight
            className="h-5 w-5 icon-neutral-weaker group-hover:icon-neutral-weak"
            aria-hidden="true"
          />
        </div>
      </div>
    </li>
  );
};
SingleColumnLayout.propTypes = {
  /** Callback triggered on clicking title */
  handleClick: PropTypes.func,
  /** Item data containing lauout details */
  item: PropTypes.shape({
    background: PropTypes.string,
    description: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.elementType,
    onClick: PropTypes.func,
    title: PropTypes.string,
  }).isRequired,
};

SingleColumnLayout.defaultProps = { handleClick: null };
export default SingleColumnLayout;

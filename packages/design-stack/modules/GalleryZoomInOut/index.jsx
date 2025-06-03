/**
 * @typedef {Object} GalleryZoomInOutProps
 * @property {React.ReactNode} fitToScreenNode? - Node containing the content that will be representing fit screen handler
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {React.ReactNode} zoomInNode - Node containing the content that will be representing zoom in handler
 * @property {React.ReactNode} zoomOutNode - Node containing the content that will be representing zoom out handler
 */

import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";

import { GalleryContextData } from "../Gallery/context";

/**
 * @type {React.FC<GalleryZoomInOutProps>}
 */
function GalleryZoomInOut({
  id = null,
  zoomInNode,
  zoomOutNode,
  fitToScreenNode = null,
}) {
  const { isMaxZoomValue, isMinZoomValue, onZoomClick, onFitScreenClick } =
    useContext(GalleryContextData);

  useEffect(
    () => () => {
      onZoomClick?.("reset");
    },
    [onZoomClick]
  );

  const onZoomInClick = () => {
    onZoomClick?.("zoomIn");
  };
  const onZoomOutClick = () => {
    onZoomClick?.("zoomOut");
  };

  return (
    <div className="flex shadow-md">
      <div aria-hidden onClick={onZoomOutClick} {...(id !== null && { id })}>
        {React.cloneElement(zoomOutNode, {
          disabled: isMinZoomValue,
        })}
      </div>
      {fitToScreenNode && (
        <div
          aria-hidden
          onClick={onFitScreenClick}
          className="border-l border-solid border-neutral-default"
        >
          {React.cloneElement(fitToScreenNode)}
        </div>
      )}
      <div
        aria-hidden
        onClick={onZoomInClick}
        className="border-l border-solid border-neutral-default"
      >
        {React.cloneElement(zoomInNode, {
          disabled: isMaxZoomValue,
        })}
      </div>
    </div>
  );
}

GalleryZoomInOut.propTypes = {
  /** Node containing the content that will be representing fit screen handler */
  fitToScreenNode: PropTypes.node,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** Node containing the content that will be representing zoom in handler */
  zoomInNode: PropTypes.node.isRequired,
  /** Node containing the content that will be representing zoom out handler */
  zoomOutNode: PropTypes.node.isRequired,
};

export default GalleryZoomInOut;

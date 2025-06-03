/**
 * Represents the properties for the GalleryMediaFooterButton component.
 * This component wraps the base `Button` component with specific styling for use in a gallery media footer.
 * It accepts all standard `Button` props in addition to the ones defined here.
 *
 * @typedef {Object} GalleryMediaFooterButtonProps
 * @property {React.ReactNode} children - The content to be displayed inside the button (e.g., text, icons). This is a required prop.
 * @property {string} [id] - Optional unique identifier to be added to the root button element.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [onClick] - Optional callback function that is executed when the button is clicked. It receives the React synthetic mouse event as an argument.
 * @property {any} [args] - Accepts any other props valid for the underlying `Button` component.
 */

import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";

/**
 * GalleryMediaFooterButton is a specialized button component designed for use within the footer area of a media gallery item.
 * It pre-configures the base `Button` component with specific styles (e.g., `colors="white"`) suitable for this context.
 *
 * @component
 * @param {GalleryMediaFooterButtonProps} props - The props for the GalleryMediaFooterButton component.
 * @returns {React.ReactElement} The rendered button component.
 * @example
 * <GalleryMediaFooterButton onClick={() => console.log('Button clicked!')}>
 *   Click Me
 * </GalleryMediaFooterButton>
 */
const GalleryMediaFooterButton = ({ children, id, onClick, ...args }) => {
  const handleClick = e => {
    onClick?.(e);
  };
  return (
    <Button
      {...args}
      colors="white"
      onClick={e => handleClick(e)}
      {...(id !== null && { id })}
    >
      {children}
    </Button>
  );
};
GalleryMediaFooterButton.propTypes = {
  /** The content to be displayed inside the button (e.g., text, icons). */
  children: PropTypes.node.isRequired,
  /** Optional unique identifier for the button element. */
  id: PropTypes.string,
  /** Optional callback function triggered upon clicking the button. Receives the event object. */
  onClick: PropTypes.func,
};
GalleryMediaFooterButton.defaultProps = {
  id: null,
  onClick: null,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-gallery--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/4898d4-media-gallery/b/53ba1e
 * @end
 */

export default GalleryMediaFooterButton;

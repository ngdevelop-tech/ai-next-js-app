/**
 * Represents the properties for the Banner component.
 * @typedef {Object} BannerProps
 * @property {('extreme'|'centered')} [align='extreme'] - Controls the alignment of the banner content. Defaults to 'extreme'.
 *    - 'extreme': Aligns content to the start and end of the banner.
 *    - 'centered': Centers the content within the banner.
 * @property {React.ReactNode} [bannerIcon=null] - An optional icon or image element displayed before the description text.
 * @property {React.ReactNode} [ctaButton=null] - An optional button or interactive element displayed typically after the description or at the end of the banner.
 * @property {string} [description=''] - The main text content displayed within the banner.
 * @property {string} [headerID=''] - An optional ID attribute to assign to the root element of the banner for accessibility or targeting.
 * @property {boolean} [isDismissButton=true] - Determines if a dismiss button should be displayed, allowing the user to close the banner. Defaults to true.
 * @property {('brand'|'info'|'success'|'warning'|'critical')} [modifier='brand'] - Controls the visual style (background color, text color, etc.) of the banner based on predefined themes. Defaults to 'brand'.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [onDismissClick=null] - Callback function executed when the dismiss button is clicked. Receives the click event as an argument.
 * @property {('relative'|'fixed-top'|'fixed-bottom')} [placement='relative'] - Controls the positioning of the banner on the page. Defaults to 'relative'.
 *    - 'relative': Positioned according to the normal flow of the document.
 *    - 'fixed-top': Fixed position at the top of the viewport.
 *    - 'fixed-bottom': Fixed position at the bottom of the viewport.
 * @property {boolean} [shouldTextTruncate=true] - If true, the description text will be truncated with an ellipsis if it exceeds the available space. Defaults to true.
 * @property {string} [wrapperClassName=''] - An optional CSS class name to apply to the root banner element for custom styling.
 */

import React from "react";
import { MdClose } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import {
  BANNER_ALIGN,
  BANNER_COLOR_CLASSES,
  BANNER_MODIFIER,
  BANNER_PLACEMENT,
  BANNER_PLACEMENT_CLASSES,
} from "./constants/banner";

/**
 * Banner component displays prominent messages or announcements to users.
 * It can be configured with different styles, placements, and actions like dismissal.
 *
 * @component
 * @param {BannerProps} props - The props for the Banner component.
 * @returns {React.ReactElement} The rendered Banner component.
 */
const Banner = ({
  align = BANNER_ALIGN.EXTREME,
  bannerIcon = null,
  ctaButton = null,
  description = "",
  headerID = "",
  isDismissButton = true,
  modifier = BANNER_MODIFIER.BRAND,
  onDismissClick = null,
  placement = BANNER_PLACEMENT.RELATIVE,
  shouldTextTruncate = true,
  wrapperClassName = "",
}) => {
  const renderDismissButton = () => (
    <button
      type="button"
      className={twClassNames(
        "flex rounded-md  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-inverse-default",
        BANNER_COLOR_CLASSES[modifier].DISMISS_ICON_HOVER
      )}
      onClick={() => onDismissClick?.()}
    >
      <span className="sr-only">Dismiss</span>
      <MdClose
        className={twClassNames(
          "h-6 w-6 icon-neutral-inverse-default",
          BANNER_COLOR_CLASSES[modifier].DISMISS_ICON_COLOR
        )}
        aria-hidden="true"
      />
    </button>
  );

  const renderDescription = (truncate = true, inlineCTA = false) => (
    <div
      className={twClassNames(
        inlineCTA ? "ml-3" : "mx-3", // Inline CTA is true only for centre aligned banner; adding right margin only on Extreme aligned banner
        "text-wrap font-medium text-neutral-inverse-default",
        BANNER_COLOR_CLASSES[modifier].TEXT_COLOR,
        {
          truncate,
        }
      )}
    >
      {description}
      {inlineCTA && ctaButton ? (
        <span className="block sm:ml-2 sm:inline-block">{ctaButton}</span>
      ) : null}
    </div>
  );

  const renderCenteredBanner = () => (
    <>
      <div className=" flex w-full justify-between gap-2">
        <div className="m-auto text-wrap sm:px-16 sm:text-center">
          {description ? renderDescription(false, true) : null}
        </div>
        {isDismissButton ? (
          <div
            className={twClassNames(
              "flex items-start pr-1 sm:items-center sm:pr-2"
            )}
          >
            {renderDismissButton()}
          </div>
        ) : null}
      </div>
    </>
  );
  const renderDismissButtonWithClass = visibilityClass => (
    <div className={twClassNames(visibilityClass)}>{renderDismissButton()}</div>
  );

  return (
    <div
      className={twClassNames(
        BANNER_PLACEMENT_CLASSES[placement],
        BANNER_COLOR_CLASSES[modifier].CONTAINER_COLOR,
        wrapperClassName
      )}
      id={headerID || null}
    >
      <div className="p-3 lg:pl-8 lg:pr-6">
        {BANNER_ALIGN.CENTERED === align ? (
          renderCenteredBanner()
        ) : (
          <>
            <div className="grid items-center sm:grid-cols-1 sm:gap-4 md:grid-cols-[auto_auto] ">
              <div className="flex items-start justify-between gap-0 sm:gap-12 md:gap-12 lg:gap-12">
                <div className="flex items-center sm:gap-2 ">
                  {bannerIcon && (
                    <span
                      className={twClassNames(
                        "rounded-lg p-2 icon-neutral-inverse-default",
                        BANNER_COLOR_CLASSES[modifier].ICON_BACKGROUND_COLOR
                      )}
                    >
                      {bannerIcon}
                    </span>
                  )}
                  {description && renderDescription(shouldTextTruncate)}
                </div>
                {isDismissButton &&
                  renderDismissButtonWithClass("block md:hidden lg:hidden")}
              </div>
              {ctaButton && (
                <div className="col-span-2 mt-2 flex items-center justify-end sm:col-span-1 sm:mt-0 sm:gap-4 md:mt-0 lg:mt-0">
                  {ctaButton && (
                    <div className="w-full md:w-auto lg:w-auto">
                      {ctaButton}
                    </div>
                  )}
                  {isDismissButton &&
                    renderDismissButtonWithClass("hidden md:block lg:block")}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Banner.propTypes = {
  /** Controls the alignment of the banner items. */
  align: PropTypes.oneOf(Object.values(BANNER_ALIGN)),
  /** A custom React node containing an icon or image to be displayed before the description. */
  bannerIcon: PropTypes.node,
  /** A custom React node containing a button to be displayed after the description. */
  ctaButton: PropTypes.node,
  /** Descriptiion to be displayed in the Banner. */
  description: PropTypes.string,
  /** Used to assign custom id to Banner. */
  headerID: PropTypes.string,
  /** Determines whether the Banner can be dismissed or closed by the user. */
  isDismissButton: PropTypes.bool,
  /** Controls the background colour of the Banner. */
  modifier: PropTypes.oneOf(Object.values(BANNER_MODIFIER)),
  /** A callback function triggered when the dismiss button is clicked. */
  onDismissClick: PropTypes.func,
  /** Controls the placement of the Banner. */
  placement: PropTypes.oneOf(Object.values(BANNER_PLACEMENT)),
  /** Controls whether to truncate the text or not */
  shouldTextTruncate: PropTypes.bool,
  /** A custom CSS class name to style the Banner component. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-banner--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/804788-banner/b/4635b4
 * @end
 */

export default Banner;

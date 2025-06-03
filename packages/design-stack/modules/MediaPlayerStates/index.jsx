/**
 * @typedef {Object} MediaPlayerStatesProps
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {(event: React.MouseEvent<any>) => void} onReloadClick? - Callback function triggered when the "Reload" button is clicked.
 * @property {any} variant? - Represents different states of the media player.
 * @property {string} wrapperClassName? - Additional CSS class(es) to customize the styling of the component.
 */

import React from "react";
import { MdError, MdReplay, MdVideocamOff } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import Button from "../Button";
import Loader from "../Loader";

import { VARIANTS } from "./const/variantConstant";

/**
 * @type {React.FC<MediaPlayerStatesProps>}
 */
const MediaPlayerStates = ({
  id = null,
  onReloadClick = () => {},
  variant = VARIANTS[0],
  wrapperClassName = "",
}) => (
  <>
    {variant === VARIANTS[0] && (
      <div
        className={twClassNames(
          "flex items-center justify-center gap-1 rounded bg-neutral-stronger",
          wrapperClassName
        )}
        {...(id !== null && { id })}
      >
        <div className={twClassNames("flex flex-col items-center gap-2 p-0")}>
          <div className={twClassNames("flex flex-col items-center p-0")}>
            <MdError className="h-9 w-9 icon-neutral-weak" />
            <p
              className={twClassNames(
                "text-center text-base font-semibold not-italic leading-5 text-neutral-default"
              )}
            >
              Something went wrong
            </p>
          </div>
          <p
            className={twClassNames(
              "text-center text-base font-normal not-italic leading-6 text-neutral-weaker"
            )}
          >
            Something went wrong while fetching data
          </p>
          <div className={twClassNames("flex flex-row items-start gap-4 p-0")}>
            <Button
              icon={<MdReplay />}
              iconPlacement="end"
              onClick={onReloadClick}
              type="button"
              variant="minimal"
            >
              Reload
            </Button>
          </div>
        </div>
      </div>
    )}
    {variant === VARIANTS[1] && (
      <div
        className={twClassNames(
          "absolute left-0 top-0 z-10 block h-full w-full bg-neutral-stronger opacity-50",
          wrapperClassName
        )}
        {...(id !== null && { id })}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Loader wrapperClassName="w-9 h-9" />
        </div>
      </div>
    )}
    {variant === VARIANTS[2] && (
      <div
        className={twClassNames(
          "flex items-center justify-center gap-1 rounded bg-neutral-stronger",
          wrapperClassName
        )}
        {...(id !== null && { id })}
      >
        <div
          className={twClassNames("flex w-80 flex-col items-center gap-2 p-0")}
        >
          <div className={twClassNames("flex flex-col items-center p-0")}>
            <MdVideocamOff className="h-9 w-9 icon-neutral-weak" />
            <p
              className={twClassNames(
                "text-center text-base font-semibold not-italic leading-5 text-neutral-default"
              )}
            >
              Video not available
            </p>
          </div>
          <p
            className={twClassNames(
              "text-center text-base font-normal not-italic leading-6 text-neutral-weaker"
            )}
          >
            This session is older than 30 days, and therefore video recording
            isn&#39;t available.
          </p>
        </div>
      </div>
    )}
  </>
);

MediaPlayerStates.propTypes = {
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** Callback function triggered when the "Reload" button is clicked. */
  onReloadClick: PropTypes.func,
  /** Represents different states of the media player. */
  variant: PropTypes.oneOf(VARIANTS),
  /** Additional CSS class(es) to customize the styling of the component. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-mediaplayer--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/96389e-media-player/b/4635b4
 * @end
 */

export default MediaPlayerStates;

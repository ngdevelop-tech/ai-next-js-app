/**
 * Represents a single statistical data point display card.
 *
 * @typedef {Object} StatsProps
 * @property {string} [ariaLabel] - Provides an accessible label for the stats item, overriding the default generated label for clickable stats. Useful for screen readers.
 * @property {string} [cardWrapperClassname] - Custom CSS class name to apply additional styles to the main container `div` of the stat card.
 * @property {boolean} [hasBorder=true] - Determines if the stat card displays a border. Should be `false` when used within a `SharedBorder` layout.
 * @property {boolean} [hideBoxShadow=false] - Determines if the stat card's box shadow should be hidden. Avoid using this with the `SharedBorder` layout.
 * @property {string} [id] - Optional unique identifier to apply to the root `div` element of the component.
 * @property {boolean} [monospacedDigits=false] - If `true`, renders numerical digits using a monospaced font for consistent alignment.
 * @property {StatsOption} option - An object containing the specific data and configuration for the stat card.
 * @property {string} [textColor='text-neutral-default'] - Custom CSS color class to apply to the main statistic value (`option.stat`).
 * @property {('simple'|'with_icon'|'graph_variant')} [variant='simple'] - The visual style variant of the stat card. Determines layout and elements displayed.
 */
/**
 * @typedef {Object} StatsOption
 * @property {string} [change] - Text describing the change in the statistic (e.g., "+5.2%", "-10"). Often used with `changeType`.
 * @property {('increase'|'decrease')} [changeType] - Indicates the nature of the change, typically used to style the `change` text (e.g., green for increase, red for decrease). Use `STATS_INC` or `STATS_DEC` constants.
 * @property {React.ReactNode} [graph] - A React node (often a small chart or graph) to display within the card, typically used with the `graph_variant`.
 * @property {React.ReactNode} [icon] - A React node (usually an icon component) to display, primarily used with the `with_icon` variant.
 * @property {string} [iconContainerWrapperClass] - Custom CSS class name for the container wrapping the `icon`, used only with the `with_icon` variant.
 * @property {React.ReactNode} [link] - A React node (typically an `<a>` tag or `Link` component) to render as a link at the bottom of the card.
 * @property {string} [linkText] - Text content for the `link`. Often used if `link` itself doesn't contain text.
 * @property {React.ReactNode} [menuDropdown] - A React node (usually a dropdown menu component) to display, typically in the top-right corner, used with the `graph_variant`.
 * @property {React.ReactNode | string} name - The title or label for the statistic being displayed.
 * @property {(event: React.MouseEvent<HTMLDivElement>) => void} [onClick] - Callback function executed when the stat card is clicked. Makes the card interactive and focusable.
 * @property {React.ReactNode | string} stat - The main statistical value to display.
 * @property {string} [statSubText] - Additional text displayed below the main `stat` value, providing context or units.
 * @property {number | string} [id] - Unique identifier for the specific stat option, often used when rendering a list of stats.
 */
import React from "react";
/**
 * @component Stats
 * @description Renders a card displaying a statistical data point with various visual configurations.
 * It supports different layouts (simple, with icon, with graph), optional interactive elements like links and menus,
 * and accessibility features for clickable cards.
 *
 * @example
 * const simpleStat = { id: 1, name: 'Total Subscribers', stat: '71,897' };
 * <Stats option={simpleStat} />
 *
 * @example
 * const iconStat = {
 *   id: 2,
 *   name: 'Avg. Open Rate',
 *   stat: '58.16%',
 *   icon: <MailIcon />,
 *   change: '+5.4%',
 *   changeType: STATS_INC
 * };
 * <Stats option={iconStat} variant="with_icon" />
 *
 * @example
 * const clickableStat = {
 *   id: 3,
 *   name: 'Click Rate',
 *   stat: '24.57%',
 *   onClick: () => console.log('Clicked!'),
 * };
 * <Stats option={clickableStat} hasBorder={false} hideBoxShadow={true} />
 *
 * @see https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-stats--primary Storybook - Stats
 * @see https://zeroheight.com/023d5159d/p/54ba2b-stats/b/4635b4 Zeroheight - Stats
 *
 * @accessibility
 * - When `option.onClick` is provided, the component becomes a focusable button (`role="button"`, `tabIndex="0"`).
 * - It handles `Enter` and `Space` key presses for activation.
 * - A default `aria-label` is constructed using `option.name`, `option.stat`, `option.change`, and `option.changeType`.
 * - The `ariaLabel` prop can be used to provide a more specific or descriptive label if needed.
 * - Icons in the `with_icon` variant have `aria-hidden="true"` as they are considered decorative.
 *
 * @type {React.FC<StatsProps>}
 */
declare const Stats: {
    ({ ariaLabel, any, cardWrapperClassname, any, hasBorder, any, hideBoxShadow, any, id, any, monospacedDigits, any, option: any, textColor, any, variant, any, }: any): React.ReactElement;
    propTypes: {
        /** Provides an accessible label for the stats item, overriding the default generated label for clickable stats. */
        ariaLabel: any;
        /** Custom CSS class name to apply additional styles to the main container `div` of the stat card. */
        cardWrapperClassname: any;
        /** Determines if the stat card displays a border. Should be `false` when used within a `SharedBorder` layout. */
        hasBorder: any;
        /** Determines if the stat card's box shadow should be hidden. Avoid using this with the `SharedBorder` layout. */
        hideBoxShadow: any;
        /** Optional unique identifier to apply to the root `div` element of the component. */
        id: any;
        /** If `true`, renders numerical digits using a monospaced font for consistent alignment. */
        monospacedDigits: any;
        /** An object containing the specific data and configuration for the stat card. */
        option: any;
        /** Custom CSS color class (e.g., 'text-green-600') to apply to the main statistic value (`option.stat`). */
        textColor: any;
        /** The visual style variant of the stat card ('simple', 'with_icon', 'graph_variant'). */
        variant: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-stats--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/54ba2b-stats/b/4635b4
 * @end
 */
export default Stats;

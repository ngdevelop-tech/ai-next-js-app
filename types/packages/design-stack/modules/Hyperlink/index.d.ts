import React from "react";
/**
 * @component Hyperlink
 * @description Renders an anchor (`<a>`) tag or a `react-router-dom` `<Link>` for navigation.
 * It automatically adds `rel="noopener noreferrer"` for links opening in a new tab (`target="_blank"`)
 * unless `targetBlankRel` is specified.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - Content displayed within the hyperlink.
 * @param {string} props.href - The URL the hyperlink points to. Required if `isCSR` is false.
 * @param {string} [props.id] - Optional unique identifier for the hyperlink element.
 * @param {boolean} [props.isCSR=false] - If true, renders a `react-router-dom` `<Link>` for client-side routing. `href` must be a valid route path.
 * @param {function} [props.onClick] - Optional click event handler.
 * @param {string} [props.rel=''] - Specifies the relationship of the target object to the link object.
 * @param {string} [props.target=''] - Specifies where to open the linked document (e.g., `_blank`, `_self`).
 * @param {string} [props.targetBlankRel=''] - Custom `rel` attribute value to append when `target` is `_blank`. Defaults to `noopener noreferrer`.
 * @param {string} [props.wrapperClassName=''] - Additional CSS classes for the hyperlink element.
 * @param {object} [props.args] - Additional props passed to the underlying `<a>` or `<Link>` element.
 * @param {React.Ref} ref - Forwarded ref to the underlying `<a>` or `<Link>` element.
 *
 * @type {React.ForwardRefExoticComponent<HyperlinkPropTypes & React.RefAttributes<HTMLAnchorElement | HTMLDivElement>>}
 */
declare const Hyperlink: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @typedef {object} HyperlinkPropTypes
 * @property {React.ReactNode} children - Node containing the content that will be displayed within the component.
 * @property {string} href - The URL that the Hyperlink points to. Should be a valid URL or path.
 * @property {string} [id] - A custom id to identify the component uniquely.
 * @property {boolean} [isCSR=false] - Enable/disable Client-Side Routing (CSR) using `react-router-dom`'s `<Link>`. NOTE: Requires `react-router-dom` context.
 * @property {function} [onClick] - Callback function triggered when the Hyperlink is clicked. Receives the event object.
 * @property {string} [rel=''] - The relationship of the linked URL (e.g., 'nofollow', 'noopener'). Automatically adds 'noopener noreferrer' if `target` is `_blank` and `targetBlankRel` is not provided.
 * @property {('_self'|'_blank'|'_parent'|'_top'|string)} [target=''] - Specifies where to display the linked URL. Common values: `_self`, `_blank`, `_parent`, `_top`.
 * @property {string} [targetBlankRel=''] - Allows overriding the default `rel` attribute (`noopener noreferrer`) when `target` is `_blank`. The provided value will be appended to any existing `rel` value.
 * @property {string} [wrapperClassName=''] - A custom CSS class name to apply additional styles to the component's root element.
 */
export declare const HyperlinkProps: {
    /** Node containing the content that will be displayed within the component. */
    children: any;
    /** The URL that the Hyperlink points to. */
    href: any;
    /** A custom id to identify component uniquely. */
    id: any;
    /**
     * Enable/disable CSR for the Hyperlink using `react-router-dom`'s `<Link>`.
     * NOTE: Requires `react-router-dom` context.
     * @default false
     */
    isCSR: any;
    /** Callback triggered when the Hyperlink is clicked. Receives the event object. */
    onClick: any;
    /**
     * The relationship of the linked URL.
     * Automatically adds 'noopener noreferrer' for `target="_blank"` if `targetBlankRel` is empty.
     * @default ''
     */
    rel: any;
    /**
     * Where to display the linked URL (e.g., `_blank`, `_self`, `_parent`, `_top`).
     * @default ''
     */
    target: any;
    /**
     * Custom `rel` attribute value to append when `target` is `_blank`.
     * Overrides the default 'noopener noreferrer'.
     * @default ''
     */
    targetBlankRel: any;
    /**
     * A custom CSS class name to style the component.
     * @default ''
     */
    wrapperClassName: any;
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-hyperlink--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/84e0a1-hyperlink/b/4635b4
 * @end
 */
export default Hyperlink;

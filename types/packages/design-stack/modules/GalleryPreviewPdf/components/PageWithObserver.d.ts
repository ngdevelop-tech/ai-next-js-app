/**
 * @typedef {Object} PageWithObserverProps
 * @property {number} pageNumber? - Which page from PDF file should be displayed, by page number.
 * @property {(event: React.MouseEvent<any>) => void} setPageVisibility? - Callback to set page visibility.
 */
/**
 * @type {React.FC<PageWithObserverProps>}
 */
declare function PageWithObserver({ pageNumber, setPageVisibility, ...otherProps }: {
    [x: string]: any;
    pageNumber?: any;
    setPageVisibility?: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace PageWithObserver {
    var propTypes: {
        /** Which page from PDF file should be displayed, by page number. */
        pageNumber: any;
        /** Callback to set page visibility. */
        setPageVisibility: any;
    };
}
export default PageWithObserver;

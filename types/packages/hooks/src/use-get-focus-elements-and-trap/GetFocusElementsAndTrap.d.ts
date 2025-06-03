declare const GetFocusElementsAndTrap: {
    ({ parentRef: any, reTrapFocus }: any): React.ReactElement;
    propTypes: {
        parentRef: any;
        reTrapFocus: any;
    };
    defaultProps: {
        reTrapFocus: {
            shouldReTrapFocus: boolean;
            shouldFocusFirstElement: boolean;
        };
    };
};
export default GetFocusElementsAndTrap;

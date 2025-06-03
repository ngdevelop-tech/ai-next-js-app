declare function useYearpicker(data: any, itemsPerPage: any): {
    next: () => void;
    prev: () => void;
    jump: (page: any) => void;
    currentData: () => any;
    currentPage: number;
    maxPage: number;
};
export default useYearpicker;

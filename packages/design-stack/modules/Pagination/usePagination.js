import { useCallback, useEffect, useState } from 'react';

const usePagination = ({
  count,
  defaultPageNumber,
  onNextClick,
  onPageNumberClick,
  onPreviousClick,
  pageNumber,
  pageSize
}) => {
  const [currentPage, setCurrentPage] = useState(defaultPageNumber);

  const [totalPages, setTotalPages] = useState([]);

  const getPageRangeNumbers = useCallback(() => {
    const totalPagesPageNumbers = Math.ceil(count / pageSize);
    return Array.from(Array(totalPagesPageNumbers).keys(), (item) => item + 1);
  }, [count, pageSize]);

  useEffect(() => {
    setTotalPages(getPageRangeNumbers());
  }, [count, pageSize, getPageRangeNumbers]);

  useEffect(() => {
    if (pageNumber) setCurrentPage(pageNumber);
  }, [pageNumber]);

  const prevClick = (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      const updatedCurrentPage = currentPage - 1;
      setCurrentPage(updatedCurrentPage);
      if (onPreviousClick) onPreviousClick(updatedCurrentPage);
    }
  };

  const nextClick = (e) => {
    e.preventDefault();
    if (currentPage < totalPages.length) {
      const updatedCurrentPage = currentPage + 1;
      setCurrentPage(updatedCurrentPage);
      if (onNextClick) onNextClick(updatedCurrentPage);
    }
  };

  const pageNumberClick = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
    if (onPageNumberClick) onPageNumberClick(page);
  };

  return { prevClick, nextClick, pageNumberClick, currentPage, totalPages };
};

export default usePagination;

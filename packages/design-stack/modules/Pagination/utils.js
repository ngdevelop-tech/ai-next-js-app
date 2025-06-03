export const getPageRange = (page, totalPages) => {
  if (totalPages.length <= 7) return totalPages;
  const totalCount = totalPages.length;
  const initialCounts = [1, 2, 3, 4];
  const lastCounts = Array.from(
    { length: 4 },
    (value, index) => totalCount - index
  );
  const pages = Array.from({ length: 7 });
  pages[0] = 1;
  pages[6] = totalCount;
  pages[5] = '...';
  pages[1] = '...';

  if (initialCounts.includes(page)) {
    initialCounts.forEach((num) => {
      pages[num] = num + 1;
    });
  } else if (lastCounts.includes(page)) {
    initialCounts.forEach((num) => {
      pages[6 - num] = totalCount - num;
    });
  } else {
    pages[2] = page - 1;
    pages[3] = page;
    pages[4] = page + 1;
  }

  return pages;
};

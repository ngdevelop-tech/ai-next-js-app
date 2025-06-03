import { CELL_VARIANT } from './tableCell';

export const getCompressedHeaderStyles = (variant, hasCompressedHeader) => {
  let compressedHeaderStyles = '';
  if (hasCompressedHeader && variant === CELL_VARIANT.HEADER) {
    compressedHeaderStyles = 'py-2';
  }

  return compressedHeaderStyles;
};

export const getCellComponent = (isHeaderRow) => (isHeaderRow ? 'th' : 'td');
export const getCompressedHeaderDisplayStyles = (
  variant,
  sortable,
  hasCompressedHeader
) => {
  let compressedHeaderDisplayStyles = '';
  if (variant === CELL_VARIANT.HEADER && (sortable || hasCompressedHeader))
    compressedHeaderDisplayStyles = 'items-center';

  return compressedHeaderDisplayStyles;
};

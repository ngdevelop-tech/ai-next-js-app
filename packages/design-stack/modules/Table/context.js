import React from 'react';

export const TableContextData = React.createContext(null);

export const useTable = () => {
  const context = React.useContext(TableContextData);
  if (!context) {
    throw new Error(
      'TableRow must be used within a TableBody/TableHead with parent Table'
    );
  }

  return context;
};

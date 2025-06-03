import React from 'react';
declare const exportObject: {
    bfsTraversal: (rootNode: any, onEveryItemCallback: any) => React.ReactElement;
    getSearchResultsCustomBSFTraversal: (allItemsList: any, searchLogicCallback: any, filteredList: any, stopParsingChildrenOnSearchMatch: boolean, any: any) => React.ReactElement;
    getSelectedListTreeItems: (prevItems: any, targetItem: any, isChecked: any) => React.ReactElement;
    getTargetHierarchyByIndex: (items: any, targetIndexes: any) => React.ReactElement;
    updateTargetNodes: (isChecked: any, targetIndexes: any, listOfItems: any) => React.ReactElement;
};
export default exportObject;

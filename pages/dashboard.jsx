import {
  PageHeadings,
  Banner,
  Button,
  SidebarNavigation,
  SidebarHeader,
  SidebarItem,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@/packages/design-stack";
import { SIDEBAR_MODIFIER } from "@/packages/design-stack/modules/SidebarItem/constants/sidebarItem";
import React, { useState } from "react";

const sidebarSections = [
  {
    sectionId: "main",
    sectionLabel: "Main",
    sectionOptions: [
      <SidebarItem
        key="dashboard"
        nav={{
          id: "dashboard",
          label: "Dashboard",
          path: "/dashboard",
          activeIcon: () => <span className="icon-[dashboard]" />, // Replace with actual icon
          inActiveIcon: () => <span className="icon-[dashboard]" />,
        }}
        section="main"
        modifier={SIDEBAR_MODIFIER.BRAND}
        currentId="dashboard"
      />,
      <SidebarItem
        key="reports"
        nav={{
          id: "reports",
          label: "Reports",
          path: "/reports",
          activeIcon: () => <span className="icon-[bar-chart]" />, // Replace with actual icon
          inActiveIcon: () => <span className="icon-[bar-chart]" />,
        }}
        section="main"
        modifier={SIDEBAR_MODIFIER.BRAND}
      />,
    ],
  },
];

const reports = [
  { id: 1, name: "Regression Suite", date: "2025-05-20", status: "Passed" },
  { id: 2, name: "Smoke Test", date: "2025-05-19", status: "Failed" },
  { id: 3, name: "Performance Run", date: "2025-05-18", status: "Passed" },
  { id: 4, name: "Accessibility Audit", date: "2025-05-17", status: "Passed" },
  { id: 5, name: "E2E Checkout", date: "2025-05-16", status: "Failed" },
  { id: 6, name: "API Contract", date: "2025-05-15", status: "Passed" },
  { id: 7, name: "UI Visual", date: "2025-05-14", status: "Passed" },
  { id: 8, name: "Security Scan", date: "2025-05-13", status: "Passed" },
];

const testHistoryTableColumns = [
  {
    key: "name",
    name: "Report Name",
    isSortable: true,
    wrapperClass: "text-neutral-default font-medium",
    cell: row => row.name,
  },
  {
    key: "date",
    name: "Date",
    isSortable: true,
    wrapperClass: "text-neutral-weaker",
    cell: row => row.date,
  },
  {
    key: "status",
    name: "Status",
    isSortable: false,
    wrapperClass: row =>
      row.status === "Passed"
        ? "text-green-600 font-medium"
        : "text-red-600 font-medium",
    cell: row => row.status,
  },
  {
    key: "action",
    name: "",
    isSortable: false,
    wrapperClass: "text-neutral-weaker",
    cell: () => <Button variant="minimal">Edit</Button>,
  },
];

const tableRows = reports.map(row => ({ ...row, uuid: row.id }));

const historyPaginationSize = 5;

export default function Dashboard() {
  const [historyCurrentPageNumber, setHistoryCurrentPageNumber] = useState(1);
  const totalRecordsForCurrentParams = reports.length;
  const paginatedRows = tableRows.slice(
    (historyCurrentPageNumber - 1) * historyPaginationSize,
    historyCurrentPageNumber * historyPaginationSize
  );

  function changePageNumber(page) {
    setHistoryCurrentPageNumber(page);
  }

  function sessionSelected(row) {
    // Placeholder for row click action
    alert(`Selected: ${row.name}`);
  }

  function deleteReportForUser() {
    // Placeholder for delete action
  }

  return (
    <div className="min-h-screen bg-neutral-default flex flex-row">
      <SidebarNavigation
        sidebarHeader={<SidebarHeader brandImage="/next.svg" />}
        sidebarPrimarySections={sidebarSections}
        isCollapsible
        isDefaultCollapsed={false}
        outerWrapperClassName="h-screen fixed left-0 top-0 z-20"
        wrapperClassName="w-64"
      />
      <div className="flex-1 flex flex-col ml-64 min-w-0">
        <PageHeadings
          heading="Manual test reports"
          subSection={
            <span className="text-neutral-600 text-base">
              Select a report to access detailed performance metrics & graphs.
            </span>
          }
          actions={
            <Button colors="brand" variant="primary" type="button">
              Test on App Live
            </Button>
          }
        />
        <div className="flex gap-4 p-6">
          <input
            className="border border-neutral-200 rounded px-4 py-2 flex-1 min-w-0"
            placeholder="Search for report name"
          />
          <Button icon={<span className="icon-[filter]" />} variant="secondary">
            Filter reports
          </Button>
        </div>
        <div className="flex w-full flex-1">
          <Table
            containerWrapperClass="w-full md:rounded-none ring-0 relative overflow-auto"
            tableWrapperClass="absolute"
            useEnhancedKeyboardNavigation
          >
            <TableHead wrapperClassName="bg-neutral-default sticky top-0 shadow-[0_1px_0px_0px] text-neutral-inverse-weakest z-5">
              <TableRow>
                {testHistoryTableColumns.map(col => (
                  <TableCell
                    key={col.key}
                    wrapperClassName="text-xs leading-4 font-medium tracking-wider uppercase text-neutral-weaker"
                    variant="header"
                    sortable={col.isSortable}
                  >
                    {col.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody wrapperClassName="border-none">
              {paginatedRows.map(row => (
                <TableRow
                  key={row.uuid}
                  onRowClick={() => {
                    sessionSelected(row);
                  }}
                >
                  {testHistoryTableColumns.map(column => (
                    <TableCell
                      key={column.key + row.uuid}
                      wrapperClassName={
                        typeof column.wrapperClass === "function"
                          ? column.wrapperClass(row)
                          : column.wrapperClass
                      }
                    >
                      {column.cell(row, deleteReportForUser)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex flex-col bg-neutral-default">
          <Pagination
            key="historyPaginator"
            withNumber
            defaultPageNumber={1}
            pageNumber={historyCurrentPageNumber}
            pageSize={historyPaginationSize}
            count={totalRecordsForCurrentParams}
            onNextClick={() => {
              changePageNumber(historyCurrentPageNumber + 1);
            }}
            onPreviousClick={() => {
              changePageNumber(historyCurrentPageNumber - 1);
            }}
            onPageNumberClick={changePageNumber}
          />
        </div>
      </div>
    </div>
  );
}

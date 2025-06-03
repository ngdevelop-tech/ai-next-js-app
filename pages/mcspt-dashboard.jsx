"use client";

import { useState } from "react";
import {
  SidebarNavigation,
  SidebarItem,
  PageHeadings,
  Button,
  InputField,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Dropdown,
  DropdownTrigger,
  DropdownOptionGroup,
  DropdownOptionItem,
} from "@/packages/design-stack";
import {
  MdHome,
  MdDescription,
  MdSearch,
  MdFilterList,
  MdMoreVert,
  MdDelete,
} from "react-icons/md";
import FilterModal from "@/components/FilterModal";

// Mock data for the reports table
const mockReports = [
  {
    id: 1,
    name: "BitbarIOSSample 2025-04-16T12:00:05",
    date: "Wednesday, April, 16, 2025, 5:30PM",
    appVersion: "v1.0",
    appId: "com.bitbar.testdroid.BitbarIOSSample",
    device: "iPhone 16 Pro Max",
    os: "ios 18.0",
  },
  {
    id: 2,
    name: "com.mockappexample 2024-10-25T12:51:52",
    date: "Friday, October, 25, 2024, 6:21PM",
    appVersion: "v1",
    appId: "com.mockappexample",
    device: "Samsung Galaxy A52",
    os: "android 11",
  },
  {
    id: 3,
    name: "com.kfh.kfhonline 2024-10-25T12:44:21",
    date: "Friday, October, 25, 2024, 6:14PM",
    appVersion: "v1",
    appId: "com.kfh.kfhonline",
    device: "IN2011",
    os: "android 10",
  },
  {
    id: 4,
    name: "com.coindcx.btc 2024-05-08T05:24:47",
    date: "Wednesday, May, 8, 2024, 10:54AM",
    appVersion: "v6.37.0003",
    appId: "com.coindcx.btc",
    device: "Google Pixel 8",
    os: "android 14",
  },
  {
    id: 5,
    name: "FDCasino RE 2024-04-01T09:26:56",
    date: "Monday, April, 1, 2024, 2:57PM",
    appVersion: "v2306210846",
    appId: "com.fanduel.casino.enterprise",
    device: "iPhone XS",
    os: "ios 15.3.1",
  },
  {
    id: 6,
    name: "org.kp.m.cert 2024-02-05T05:34:33",
    date: "Monday, February, 5, 2024, 11:04AM",
    appVersion: "v6.1.0",
    appId: "org.kp.m.cert",
    device: "Pixel 7 Pro",
    os: "android 13",
  },
  {
    id: 7,
    name: "org.wikipedia.alpha 2023-12-19T05:10:59",
    date: "Tuesday, December, 19, 2023, 10:41AM",
    appVersion: "v2.5.194-alpha-2017-05-30",
    appId: "org.wikipedia.alpha",
    device: "Samsung Galaxy A51",
    os: "android 10",
  },
  {
    id: 8,
    name: "MACHE FIT R1B 2023-12-13T04:45:52",
    date: "Wednesday, December, 13, 2023, 10:15AM",
    appVersion: "v2383635",
    appId: "com.PepsiCo.MACHeQA",
    device: "iPhone 12 Pro Max",
    os: "ios 16.0",
  },
  {
    id: 9,
    name: "MACHE FIT R1B 2023-12-13T04:43:28",
    date: "Wednesday, December, 13, 2023, 10:13AM",
    appVersion: "v2383635",
    appId: "com.PepsiCo.MACHeQA",
    device: "iPhone 12 Pro Max",
    os: "ios 16.0",
  },
];

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentNavId, setCurrentNavId] = useState("manual-test-reports");
  const itemsPerPage = 5;
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    device: "",
    osVersion: "",
  });

  // Filter reports based on search query
  const filteredReports = mockReports.filter(
    report =>
      report.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.appId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentReports = filteredReports.slice(startIndex, endIndex);

  const handleNavigationClick = navItem => {
    setCurrentNavId(navItem.id);
    // Handle navigation logic here
    console.log("Navigation clicked:", navItem);
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handleNextClick = page => {
    setCurrentPage(page);
  };

  const handlePreviousClick = page => {
    setCurrentPage(page);
  };

  const handleApplyFilters = filters => {
    setSelectedFilters(filters);
    console.log("Applied filters:", filters);
    // Here you can add logic to actually filter the reports based on the selected filters
  };

  // Sidebar navigation structure
  const sidebarPrimarySections = [
    {
      sectionId: "main",
      sectionLabel: null,
      sectionOptions: [
        <SidebarItem
          key="manual-test-reports"
          currentId={currentNavId}
          handleNavigationClick={handleNavigationClick}
          section="main"
          nav={{
            id: "manual-test-reports",
            label: "Manual Test Reports",
            path: "/dashboard",
            activeIcon: MdHome,
            inActiveIcon: MdHome,
            childrens: null,
          }}
        />,
      ],
    },
  ];

  const sidebarSecondaryNavigation = [
    <SidebarItem
      key="view-documentation"
      currentId={currentNavId}
      handleNavigationClick={handleNavigationClick}
      section="secondary"
      nav={{
        id: "view-documentation",
        label: "View Documentation",
        path: "/docs",
        activeIcon: MdDescription,
        inActiveIcon: MdDescription,
        childrens: null,
      }}
    />,
  ];

  const pageActions = (
    <Button variant="primary" colors="brand" size="default">
      Test on App Live
    </Button>
  );

  return (
    <div className="flex h-screen bg-neutral-default">
      {/* Sidebar */}
      <SidebarNavigation
        sidebarPrimarySections={sidebarPrimarySections}
        sidebarSecondaryNavigation={sidebarSecondaryNavigation}
        ariaLabel="Dashboard navigation"
      />

      {/* Main Content - Add left margin to account for sidebar */}
      <div className="flex-1 flex flex-col min-w-0 ml-64">
        {/* Page Header */}
        <PageHeadings
          heading="Manual test reports"
          subSection={
            <p className="text-neutral-weaker">
              Select a report to access detailed performance metrics & graphs.
            </p>
          }
          actions={pageActions}
        />

        {/* Content Area */}
        <div className="flex-1 p-6 space-y-6">
          {/* Search and Filter */}
          <div className="flex gap-4">
            <div className="flex-1 max-w-md">
              <InputField
                placeholder="Search for report name"
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to first page when searching
                }}
              />
            </div>
            <Button
              variant="primary"
              colors="white"
              size="default"
              icon={<MdFilterList className="h-4 w-4" />}
              onClick={() => setIsFilterModalOpen(true)}
            >
              Filter reports
            </Button>
          </div>

          {/* Reports Table */}
          <div className="bg-white border border-neutral-weak rounded-lg overflow-hidden">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell isHeader>REPORT</TableCell>
                  <TableCell isHeader>APP DETAILS</TableCell>
                  <TableCell isHeader>DEVICE</TableCell>
                  <TableCell isHeader></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredReports.length === 0 ? (
                  <TableRow>
                    <TableCell colspan={4}>
                      <div className="text-center py-12">
                        <div className="text-neutral-weaker text-lg mb-2">
                          No reports to show
                        </div>
                        <div className="text-neutral-weaker text-sm">
                          {searchQuery
                            ? `No reports match "${searchQuery}"`
                            : "No reports available"}
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  currentReports.map(report => (
                    <TableRow key={report.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium text-neutral-strong">
                            {report.name}
                          </div>
                          <div className="text-sm text-neutral-weaker">
                            {report.date}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium text-neutral-strong">
                            {report.appVersion}
                          </div>
                          <div className="text-sm text-neutral-weaker">
                            {report.appId}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium text-neutral-strong">
                            {report.device}
                          </div>
                          <div className="text-sm text-neutral-weaker">
                            {report.os}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Dropdown
                          onClick={(clickedDDItem, event) => {
                            event.stopPropagation();
                          }}
                        >
                          <div className="flex">
                            <DropdownTrigger
                              onClick={ddTriggerEvt =>
                                ddTriggerEvt.stopPropagation()
                              }
                              wrapperClassName="p-0 border-0 shadow-none"
                            >
                              <MdMoreVert
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </DropdownTrigger>
                          </div>

                          <DropdownOptionGroup>
                            <DropdownOptionItem
                              option={{
                                body: (
                                  <div className="flex items-center gap-1">
                                    <div className="text-xl">
                                      <MdDelete />
                                    </div>
                                    <div className="">Delete</div>
                                  </div>
                                ),
                                id: 1,
                              }}
                            />
                          </DropdownOptionGroup>
                        </Dropdown>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination - Only show when there are filtered reports */}
          {filteredReports.length > 0 && (
            <Pagination
              count={filteredReports.length}
              defaultPageNumber={currentPage}
              pageSize={itemsPerPage}
              pageNumber={currentPage}
              onPageNumberClick={handlePageChange}
              onNextClick={handleNextClick}
              onPreviousClick={handlePreviousClick}
              hideDetailsString={false}
            />
          )}
        </div>
      </div>
      {/* Filter Modal */}
      {isFilterModalOpen && (
        <FilterModal
          show={isFilterModalOpen}
          onClose={() => setIsFilterModalOpen(false)}
          onApplyFilters={handleApplyFilters}
        />
      )}
    </div>
  );
}

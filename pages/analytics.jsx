"use client";

import { useState } from "react";
import {
  SidebarNavigation,
  SidebarItem,
  PageHeadings,
  Button,
  Tabs,
  Stats,
  Accordion,
  AccordionPanel,
} from "@/packages/design-stack";
import Badge from "@/packages/design-stack/modules/Badge";
import {
  MdDashboard,
  MdAssessment,
  MdFolder,
  MdPlayArrow,
  MdHealthAndSafety,
  MdError,
  MdTrendingUp,
  MdSettings,
  MdIntegrationInstructions,
  MdDescription,
  MdSchedule,
} from "react-icons/md";
import AccordionSimpleHeader from "@/packages/design-stack/modules/AccordionSimpleHeader";

// Mock data for builds
const mockBuilds = [
  {
    id: 1,
    name: "testreqnrollxunitpercywithoutscript_mePUqQ",
    buildNumber: "#1",
    author: "Darwin Barnard",
    timeAgo: "1 min ago",
    project: "percy_sdk_automate_project_new",
    passed: 0,
    failed: 0,
    skipped: 0,
    warnings: 0,
    isRunning: true,
  },
  {
    id: 2,
    name: "testplaywrightmstestpercy_RxJTCH",
    buildNumber: "#1",
    author: "Darwin Barnard",
    timeAgo: "1 min ago",
    project: "testplaywrightmstestpercy_playwrightstest_Windows_May",
    passed: 0,
    failed: 0,
    skipped: 0,
    warnings: 0,
    tag: "BuildTag",
  },
  {
    id: 3,
    name: "testreqnrollmstestproxy_BkvgFB",
    buildNumber: "#1",
    author: "Darwin Barnard",
    timeAgo: "2 mins ago",
    project: "testreqnrollmstestproxy_reqnrollmstest_Windows_May",
    passed: 0,
    failed: 0,
    skipped: 0,
    warnings: 0,
  },
  {
    id: 4,
    name: "testxunitpercywithscript_TKRZgF",
    buildNumber: "#1",
    author: "Darwin Barnard",
    timeAgo: "3 mins ago",
    project: "testxunitpercywithscript_xunitpercy_Windows_May",
    passed: 0,
    failed: 1,
    skipped: 0,
    warnings: 0,
  },
];

export default function AnalyticsDashboard() {
  const [currentNavId, setCurrentNavId] = useState("overview");
  const [selectedProject, setSelectedProject] = useState("WDIO Cucumber GH");

  const handleNavigationClick = navItem => {
    setCurrentNavId(navItem.id);
    console.log("Navigation clicked:", navItem);
  };

  // Sidebar navigation structure
  const sidebarPrimarySections = [
    {
      sectionId: "main",
      sectionLabel: null,
      sectionOptions: [
        <SidebarItem
          key="overview"
          currentId={currentNavId}
          handleNavigationClick={handleNavigationClick}
          section="main"
          nav={{
            id: "overview",
            label: "Overview",
            path: "/analytics",
            activeIcon: MdDashboard,
            inActiveIcon: MdDashboard,
            childrens: null,
          }}
        />,
        <SidebarItem
          key="dashboards"
          currentId={currentNavId}
          handleNavigationClick={handleNavigationClick}
          section="main"
          nav={{
            id: "dashboards",
            label: "Dashboards",
            path: "/dashboards",
            activeIcon: MdAssessment,
            inActiveIcon: MdAssessment,
            childrens: null,
          }}
        />,
      ],
    },
    {
      sectionId: "projects",
      sectionLabel: "Projects",
      sectionOptions: [
        <SidebarItem
          key="wdio-cucumber"
          currentId={currentNavId}
          handleNavigationClick={handleNavigationClick}
          section="projects"
          nav={{
            id: "wdio-cucumber",
            label: selectedProject,
            path: "/projects/wdio-cucumber",
            activeIcon: MdFolder,
            inActiveIcon: MdFolder,
            childrens: null,
          }}
        />,
      ],
    },
    {
      sectionId: "testing",
      sectionLabel: null,
      sectionOptions: [
        <SidebarItem
          key="build-runs"
          currentId={currentNavId}
          handleNavigationClick={handleNavigationClick}
          section="testing"
          nav={{
            id: "build-runs",
            label: "Build Runs",
            path: "/build-runs",
            activeIcon: MdPlayArrow,
            inActiveIcon: MdPlayArrow,
            childrens: null,
          }}
        />,
        <SidebarItem
          key="tests-health"
          currentId={currentNavId}
          handleNavigationClick={handleNavigationClick}
          section="testing"
          nav={{
            id: "tests-health",
            label: "Tests Health",
            path: "/tests-health",
            activeIcon: MdHealthAndSafety,
            inActiveIcon: MdHealthAndSafety,
            childrens: null,
          }}
        />,
        <SidebarItem
          key="unique-errors"
          currentId={currentNavId}
          handleNavigationClick={handleNavigationClick}
          section="testing"
          nav={{
            id: "unique-errors",
            label: "Unique Errors",
            path: "/unique-errors",
            activeIcon: MdError,
            inActiveIcon: MdError,
            childrens: null,
          }}
        />,
        <SidebarItem
          key="testing-trends"
          currentId={currentNavId}
          handleNavigationClick={handleNavigationClick}
          section="testing"
          nav={{
            id: "testing-trends",
            label: "Testing Trends",
            path: "/testing-trends",
            activeIcon: MdTrendingUp,
            inActiveIcon: MdTrendingUp,
            childrens: null,
          }}
        />,
        <SidebarItem
          key="settings"
          currentId={currentNavId}
          handleNavigationClick={handleNavigationClick}
          section="testing"
          nav={{
            id: "settings",
            label: "Settings",
            path: "/settings",
            activeIcon: MdSettings,
            inActiveIcon: MdSettings,
            childrens: null,
          }}
        />,
      ],
    },
  ];

  const sidebarSecondaryNavigation = [
    <SidebarItem
      key="integrations"
      currentId={currentNavId}
      handleNavigationClick={handleNavigationClick}
      section="secondary"
      nav={{
        id: "integrations",
        label: "Integrations",
        path: "/integrations",
        activeIcon: MdIntegrationInstructions,
        inActiveIcon: MdIntegrationInstructions,
        childrens: null,
      }}
    />,
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
    <Button variant="secondary" colors="brand" size="default">
      Personalise
    </Button>
  );

  // Tabs configuration
  const tabsArray = [
    { name: "All builds", id: "all-builds" },
    { name: "My builds", id: "my-builds" },
  ];

  const renderBuildStatus = build => {
    const statusCounts = [
      { count: build.passed, color: "bg-green-500", label: "passed" },
      { count: build.failed, color: "bg-red-500", label: "failed" },
      { count: build.skipped, color: "bg-gray-400", label: "skipped" },
      { count: build.warnings, color: "bg-yellow-500", label: "warnings" },
    ];

    return (
      <div className="flex gap-2">
        {statusCounts.map((status, index) => (
          <div key={index} className="flex items-center gap-1">
            <div className={`w-2 h-2 rounded-full ${status.color}`}></div>
            <span className="text-sm text-neutral-weaker">{status.count}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-neutral-default">
      {/* Sidebar */}
      <SidebarNavigation
        sidebarPrimarySections={sidebarPrimarySections}
        sidebarSecondaryNavigation={sidebarSecondaryNavigation}
        ariaLabel="Analytics dashboard navigation"
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 ml-64">
        {/* Page Header */}
        <PageHeadings heading="Overview" actions={pageActions} />

        {/* Content Area */}
        <div className="flex-1 p-6 space-y-6">
          {/* Key Takeaways Section */}
          <Accordion defaultOpen={true}>
            <AccordionSimpleHeader title="Key Takeaways" />
            <AccordionPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                <Stats
                  variant="simple"
                  option={{
                    id: 1,
                    name: "Time Saving",
                    stat: "86.3%",
                    statSubText: "less time to verify",
                  }}
                />
                <Stats
                  variant="withoutIcon"
                  option={{
                    id: 2,
                    name: "Stability",
                    stat: "47.9%",
                    change: "5%",
                    changeType: "decrease",
                  }}
                />
                <Stats
                  variant="withoutIcon"
                  option={{
                    id: 3,
                    name: "Unique Test Executions",
                    stat: "150.6K",
                    change: "6%",
                    changeType: "decrease",
                  }}
                />
                <Stats
                  variant="withoutIcon"
                  option={{
                    id: 4,
                    name: "New Failures",
                    stat: "12.7K",
                    change: "40%",
                    changeType: "increase",
                  }}
                />
                <Stats
                  variant="withoutIcon"
                  option={{
                    id: 5,
                    name: "Always Failing",
                    stat: "6K",
                    change: "6%",
                    changeType: "increase",
                  }}
                />
                <Stats
                  variant="withoutIcon"
                  option={{
                    id: 6,
                    name: "Flaky Tests",
                    stat: "22.8K",
                    change: "26%",
                    changeType: "increase",
                  }}
                />
              </div>
              <div className="text-sm text-neutral-weaker mt-2">
                In last 7 days
              </div>
            </AccordionPanel>
          </Accordion>

          {/* Latest Builds Section */}
          <div className="bg-white border border-neutral-weak rounded-lg">
            <div className="p-6 border-b border-neutral-weak">
              <div className="flex items-center gap-2 mb-4">
                <MdSchedule className="h-5 w-5 text-neutral-weaker" />
                <h2 className="text-lg font-semibold text-neutral-strong">
                  Latest Builds
                </h2>
              </div>

              <Tabs
                tabsArray={tabsArray}
                onTabChange={tab => console.log("Tab changed:", tab)}
                disableFullWidthBorder={true}
              />
            </div>

            {/* Builds List */}
            <div className="p-6">
              <div className="space-y-4">
                {mockBuilds.map(build => (
                  <div
                    key={build.id}
                    className="flex items-center justify-between p-4 border border-neutral-weak rounded-lg hover:bg-neutral-weaker/20 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        {build.isRunning && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        )}
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-neutral-strong">
                              {build.name}
                            </span>
                            <span className="text-sm text-neutral-weaker">
                              {build.buildNumber}
                            </span>
                            {build.tag && (
                              <Badge
                                text={build.tag}
                                modifier="primary"
                                size="basic"
                              />
                            )}
                          </div>
                          <div className="text-sm text-neutral-weaker">
                            Ran by {build.author} {build.timeAgo} in{" "}
                            {build.project}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      {renderBuildStatus(build)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

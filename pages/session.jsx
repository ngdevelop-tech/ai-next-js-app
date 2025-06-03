"use client";
import {
  MdArrowBack,
  MdShare,
  MdFileDownload,
  MdInfoOutline,
} from "react-icons/md";
import Button from "@/packages/design-stack/modules/Button";
import {
  BUTTON_SIZES,
  BUTTON_COLORS,
  BUTTON_VARIANTS,
} from "@/packages/design-stack/modules/Button/constants/button";
import Badge from "@/packages/design-stack/modules/Badge";
import {
  BADGE_MODIFIER,
  BADGE_SIZE,
} from "@/packages/design-stack/modules/Badge/constants/badge";
import ProgressBar from "@/packages/design-stack/modules/ProgressBar";

export default function SessionReport() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1b2433] text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-6">
            <img
              src="/placeholder.svg?height=32&width=32"
              alt="BrowserStack"
              className="h-8 w-8"
            />
          </div>
          <h1 className="text-xl font-medium">
            BrowserStack Mobile Client Side Performance
          </h1>
          <span className="ml-2 bg-[#6366f1] text-xs px-2 py-0.5 rounded">
            Alpha
          </span>
          <span className="ml-2 text-sm px-2 py-0.5">Live</span>
          <span className="ml-2 text-sm px-2 py-0.5">Automate</span>
          <span className="ml-2 text-sm px-2 py-0.5">More</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-700">
            <MdInfoOutline className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-700">
            <span className="sr-only">Notifications</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-700">
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </header>

      {/* Session Info Bar */}
      <div className="border-b border-gray-200 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Button
            variant={BUTTON_VARIANTS.SECONDARY}
            colors={BUTTON_COLORS.WHITE}
            size={BUTTON_SIZES.SMALL}
            isIconOnlyButton={true}
            icon={<MdArrowBack className="h-5 w-5" />}
            ariaLabel="Go back"
          />
          <span className="text-sm font-medium ml-2">
            Amazon Shopping App v.2.3542.23451 - Google Pixel 7 Pro Android 13
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant={BUTTON_VARIANTS.PRIMARY}
            colors={BUTTON_COLORS.WHITE}
            size={BUTTON_SIZES.DEFAULT}
            icon={<MdShare className="h-4 w-4" />}
          >
            Share Report
          </Button>
          <Button
            variant={BUTTON_VARIANTS.PRIMARY}
            colors={BUTTON_COLORS.WHITE}
            size={BUTTON_SIZES.DEFAULT}
            icon={<MdFileDownload className="h-4 w-4" />}
          >
            Download Logs
          </Button>
        </div>
      </div>

      <div className="flex">
        {/* Phone Preview */}
        <div className="w-[220px] p-4 flex-shrink-0">
          <div className="border border-gray-300 rounded-3xl overflow-hidden bg-[#3a0ca3] p-1">
            <img
              src="/placeholder.svg?height=400&width=200"
              alt="App Preview"
              className="w-full rounded-2xl"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          {/* Issues Detected */}
          <div className="mb-6 border border-gray-200 rounded-lg">
            <div className="p-4 flex justify-between items-center">
              <div className="flex items-center">
                <h2 className="text-lg font-medium">Issues Detected</h2>
                <div className="ml-2">
                  <Badge
                    modifier={BADGE_MODIFIER.ERROR}
                    text="11"
                    size={BADGE_SIZE.BASIC}
                  />
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <div className="p-4 flex justify-between items-center">
                <div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <span>The app size is 56% more than recommended</span>
                  </div>
                  <div className="text-sm text-gray-500 ml-6">
                    Current: 156 MB • Recommended: 100 MB
                  </div>
                </div>
                <div className="ml-2">
                  <Badge
                    modifier={BADGE_MODIFIER.ERROR}
                    text="High Impact"
                    size={BADGE_SIZE.BASIC}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Passed Audits */}
          <div className="mb-6 border border-gray-200 rounded-lg">
            <div className="p-4 flex justify-between items-center">
              <div className="flex items-center">
                <h2 className="text-lg font-medium">Passed Audits</h2>
                <div className="ml-2">
                  <Badge
                    modifier={BADGE_MODIFIER.SUCCESS}
                    text="2"
                    size={BADGE_SIZE.BASIC}
                  />
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 p-4">
              <p>
                The following metrics are well below recommended thresholds: CPU
                Usage, Memory Usage
              </p>
            </div>
          </div>

          {/* App Size */}
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-4">App Size</h2>
            <div className="border border-gray-200 rounded-lg p-4 mb-6">
              <div className="mb-2 text-sm text-gray-500">
                Installed App Size
              </div>
              <div className="text-2xl font-semibold">150.64 MB</div>
            </div>
          </div>

          {/* App Startup Time */}
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-4">App Startup Time</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="text-sm text-gray-500">Average</div>
                  <MdInfoOutline className="ml-1 h-4 w-4 text-gray-400" />
                </div>
                <div className="text-2xl font-semibold">3.45s</div>

                <div className="mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-gray-500">
                        <th className="text-left font-medium pb-2">START</th>
                        <th className="text-left font-medium pb-2">
                          LOAD TIME
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2">00:00</td>
                        <td className="py-2 flex items-center">
                          3.45s
                          <div className="ml-2">
                            <Badge
                              modifier={BADGE_MODIFIER.INFO}
                              text="Cold start"
                              size={BADGE_SIZE.BASIC}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2">04:13</td>
                        <td className="py-2">4.20s</td>
                      </tr>
                      <tr>
                        <td className="py-2">09:04</td>
                        <td className="py-2">2.99s</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="text-sm text-gray-500">Maximum</div>
                  <MdInfoOutline className="ml-1 h-4 w-4 text-gray-400" />
                </div>
                <div className="text-2xl font-semibold">3.90s</div>
              </div>
            </div>
          </div>

          {/* UI Rendering */}
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-4">UI Rendering</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="text-sm text-gray-500">
                    Slow Frame (Hitches)
                  </div>
                  <MdInfoOutline className="ml-1 h-4 w-4 text-gray-400" />
                </div>
                <div className="text-2xl font-semibold">12.34%</div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="text-sm text-gray-500">Frozen Frames</div>
                  <MdInfoOutline className="ml-1 h-4 w-4 text-gray-400" />
                </div>
                <div className="text-2xl font-semibold">12.34%</div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="text-sm text-gray-500">
                    No. of ANRs detected
                  </div>
                  <MdInfoOutline className="ml-1 h-4 w-4 text-gray-400" />
                </div>
                <div className="text-2xl font-semibold">12.34%</div>
              </div>
            </div>

            <div className="mt-4 border border-gray-200 rounded-lg p-4">
              <div className="h-40 relative">
                <img
                  src="/placeholder.svg?height=160&width=600"
                  alt="UI Rendering Graph"
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-2 top-2 text-xs text-gray-500">
                  100%
                </div>
                <div className="absolute left-2 top-1/2 text-xs text-gray-500">
                  50%
                </div>
                <div className="absolute left-2 bottom-2 text-xs text-gray-500">
                  0%
                </div>
              </div>
              <div className="flex mt-2 text-xs text-gray-500">
                <div className="flex items-center mr-4">
                  <span className="h-2 w-2 rounded-full bg-gray-400 mr-1"></span>
                  <span>Legend</span>
                </div>
                <div className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-blue-500 mr-1"></span>
                  <span>Legend</span>
                </div>
              </div>
            </div>
          </div>

          {/* CPU Usage */}
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-4">CPU Usage</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="text-sm text-gray-500">Avg CPU Used</div>
                  <MdInfoOutline className="ml-1 h-4 w-4 text-gray-400" />
                </div>
                <div className="text-2xl font-semibold">45 %</div>

                <div className="mt-4 h-40 relative">
                  <img
                    src="/placeholder.svg?height=160&width=280"
                    alt="CPU Usage Graph"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute left-2 top-2 text-xs text-gray-500">
                    100%
                  </div>
                  <div className="absolute left-2 top-1/2 text-xs text-gray-500">
                    50%
                  </div>
                  <div className="absolute left-2 bottom-2 text-xs text-gray-500">
                    0%
                  </div>
                </div>
                <div className="flex mt-2 text-xs text-gray-500">
                  <div className="flex items-center mr-4">
                    <span className="h-2 w-2 rounded-full bg-gray-400 mr-1"></span>
                    <span>Legend</span>
                  </div>
                  <div className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mr-1"></span>
                    <span>Legend</span>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="text-sm text-gray-500">Max CPU Used</div>
                  <MdInfoOutline className="ml-1 h-4 w-4 text-gray-400" />
                </div>
                <div className="text-2xl font-semibold">432 MB</div>
              </div>
            </div>
          </div>

          {/* Memory Usage */}
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-4">Memory Usage</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="text-sm text-gray-500">Avg Memory Used</div>
                  <MdInfoOutline className="ml-1 h-4 w-4 text-gray-400" />
                </div>
                <div className="text-2xl font-semibold">762 MB</div>

                <div className="mt-4 h-40 relative">
                  <img
                    src="/placeholder.svg?height=160&width=280"
                    alt="Memory Usage Graph"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute left-2 top-2 text-xs text-gray-500">
                    100%
                  </div>
                  <div className="absolute left-2 top-1/2 text-xs text-gray-500">
                    50%
                  </div>
                  <div className="absolute left-2 bottom-2 text-xs text-gray-500">
                    0%
                  </div>
                </div>
                <div className="flex mt-2 text-xs text-gray-500">
                  <div className="flex items-center mr-4">
                    <span className="h-2 w-2 rounded-full bg-gray-400 mr-1"></span>
                    <span>Legend</span>
                  </div>
                  <div className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mr-1"></span>
                    <span>Legend</span>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="text-sm text-gray-500">Max Memory Used</div>
                  <MdInfoOutline className="ml-1 h-4 w-4 text-gray-400" />
                </div>
                <div className="text-2xl font-semibold">2.3 GB</div>
              </div>
            </div>
          </div>

          {/* Battery */}
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-4">Battery</h2>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Progress Bar at Bottom */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
            <ProgressBar
              percentage={45}
              currentStep={1}
              steps={["Loading"]}
              wrapperClassName="h-2"
              label="Session loading progress"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

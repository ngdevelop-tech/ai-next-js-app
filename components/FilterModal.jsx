"use client"

import { useState } from "react"
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  SelectMenu,
  SelectMenuTrigger,
  SelectMenuOptionGroup,
  SelectMenuOptionItem,
} from "@/packages/design-stack"

const FilterModal = ({ show, onClose, onApplyFilters }) => {
  const [selectedDevices, setSelectedDevices] = useState([])
  const [selectedOSVersions, setSelectedOSVersions] = useState([])

  // Mock data for devices and OS versions
  const devices = [
    { label: "iPhone 14", value: "iphone-14" },
    { label: "iPhone 13", value: "iphone-13" },
    { label: "Samsung Galaxy S23", value: "samsung-s23" },
    { label: "Google Pixel 7", value: "pixel-7" },
    { label: "OnePlus 11", value: "oneplus-11" },
  ]

  const osVersions = [
    { label: "iOS 16", value: "ios-16" },
    { label: "iOS 15", value: "ios-15" },
    { label: "Android 13", value: "android-13" },
    { label: "Android 12", value: "android-12" },
    { label: "Android 11", value: "android-11" },
  ]

  const handleApplyFilters = () => {
    const filters = {
      devices: selectedDevices,
      osVersions: selectedOSVersions,
    }
    onApplyFilters?.(filters)
    onClose?.()
  }

  const handleCancel = () => {
    setSelectedDevices([])
    setSelectedOSVersions([])
    onClose?.()
  }

  const handleDeviceChange = (values) => {
    setSelectedDevices(values)
  }

  const handleOSVersionChange = (values) => {
    setSelectedOSVersions(values)
  }

  return (
    <Modal show={show} onClose={onClose} size="md">
      <ModalHeader>
        <h2 className="text-lg font-semibold">Filters</h2>
      </ModalHeader>

      <ModalBody>
        <div className="space-y-6">
          {/* Devices Field */}
          <div>
            <label className="block text-sm font-medium mb-2">Devices</label>
            <SelectMenu isMulti={true} value={selectedDevices} onChange={handleDeviceChange}>
              <SelectMenuTrigger placeholder="Select" />
              <SelectMenuOptionGroup>
                {devices.map((device) => (
                  <SelectMenuOptionItem key={device.value} value={device}>
                    {device.label}
                  </SelectMenuOptionItem>
                ))}
              </SelectMenuOptionGroup>
            </SelectMenu>
          </div>

          {/* OS Version Field */}
          <div>
            <label className="block text-sm font-medium mb-2">OS Version</label>
            <SelectMenu isMulti={true} value={selectedOSVersions} onChange={handleOSVersionChange}>
              <SelectMenuTrigger placeholder="Select" />
              <SelectMenuOptionGroup>
                {osVersions.map((osVersion) => (
                  <SelectMenuOptionItem key={osVersion.value} value={osVersion}>
                    {osVersion.label}
                  </SelectMenuOptionItem>
                ))}
              </SelectMenuOptionGroup>
            </SelectMenu>
          </div>
        </div>
      </ModalBody>

      <ModalFooter>
        <div className="flex justify-end gap-3">
          <Button variant="secondary" colors="neutral" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" colors="brand" onClick={handleApplyFilters}>
            Apply Filters
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  )
}

export default FilterModal

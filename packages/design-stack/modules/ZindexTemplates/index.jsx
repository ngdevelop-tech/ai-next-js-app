import React, { useRef, useState } from "react";
import { MdMoreVert, MdOutlineHome } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { parseDate } from "@internationalized/date";

import {
  Button,
  ComboBox,
  ComboboxLabel,
  ComboboxOptionGroup,
  ComboboxOptionItem,
  ComboboxTrigger,
  DateRangepicker,
  Draggable,
  Dropdown,
  DropdownOptionGroup,
  DropdownOptionItem,
  DropdownTrigger,
  Modal,
  ModalFooter,
  ModalHeader,
  Notifications,
  NotificationsContainer,
  PageHeadings,
  Popover,
  SelectMenu,
  SelectMenuLabel,
  SelectMenuOptionGroup,
  SelectMenuOptionItem,
  SelectMenuTrigger,
  SidebarItem,
  SidebarNavigation,
  SkipToContent,
  Slideover,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TooltipBody,
  TooltipHeader,
} from "../../index";
import { COMBOBOX_OPTIONS } from "../ComboBox/constants/comboBoxStories";
import { notify } from "../Notifications/utils";

const CSS_CLASSES = `sticky w-40 bg-neutral-strongest`;

const ZindexTemplates = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);
  const [openSlideover, setOpenSlideover] = useState(false);
  const [openSlideover2, setOpenSlideover2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openDraggable, setOpenDraggable] = useState(false);
  const targetRef = useRef(null);
  const headerID = "header-id";

  return (
    <div>
      <SkipToContent wrapperClassName="top-2" target={targetRef}>
        Skip to top
      </SkipToContent>
      <div className="relative top-16">
        <NotificationsContainer containerStyle={{ top: "50px" }} />
        <SidebarNavigation
          wrapperClassName="bg-neutral-default pt-20"
          sidebarHeader={
            <SelectMenu>
              <SelectMenuTrigger placeholder="Select Menu..1" />
              <SelectMenuOptionGroup>
                {[
                  { value: 1, label: "Option1" },
                  { value: 2, label: "Option2" },
                ].map(item => (
                  <SelectMenuOptionItem key={item.value} option={item} />
                ))}
              </SelectMenuOptionGroup>
            </SelectMenu>
          }
          sidebarPrimaryNavigation={
            <>
              {[
                {
                  id: "dashboard",
                  label: "Dashboard",
                  activeIcon: MdOutlineHome,
                  inActiveIcon: MdOutlineHome,
                  path: "/",
                },
                {
                  id: "team",
                  label: "Team",
                  activeIcon: MdOutlineHome,
                  inActiveIcon: MdOutlineHome,
                  path: "/team",
                },
              ].map((item, idx) => (
                <React.Fragment key={Math.random()}>
                  {/* <Tooltip
                    content={
                      <>
                        <TooltipHeader>headingText</TooltipHeader>
                        <TooltipBody>bodyText</TooltipBody>
                      </>
                    }
                  > */}
                  <SidebarItem nav={item} current={idx === 3} />
                  {/* </Tooltip> */}
                </React.Fragment>
              ))}
            </>
          }
        />
        <div ref={targetRef} className="ml-64 flex flex-1 flex-col gap-2 pl-4">
          <PageHeadings
            wrapperClassName="pb-6 mb-2 border-b border-neutral-strong"
            heading="Z-index testing"
            subSection="Try testing this template for new z-index layering"
            actions={
              <Dropdown>
                <div className="flex">
                  <DropdownTrigger wrapperClassName="p-0 border-0 shadow-none">
                    <MdMoreVert className="h-5 w-5" aria-hidden="true" />
                  </DropdownTrigger>
                </div>

                <DropdownOptionGroup>
                  {[{ id: 1, body: "Edit" }].map(opt => (
                    <DropdownOptionItem key={opt.id} option={opt} />
                  ))}
                </DropdownOptionGroup>
              </Dropdown>
            }
          />

          <div className="flex justify-between">
            <div>
              <SelectMenu>
                <SelectMenuLabel>Menu Label</SelectMenuLabel>
                <SelectMenuTrigger placeholder="Select Menu..2" />
                <SelectMenuOptionGroup>
                  {[
                    { value: 1, label: "Option 1" },
                    { value: 2, label: "Option 2" },
                  ].map(item => (
                    <SelectMenuOptionItem key={item.value} option={item} />
                  ))}
                </SelectMenuOptionGroup>
              </SelectMenu>
            </div>
            <ComboBox>
              <ComboboxLabel>Combobox Label</ComboboxLabel>
              <ComboboxTrigger placeholder="Placeholder" />
              <ComboboxOptionGroup>
                {COMBOBOX_OPTIONS.map(item => (
                  <ComboboxOptionItem key={item.value} option={item} />
                ))}
              </ComboboxOptionGroup>
            </ComboBox>
            <DateRangepicker
              label="Date range picker"
              defaultValue={{
                start: parseDate("2022-02-03"),
                end: parseDate("2022-05-03"),
              }}
            />
          </div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell key={1} variant="header" isSticky>
                  Component
                </TableCell>
                <TableCell key={2} variant="header">
                  Button
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={3}>
                <TableCell key={4}>Modal</TableCell>
                <TableCell key={5}>
                  {" "}
                  <Button
                    wrapperClassName="mr-4"
                    onClick={() => setOpenModal(true)}
                  >
                    Open modal with options
                  </Button>
                  <Button onClick={() => setOpenModal3(true)}>
                    Open simple modal
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow key={6}>
                <TableCell key={7}>Notification</TableCell>
                <TableCell key={8}>
                  {" "}
                  <Button
                    onClick={() =>
                      notify(
                        <Notifications
                          handleClose={toastData => {
                            notify.remove(toastData.id);
                          }}
                          headerIcon={null}
                          description=""
                          title="Notifications"
                          wrapperClassName={twClassNames(CSS_CLASSES)}
                        />,
                        {
                          position: "top-right",
                          duration: 60000,
                          autoClose: true,
                          size: "lg",
                          toastId: "my-toastId",
                        }
                      )
                    }
                  >
                    Open
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow key={9}>
                <TableCell key={10}>Popover</TableCell>
                <TableCell key={11}>
                  {" "}
                  <Popover
                    placementSide="bottom"
                    wrapperClassName="z-400 p-4"
                    show={openPopover}
                    content={
                      <Button
                        wrapperClassName="ml-3"
                        size="default"
                        onClick={() => setOpenPopover(false)}
                      >
                        Close Popover
                      </Button>
                    }
                  >
                    <Button onClick={() => setOpenPopover(true)}>Open</Button>
                  </Popover>
                </TableCell>
              </TableRow>
              <TableRow key={12}>
                <TableCell key={13}>Slideover</TableCell>
                <TableCell key={14}>
                  <Button onClick={() => setOpenSlideover(true)}>Open</Button>
                </TableCell>
              </TableRow>
              <TableRow key={15}>
                <TableCell key={16}>Draggable component</TableCell>
                <TableCell key={17}>
                  <Button onClick={() => setOpenDraggable(true)}>Open</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        {openDraggable && (
          <Draggable onDrag={() => {}} bounds="parent" handle="#drag-handle">
            <div
              className={twClassNames(
                "h-28 w-72 rounded border border-solid border-neutral-default bg-neutral-default p-4 text-center"
              )}
            >
              <span
                id="drag-handle"
                className={twClassNames(
                  "absolute top-0 my-1 h-1 w-6 rounded bg-neutral-strongest hover:cursor-pointer"
                )}
              />

              <SelectMenu>
                <SelectMenuTrigger placeholder="Select Menu 3.." />
                <SelectMenuOptionGroup>
                  {[
                    { value: 1, label: "Option 1" },
                    { value: 2, label: "Option 2" },
                  ].map(item => (
                    <SelectMenuOptionItem key={item.value} option={item} />
                  ))}
                </SelectMenuOptionGroup>
              </SelectMenu>
            </div>
          </Draggable>
        )}
      </div>
      <Slideover
        show={openSlideover}
        closeButtonOutside
        onCloseWithOutsideButton={() => setOpenSlideover(false)}
        backgroundOverlay={false}
        topMarginElementId={headerID}
        size="2xl"
      >
        IN SLIDEOVER 1
        <Button
          wrapperClassName="m-4"
          onClick={() => {
            setOpenSlideover2(true);
          }}
        >
          Open 2nd Slideover
        </Button>
      </Slideover>
      <Slideover
        show={openSlideover2}
        closeButtonOutside
        onCloseWithOutsideButton={() => setOpenSlideover2(false)}
        backgroundOverlay
        topMarginElementId={headerID}
        isFluid
        resizableWrapperProps={{
          width: 512,
          minConstraints: [300],
          maxConstraints: [900],
        }}
      >
        IN Resizeable SLIDEOVER 2
      </Slideover>
      <Modal
        onOverlayClick={() => {
          setOpenModal(false);
        }}
        show={openModal}
      >
        <ModalHeader
          heading="Modal 1"
          handleDismissClick={() => {
            setOpenModal(false);
          }}
        />
        <ModalFooter
          position="right"
          backgroundColorClass="bg-neutral-stronger"
          isBorder
        >
          <Popover content={<p className="p-4">Popover inside modal</p>}>
            <Button>Popover inside modal</Button>
          </Popover>
          <Button
            onClick={() =>
              notify(
                <Notifications
                  headerIcon={null}
                  description=""
                  title="Notifications2"
                  wrapperClassName={twClassNames(CSS_CLASSES)}
                  handleClose={toastData => {
                    notify.remove(toastData.id);
                  }}
                />,
                {
                  position: "top-left",
                  duration: 40000,
                  autoClose: true,
                  size: "lg",
                }
              )
            }
          >
            Open
          </Button>
          <Tooltip
            content={
              <>
                <TooltipHeader>headingText</TooltipHeader>
                <TooltipBody>bodyText</TooltipBody>
              </>
            }
          >
            <Button onClick={() => setOpenModal2(true)} colors="brand">
              open modal with Tooltip
            </Button>
          </Tooltip>
        </ModalFooter>
        <Modal show={openModal2}>
          <ModalHeader
            heading="Modal 2"
            handleDismissClick={() => {
              setOpenModal2(false);
            }}
          />
          <ModalFooter
            position="right"
            backgroundColorClass="bg-neutral-stronger"
            isBorder
          >
            <Tooltip
              content={
                <>
                  <TooltipHeader>headingText</TooltipHeader>
                  <TooltipBody>bodyText</TooltipBody>
                </>
              }
            >
              <Button colors="brand">Tooltip inside modal</Button>
            </Tooltip>
          </ModalFooter>
        </Modal>
      </Modal>
      {openModal3 && (
        <Modal show={openModal3}>
          <ModalHeader
            heading="Modal 3"
            handleDismissClick={() => {
              setOpenModal3(false);
            }}
          />
          <ModalFooter
            position="right"
            backgroundColorClass="bg-neutral-stronger"
            isBorder
          >
            <Button
              onClick={() =>
                notify(
                  <Notifications
                    headerIcon={null}
                    description=""
                    title="Notifications3"
                    wrapperClassName={twClassNames(CSS_CLASSES)}
                    handleClose={toastData => {
                      notify.remove(toastData.id);
                    }}
                  />,
                  {
                    position: "top-left",
                    duration: 40000,
                    autoClose: true,
                    id: "two",
                    size: "lg",
                  }
                )
              }
            >
              Open
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </div>
  );
};

ZindexTemplates.propTypes = {};
ZindexTemplates.defaultProps = {};

export default ZindexTemplates;

import React, { useRef, useState } from "react";
import { MdOutlineHome } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { parseDate } from "@internationalized/date";

import {
  Banner,
  Button,
  ComboBox,
  ComboboxLabel,
  ComboboxOptionGroup,
  ComboboxOptionItem,
  ComboboxTrigger,
  DateRangepicker,
  Draggable,
  Modal,
  ModalFooter,
  ModalHeader,
  PageHeadings,
  Popover,
  SelectMenu,
  SelectMenuLabel,
  SelectMenuOptionGroup,
  SelectMenuOptionItem,
  SelectMenuTrigger,
  SidebarItem,
  SidebarNavigation,
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
import { printToConsole } from "../../utils/common";
import { COMBOBOX_OPTIONS } from "../ComboBox/constants/comboBoxStories";

const ZindexTemplates2 = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openControlledPopover, setOpenControlledPopover] = useState(false);
  const [openSlideover, setOpenSlideover] = useState(false);
  const [openDraggable, setOpenDraggable] = useState(false);
  const targetRef = useRef(null);
  const headerID = "header-id";

  return (
    <div>
      {/* <Header headerID={headerID} headerElementArray={['search']} /> */}
      <Banner
        wrapperClassName="top-16"
        description="This is Banner"
        placement="top"
        isDismissButton={false}
      />
      <div className="mt-16 flex pt-12">
        <SidebarNavigation
          wrapperClassName="bg-neutral-default pt-32"
          sidebarHeader={
            <SelectMenu>
              <SelectMenuTrigger placeholder="Select Menu 1.." />
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
        <div className="ml-64 flex flex-1 flex-col gap-2 pl-4">
          <PageHeadings
            wrapperClassName="p-0 pb-6 mb-2 border-b border-neutral-strong"
            heading="Z-index testing"
            subSection="Click on More to test further"
            actions={
              <>
                <Button onClick={() => setOpenSlideover(true)}>More</Button>
                <Button
                  wrapperClassName="ml-2"
                  colors="success"
                  onClick={() => setOpenDraggable(!openDraggable)}
                >
                  Drag
                </Button>
              </>
            }
          />

          <Table>
            <TableHead>
              <TableRow>
                <TableCell key={1} variant="header" isSticky>
                  Name
                </TableCell>
                <TableCell key={2} variant="header">
                  Role
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={3}>
                <TableCell key={4}>Person 1</TableCell>
                <TableCell key={5}>Developer</TableCell>
              </TableRow>
              <TableRow key={6}>
                <TableCell key={7}>Person 2</TableCell>
                <TableCell key={8}>Developer</TableCell>
              </TableRow>
              <TableRow key={9}>
                <TableCell key={10}>Person 3</TableCell>
                <TableCell key={11}>Designer</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {openDraggable && (
            <Draggable
              onDrag={() => printToConsole("log", "dragged")}
              handle="#drag-handle"
            >
              <div
                className={twClassNames(
                  "h-32 w-72 rounded border border-solid border-neutral-default bg-neutral-default p-4 text-center"
                )}
              >
                <span
                  id="drag-handle"
                  className={twClassNames(
                    "absolute top-0 my-1 h-1 w-6 rounded bg-neutral-strongest hover:cursor-pointer"
                  )}
                />

                <SelectMenu>
                  <SelectMenuLabel>Drag without bounds</SelectMenuLabel>
                  <SelectMenuTrigger placeholder="Select Menu 2.." />
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
      </div>
      <Slideover
        show={openSlideover}
        closeButtonOutside
        onCloseWithOutsideButton={() => setOpenSlideover(false)}
        onEscPress={() => setOpenSlideover(false)}
        backgroundOverlay
        size="2xl"
        topMarginElementId={headerID}
      >
        <div ref={targetRef} className="flex flex-col gap-2 p-2">
          <div className="flex justify-between">
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
          </div>

          <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
        </div>
      </Slideover>
      <Modal show={openModal}>
        <ModalHeader
          heading="Default Action"
          subHeading="Are you sure you want to deactivate your account?"
          handleDismissClick={() => {
            setOpenModal(false);
          }}
        />
        <ModalFooter
          position="right"
          backgroundColorClass="bg-neutral-stronger"
          isBorder
        >
          <Popover
            show={openControlledPopover}
            content={
              <Button
                wrapperClassName="m-2"
                size="default"
                onClick={() => setOpenControlledPopover(false)}
              >
                Close Popover
              </Button>
            }
          >
            <Button onClick={() => setOpenControlledPopover(true)}>
              ControlledPopover
            </Button>
          </Popover>
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
    </div>
  );
};

ZindexTemplates2.propTypes = {};
ZindexTemplates2.defaultProps = {};

export default ZindexTemplates2;

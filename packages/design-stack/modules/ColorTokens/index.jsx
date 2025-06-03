import React, { useEffect, useState } from "react";
import { MdOpenInNew, MdSearch } from "react-icons/md";

import Button from "../Button";
import InputField from "../InputField";
import PageHeadings from "../PageHeadings";
import SectionHeadings from "../SectionHeadings";
import SelectMenu from "../SelectMenu";
import SelectMenuOptionGroup from "../SelectMenuOptionGroup";
import SelectMenuOptionItem from "../SelectMenuOptionItem";
import SelectMenuTrigger from "../SelectMenuTrigger";
import Table from "../Table";
import TableBody from "../TableBody";
import TableCell from "../TableCell";
import TableHead from "../TableHead";
import TableRow from "../TableRow";

import {
  MLC_COLUMNS_TOKENS,
  SECTION_HEADING_DATA,
  SELECT_OPTIONS_TOKENS,
} from "./constants/colorTokens";
import { getCssVariables, replaceToken } from "./utils";

const ColorTokens = args => {
  const [data, setData] = useState({});
  const [selectedStyle, setSelectedStyle] = useState(SELECT_OPTIONS_TOKENS[1]);
  const [displayData, setDisplayData] = useState({ ...data });

  const { globals } = args;
  const SEMANTIC_TOKEN = "semantic token";
  const OLD_CSS_CLASS = "old css class";
  const TWCSS_VALUE = "twcss value";
  useEffect(() => {
    const { colors, bg, text, surface, border, icon, chart } = getCssVariables(
      globals === "dark" ? ".dark" : ":root"
    );
    const MLC_ROWS_TOKENS = {
      text: Object.keys(text).map(token => {
        const value = text[token];
        const oldToken = value.slice(7);
        return {
          [SEMANTIC_TOKEN]: token,
          "hex code": colors[value],
          [OLD_CSS_CLASS]: `text-${oldToken}`,
          [TWCSS_VALUE]: replaceToken(oldToken),
        };
      }),
      icon: Object.keys(icon).map(token => {
        const value = icon[token];
        const oldToken = value.slice(7);
        return {
          [SEMANTIC_TOKEN]: token,
          "hex code": colors[value],
          [OLD_CSS_CLASS]: `text-${oldToken}`,
          [TWCSS_VALUE]: replaceToken(oldToken),
        };
      }),
      surface: Object.keys(surface).map(token => {
        const value = surface[token];
        const oldToken = value.slice(7);
        return {
          [SEMANTIC_TOKEN]: token,
          "hex code": colors[value],
          [OLD_CSS_CLASS]: `bg-${oldToken}`,
          [TWCSS_VALUE]: replaceToken(oldToken),
        };
      }),
      background: Object.keys(bg).map(token => {
        const value = bg[token];
        const oldToken = value.slice(7);
        return {
          [SEMANTIC_TOKEN]: token,
          "hex code": colors[value],
          [OLD_CSS_CLASS]: `bg-${oldToken}`,
          [TWCSS_VALUE]: replaceToken(oldToken),
        };
      }),
      border: Object.keys(border).map(token => {
        const value = border[token];
        const oldToken = value.slice(7);
        return {
          [SEMANTIC_TOKEN]: token,
          "hex code": colors[value],
          [OLD_CSS_CLASS]: `border-${oldToken}`,
          [TWCSS_VALUE]: replaceToken(oldToken),
        };
      }),
      chart: Object.keys(chart).map(token => {
        const value = chart[token];

        return {
          [SEMANTIC_TOKEN]: token,
          "hex code": value,
          [OLD_CSS_CLASS]: "-",
          [TWCSS_VALUE]: "-",
        };
      }),
    };
    setData({ ...MLC_ROWS_TOKENS });
    setDisplayData({ ...MLC_ROWS_TOKENS });
  }, [globals]);

  const onInputChange = query => {
    if (query === "") setDisplayData({ ...data });
    else {
      const newTables = {};
      Object.keys(data).forEach(style => {
        newTables[style] = data[style].filter(
          data1 =>
            data1["semantic token"]
              .toLowerCase()
              .includes(query.toLowerCase()) ||
            data1["old css class"].toLowerCase().includes(query.toLowerCase())
        );
      });
      setDisplayData(newTables);
    }
  };

  return (
    <div className="flex flex-col gap-6 bg-neutral-strong">
      <PageHeadings
        heading="DesignStack color tokens"
        actions={
          <>
            <Button
              wrapperClassName="mr-2"
              onClick={() =>
                window.open(
                  "https://browserstack.atlassian.net/wiki/spaces/ENG/pages/4163208259/Migration+guidelines+to+semantic+tokens+for+products",
                  "_blank"
                )
              }
              icon={<MdOpenInNew className="h-5 w-5" />}
            >
              Migration Guidelines
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://design.browserstack.com/023d5159d/p/95763e-color-token",
                  "_blank"
                )
              }
              colors="white"
              icon={<MdOpenInNew className="h-5 w-5" />}
            >
              Design Tokens Doc
            </Button>
          </>
        }
      />
      <div className="flex flex-col gap-6 px-4">
        <div className="flex gap-3 pb-4">
          <InputField
            id="token-search"
            onChange={e => onInputChange(e.target.value)}
            addOnBeforeInline={<MdSearch className="h-5 w-5" />}
            placeholder="Search table"
          />
          <SelectMenu value={selectedStyle} onChange={setSelectedStyle}>
            <SelectMenuTrigger wrapperClassName="w-36" placeholder="Select.." />
            <SelectMenuOptionGroup>
              {SELECT_OPTIONS_TOKENS.map(item => (
                <SelectMenuOptionItem key={item.value} option={item} />
              ))}
            </SelectMenuOptionGroup>
          </SelectMenu>
        </div>
        {(selectedStyle.value === "all"
          ? SECTION_HEADING_DATA
          : [selectedStyle]
        ).map(type => (
          <div key={type.label}>
            <SectionHeadings
              wrapperClassName="border-none"
              title={`${type.label} Tokens`}
              subTitle={type.description}
            />
            <Table>
              <TableHead>
                <TableRow id="header-row">
                  {MLC_COLUMNS_TOKENS.map(col => (
                    <TableCell
                      textTransform="uppercase"
                      key={col.key}
                      variant="header"
                    >
                      {col.name}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {displayData[type.label.toLowerCase()]?.map(row => (
                  <TableRow key={crypto.randomUUID()} id={crypto.randomUUID()}>
                    {MLC_COLUMNS_TOKENS.map(column => {
                      const value = row[column.name];
                      return (
                        <TableCell key={column.key}>
                          {column.cell ? (
                            <>{column.cell(row, type.label.toLowerCase())}</>
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorTokens;

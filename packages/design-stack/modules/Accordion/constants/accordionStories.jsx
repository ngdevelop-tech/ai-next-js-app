import React from 'react';
import PropTypes from 'prop-types';

import { Badge, Checkbox } from '../../../index';

export const TITLE_TEXT = 'Title goes in here';

export const ACCORDION_BODY_CONTENT = 'main content comes here';

export const ACCORDION_INTERACTIVE_HEADER_TRIGGER_COMMON = (
  <Checkbox
    border={false}
    wrapperClassName="mt-1"
    ariaLabel="custom checkbox"
  />
);

export const ACCORDION_PANEL_CONTENT_COMMON = (
  <div className="flex items-center justify-center bg-neutral-stronger p-2">
    {ACCORDION_BODY_CONTENT}
    <a
      className="focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-strong"
      href="#/"
    >
      Some Link
    </a>
  </div>
);

export const BadgeCommon = ({ textPrefix }) => (
  <>
    <Badge size="basic" text={`${textPrefix}1`} modifier="success" />
    <Badge size="basic" text={`${textPrefix}2`} modifier="error" />
    <Badge size="basic" text={`${textPrefix}3`} modifier="warn" />
    <Badge size="basic" text={`${textPrefix}4`} />
  </>
);

BadgeCommon.propTypes = {
  textPrefix: PropTypes.string.isRequired
};

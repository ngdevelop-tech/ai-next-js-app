import React, { useState, useRef, useCallback } from "react";
// ...existing imports...

const FileUploadField = ({
  id,
  label,
  labelOptional,
  description,
  helperText,
  errorMessage,
  successMessage,
  disabled = false,
  required = false,
  multiple = false,
  accept,
  maxFileSize,
  onFileSelect,
  onFileRemove,
  onError,
  className,
  ...props
}) => {
  // ...existing component logic...
};

// Remove defaultProps
// FileUploadField.defaultProps = {
//   disabled: false,
//   required: false,
//   multiple: false,
// };

export default FileUploadField;

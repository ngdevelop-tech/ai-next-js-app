# Application

This application uses a custom design system called "design-stack".

## Packages Structure

Our project includes the following packages:

### Design Stack (`packages/design-stack`)

Our custom design system components:

```
packages/design-stack/
├── hooks/         # Custom hooks used by design system components
│   └── useFloatingPlacement.js
├── index.js       # Main entry point for the design system
├── modules/       # UI components
│   ├── Accordion/
│   ├── AccordionInteractiveHeader/
│   ├── AccordionPanel/
│   ├── AccordionSimpleHeader/
│   ├── ActionPanel/
│   ├── Alert/
│   ├── AlertActionButton/
│   ├── AlertDescription/
│   ├── AlertFooter/
│   ├── AlertLink/
│   ├── AlertTitle/
│   ├── Attachments/
│   ├── Avatar/
│   ├── Badge/
│   ├── Banner/
│   ├── BreadcrumbContainer/
│   ├── BreadcrumbContents/
│   ├── BreadcrumbText/
│   ├── Button/
│   ├── Checkbox/
│   ├── CodeEditor/
│   ├── CodeSnippet/
│   ├── CodeSnippetToolbar/
│   ├── ColorTokens/
│   ├── ComboBox/
│   ├── ComboboxAddNewItem/
│   ├── ComboboxLabel/
│   ├── ComboboxOptionGroup/
│   ├── ComboboxOptionItem/
│   ├── ComboboxStickyItem/
│   ├── ComboboxTrigger/
│   ├── CTACard/
│   ├── CTACardActions/
│   ├── CTACardContent/
│   ├── CTACardMedia/
│   ├── DataVisualization/
│   ├── DataVisualizationAnalytics/
│   ├── DataVisualizationDescription/
│   ├── DataVisualizationFooter/
│   ├── DataVisualizationHeader/
│   ├── DataVisualizationKpi/
│   ├── DateRangepicker/
│   ├── DescriptionList/
│   ├── DescriptionListBody/
│   ├── DescriptionListHeader/
│   ├── DowntimePage/
│   ├── Draggable/
│   ├── Dropdown/
│   ├── DropdownOptionGroup/
│   ├── DropdownOptionItem/
│   ├── DropdownTrigger/
│   ├── EmptyState/
│   ├── EmptyStateAction/
│   ├── EmptyStateBody/
│   ├── EmptyStateDescription/
│   ├── EmptyStateIcon/
│   ├── EmptyStateRecommendation/
│   ├── EmptyStateTitle/
│   ├── EmptyStateWStartingPoints/
│   ├── ErrorBoundary/
│   ├── FileUpload/
│   ├── Gallery/
│   ├── GalleryMedia/
│   ├── GalleryMediaActionbar/
│   ├── GalleryMediaFooterButton/
│   ├── GalleryPreview/
│   ├── GalleryPreviewImage/
│   ├── GalleryPreviewPdf/
│   ├── GalleryPreviewPdfPageNumber/
│   ├── GalleryZoomInOut/
│   ├── GridListWHorizontalLink/
│   ├── InputField/
│   ├── Loader/
│   ├── Tooltip/
│   ├── TooltipBody/
│   ├── TooltipFooter/
│   ├── TooltipHeader/
│   ├── TruncateText/
│   └── ... (100+ components available)
├── shared/        # Shared utilities and configurations
└── utils/         # Utility functions for the design system
    ├── common.js
    ├── customDocHandler.mjs
    ├── generate-doc.mjs
    ├── sideBarItem/
    └── texteditorSkin/
```

**Important**: When using design system components,  Refer to the `types` folder for Type definitions and type information. This will help you use the components correctly and leverage all available functionality.

### Design Stack Icons (`packages/design-stack-icons`)

A comprehensive collection of icons for use in the application:

```
packages/design-stack-icons/
├── index.js      # Main entry point for icons
└── src/          # Individual icon components (100+ icons available)
```

### Hooks (`packages/hooks`)

Custom React hooks for application logic:

```
packages/hooks/
├── index.js      # Entry point exporting all hooks
└── src/          # Individual hook implementations
```

### Utils (`packages/utils`)

Utility functions for the application:

```
packages/utils/
├── constants.js   # Application constants
├── makeDebounce.js
├── tailwindUtils.js
└── throttleFn.js
```

## Development Guidelines

- **JavaScript Only**: This project uses JavaScript with JSX (not TypeScript)
- **TailwindCSS**: Use Tailwind classes as defined in tailwind.config.js
- **Design System**: Use components from our `@packages/design-stack` design system
- **Icons**: Use icons from:
  1. First choice: `react-icons/md` or `@heroicons/react`
- **Type Definitions**: Check the `@/types` folder for component prop specifications, implementation examples, and default prop values for all design-stack components.

## Starting new Project
- Create a `layout.js` in `app` folder and import the `@/styles/globals.css` file into this.
- Create pages in app folder as per standard nextjs practice
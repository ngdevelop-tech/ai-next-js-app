const plugin = require("tailwindcss/plugin");
const tailwindForms = require("@tailwindcss/forms");
const tailwindAspectRatio = require("@tailwindcss/aspect-ratio");
const tailwindScrollPlugin = require("tailwind-scrollbar-hide");
const tailwindContainerQueriesPlugin = require("@tailwindcss/container-queries");

const darkDangerColor = "#FCA5A5";
const lightDangerColor = "#FEE2E2";
const darkNeutralColor = "#9CA3AF";
const lightNeutralColor = "#E5E7EB";
const darkAttentionColor = "#D97706";
const lightAttentionColor = "#FEF3C7";

const neutralBorderRight = `1px solid ${darkNeutralColor}`;
const neutralLightBorderRight = `1px solid ${lightNeutralColor}`;
const dangerBorderRight = `1px solid ${darkDangerColor}`;
const dangerLightBorderRight = `1px solid ${lightDangerColor}`;
const attentionBorderRight = `1px solid ${darkAttentionColor}`;
const attentionLightBorderRight = `1px solid ${lightAttentionColor}`;
const iconTokens = {
  "neutral-weak": "var(--icon-neutral-weak)",
  "neutral-default": "var(--icon-neutral-default)",
  "neutral-strong": "var(--icon-neutral-strong)",
  "neutral-weakest": "var(--icon-neutral-weakest)",
  "neutral-weaker": "var(--icon-neutral-weaker)",
  "neutral-strongest": "var(--icon-neutral-strongest)",
  "neutral-inverse-default": "var(--icon-neutral-inverse-default)",
  "neutral-inverse-weaker": "var(--icon-neutral-inverse-weaker)",
  "attention-weaker": "var(--icon-attention-weaker)",
  "attention-weak": "var(--icon-attention-weak)",
  "attention-default": "var(--icon-attention-default)",
  "attention-strong": "var(--icon-attention-strong)",
  "attention-stronger": "var(--icon-attention-stronger)",
  "attention-strongest": "var(--icon-attention-strongest)",
  "attention-inverse-default": "var(--icon-attention-inverse-default)",
  "brand-weakest": "var(--icon-brand-weakest)",
  "brand-weaker": "var(--icon-brand-weaker)",
  "brand-weak": "var(--icon-brand-weak)",
  "brand-default": "var(--icon-brand-default)",
  "brand-strong": "var(--icon-brand-strong)",
  "brand-stronger": "var(--icon-brand-stronger)",
  "danger-weakest": "var(--icon-danger-weakest)",
  "danger-weaker": "var(--icon-danger-weaker)",
  "danger-weak": "var(--icon-danger-weak)",
  "danger-default": "var(--icon-danger-default)",
  "danger-strong": "var(--icon-danger-strong)",
  "danger-stronger": "var(--icon-danger-stronger)",
  "success-weakest": "var(--icon-success-weakest)",
  "success-weaker": "var(--icon-success-weaker)",
  "success-weak": "var(--icon-success-weak)",
  "success-default": "var(--icon-success-default)",
  "success-strong": "var(--icon-success-strong)",
  "success-stronger": "var(--icon-success-stronger)",
  "sky-400": "var(--colors-sky-400)",
  "sky-600": "var(--colors-sky-600)",
};

module.exports = {
  content: [
    "./packages/**/*.{js,jsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  // Need to add keyFrames and animation classNames it getting used only as inline styles without classNames.
  // Reason : Tailwind drops non-used keyframes during build
  safelist: [
    "animate-[neutral-lineNumberAnimate]",
    "animate-[attention-lineNumberAnimate]",
    "animate-[danger-lineNumberAnimate]",
    "animate-[neutral-lineAnimate1]",
    "animate-[danger-lineAnimate1]",
    "animate-[attention-lineAnimate1]",
    "animate-[neutral-lineAnimate2]",
    "animate-[danger-lineAnimate2]",
    "animate-[attention-lineAnimate2]",
    "animate-[neutral-lineAnimate3]",
    "animate-[danger-lineAnimate3]",
    "animate-[attention-lineAnimate3]",
  ],
  theme: {
    extend: {
      animation: {
        enter: "enter 200ms ease-out",
        "slide-in": "slide-in 1s cubic-bezier(.41,.73,.51,1.02)",
        leave: "leave 150ms ease-in forwards",
        "glow-shadow": "shadow-glow 1s linear infinite alternate-reverse",
        "slide-from-top": "slide-top 0.2s",
        "slide-from-bottom": "slide-bottom 0.2s",
        "slide-spotlight": "150ms spotlight-slide-up 1ms ease-in 1 forwards",
        "slide-in-right": "slideInRight 0.3s ease-out",
        "slide-out-right": "slideOutRight 0.3s ease-in",
      },
      keyframes: {
        enter: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        leave: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(0.9)", opacity: 0 },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideOutRight: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
        "slide-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "shadow-glow": {
          from: {
            boxShadow: "inset 0 0 0 #0070F0, 0 0 0 #0070F0",
          },
          to: {
            boxShadow: "inset 0 0 4px 1px #0070F0, 0 0 4px 1px #0070F0",
          },
        },
        "spotlight-slide-up": {
          from: {
            transform: "translateY(20px)",
            opacity: "0%",
          },
          to: {
            transform: "translateY(0px)",
            opacity: "100%",
          },
        },
        "slide-bottom": {
          from: {
            top: "200px",
          },
          to: {
            top: "0",
          },
        },
        "slide-top": {
          from: {
            top: "-200px",
          },
          to: {
            top: "0",
          },
        },
        "neutral-lineNumberAnimate": {
          "0%": { background: "transparent" },
          "50%": {
            background: lightNeutralColor,
            color: "#111827",
            borderRight: neutralBorderRight,
          },
          "100%": {
            background: "transparent",
            borderRight: neutralLightBorderRight,
          },
        },
        "danger-lineNumberAnimate": {
          "0%": { background: "transparent" },
          "50%": {
            background: lightDangerColor,
            color: "#7F1D1D",
            borderRight: dangerBorderRight,
          },
          "100%": {
            background: "transparent",
            borderRight: dangerLightBorderRight,
          },
        },
        "attention-lineNumberAnimate": {
          "0%": { background: "transparent" },
          "50%": {
            background: lightAttentionColor,
            color: "#78350F",
            borderRight: attentionBorderRight,
          },
          "100%": {
            background: "transparent",
            borderRight: attentionLightBorderRight,
          },
        },
        "neutral-lineAnimate1": {
          "0%": {
            outline: neutralLightBorderRight,
          },
          "50%": {
            outline: neutralBorderRight,
          },
          "100%": {
            outline: neutralLightBorderRight,
          },
        },
        "danger-lineAnimate1": {
          "0%": {
            outline: dangerLightBorderRight,
          },
          "50%": {
            outline: dangerBorderRight,
          },
          "100%": {
            outline: dangerLightBorderRight,
          },
        },
        "attention-lineAnimate1": {
          "0%": {
            outline: attentionLightBorderRight,
          },
          "50%": {
            outline: attentionBorderRight,
          },
          "100%": {
            outline: attentionLightBorderRight,
          },
        },
        "neutral-lineAnimate2": {
          "0%": {
            position: "relative",
            zIndex: "1",
            boxShadow: `0px -1px 0px 0px ${lightNeutralColor}`,
          },
          "50%": {
            position: "relative",
            zIndex: "1",
            boxShadow: `0px -1px 0px 0px ${darkNeutralColor}`,
          },
          "100%": {
            position: "relative",
            zIndex: "1",
            boxShadow: `0px -1px 0px 0px ${lightNeutralColor}`,
          },
        },
        "danger-lineAnimate2": {
          "0%": {
            position: "relative",
            zIndex: "1",
            boxShadow: `0px -1px 0px 0px ${lightDangerColor}`,
          },
          "50%": {
            position: "relative",
            zIndex: "1",
            boxShadow: `0px -1px 0px 0px ${darkDangerColor}`,
          },
          "100%": {
            position: "relative",
            zIndex: "1",
            boxShadow: `0px -1px 0px 0px ${lightDangerColor}`,
          },
        },
        "attention-lineAnimate2": {
          "0%": {
            position: "relative",
            zIndex: "1",
            boxShadow: `0px -1px 0px 0px ${lightAttentionColor}`,
          },
          "50%": {
            position: "relative",
            zIndex: "1",
            boxShadow: `0px -1px 0px 0px ${darkAttentionColor}`,
          },
          "100%": {
            position: "relative",
            zIndex: "1",
            boxShadow: `0px -1px 0px 0px ${lightAttentionColor}`,
          },
        },
        "neutral-lineAnimate3": {
          "0%": {
            position: "relative",
            zIndex: "1",
            boxShadow: `0px 1px 0px 0px ${lightNeutralColor}`,
          },
          "50%": {
            position: "relative",
            zIndex: "1",
            boxShadow: `0px 1px 0px 0px ${darkNeutralColor}`,
          },
          "100%": {
            position: "relative",
            zIndex: "1",
            boxShadow: `0px 1px 0px 0px ${lightNeutralColor}`,
          },
        },
        "danger-lineAnimate3": {
          "0%": {
            position: "relative",
            zIndex: "1",
            boxShadow: `0px 1px 0px 0px ${lightDangerColor}`,
          },
          "50%": {
            position: "relative",
            zIndex: "1",
            boxShadow: `0px 1px 0px 0px ${darkDangerColor}`,
          },
          "100%": {
            position: "relative",
            zIndex: "1",
            boxShadow: `0px 1px 0px 0px ${lightDangerColor}`,
          },
        },
        "attention-lineAnimate3": {
          "0%": {
            position: "relative",
            zIndex: "1",
            boxShadow: `0px 1px 0px 0px ${lightAttentionColor}`,
          },
          "50%": {
            position: "relative",
            zIndex: "1",
            boxShadow: `0px 1px 0px 0px ${darkAttentionColor}`,
          },
          "100%": {
            position: "relative",
            zIndex: "1",
            boxShadow: `0px 1px 0px 0px ${lightAttentionColor}`,
          },
        },
      },
      textColor: {
        "info-default": "var(--colors-brand-600)",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      base: {
        50: "var(--colors-base-50)",
        100: "var(--colors-base-100)",
        200: "var(--colors-base-200)",
        300: "var(--colors-base-300)",
        400: "var(--colors-base-400)",
        500: "var(--colors-base-500)",
        600: "var(--colors-base-600)",
        700: "var(--colors-base-700)",
        800: "var(--colors-base-800)",
        900: "var(--colors-base-900)",
      },
      brand: {
        50: "var(--colors-brand-50)",
        100: "var(--colors-brand-100)",
        200: "var(--colors-brand-200)",
        300: "var(--colors-brand-300)",
        400: "var(--colors-brand-400)",
        500: "var(--colors-brand-500)",
        600: "var(--colors-brand-600)",
        700: "var(--colors-brand-700)",
        800: "var(--colors-brand-800)",
        900: "var(--colors-brand-900)",
      },
      danger: {
        50: "var(--colors-danger-50)",
        100: "var(--colors-danger-100)",
        200: "var(--colors-danger-200)",
        300: "var(--colors-danger-300)",
        400: "var(--colors-danger-400)",
        500: "var(--colors-danger-500)",
        600: "var(--colors-danger-600)",
        700: "var(--colors-danger-700)",
        800: "var(--colors-danger-800)",
        900: "var(--colors-danger-900)",
      },
      success: {
        50: "var(--colors-success-50)",
        100: "var(--colors-success-100)",
        200: "var(--colors-success-200)",
        300: "var(--colors-success-300)",
        400: "var(--colors-success-400)",
        500: "var(--colors-success-500)",
        600: "var(--colors-success-600)",
        700: "var(--colors-success-700)",
        800: "var(--colors-success-800)",
        900: "var(--colors-success-900)",
      },
      attention: {
        50: "var(--colors-attention-50)",
        100: "var(--colors-attention-100)",
        200: "var(--colors-attention-200)",
        300: "var(--colors-attention-300)",
        400: "var(--colors-attention-400)",
        500: "var(--colors-attention-500)",
        600: "var(--colors-attention-600)",
        700: "var(--colors-attention-700)",
        800: "var(--colors-attention-800)",
        900: "var(--colors-attention-900)",
      },
      info: {
        50: "var(--colors-info-50)",
        100: "var(--colors-info-100)",
        200: "var(--colors-info-200)",
        300: "var(--colors-info-300)",
        400: "var(--colors-info-400)",
        500: "var(--colors-info-500)",
        600: "var(--colors-info-600)",
        700: "var(--colors-info-700)",
        800: "var(--colors-info-800)",
        900: "var(--colors-info-900)",
      },
      pink: {
        100: "var(--colors-pink-100)",
        300: "var(--colors-pink-300)",
        700: "var(--colors-pink-700)",
        800: "var(--colors-pink-800)",
        950: "var(--colors-pink-950)",
      },
    },
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
      14: "14",
      15: "15",
      16: "16",
    },
    zIndex: {
      0: "0",
      5: "5",
      10: "10",
      15: "15",
      20: "20",
      25: "25",
      30: "30",
      35: "35",
      40: "40",
      45: "45",
      50: "50",

      95: "95",
      96: "96",
      97: "97",
      98: "98",
      99: "99",
      100: "100",

      195: "195",
      196: "196",
      197: "197",
      198: "198",
      199: "199",
      200: "200",

      295: "295",
      296: "296",
      297: "297",
      298: "298",
      299: "299",
      300: "300",

      395: "395",
      396: "396",
      397: "397",
      398: "398",
      399: "399",
      400: "400",

      495: "495",
      496: "496",
      497: "497",
      498: "498",
      499: "499",
      500: "500",

      595: "595",
      596: "596",
      597: "597",
      598: "598",
      599: "599",
      600: "600",

      695: "695",
      696: "696",
      697: "697",
      698: "698",
      699: "699",
      700: "700",
    },
    // packages/utils/constants.js needs to be changed whenever any token semantic token name is updated or added
    backgroundColor: ({ theme }) => ({
      "neutral-default": "var(--bg-neutral-default)",
      "neutral-strong": "var(--bg-neutral-strong)",
      "neutral-stronger": "var(--bg-neutral-stronger)",
      "neutral-strongest": "var(--bg-neutral-strongest)",
      "neutral-inverse-weakest": "var(--bg-neutral-inverse-weakest)",
      "neutral-inverse-weaker": "var(--bg-neutral-inverse-weaker)",
      "neutral-inverse-weak": "var(--bg-neutral-inverse-weak)",
      "neutral-inverse-default": "var(--bg-neutral-inverse-default)",
      "neutral-default-hover": "var(--bg-neutral-default-hover)",
      "neutral-default-disabled": "var(--bg-neutral-default-disabled)",
      "neutral-stronger-hover": "var(--bg-neutral-stronger-hover)",
      "neutral-stronger-disabled": "var(--bg-neutral-stronger-disabled)",
      "neutral-strongest-hover": "var(--bg-neutral-strongest-hover)",
      "neutral-strongest-disabled": "var(--bg-neutral-strongest-disabled)",
      "neutral-strong-hover": "var(--bg-neutral-strong-hover)",
      "neutral-inverse-weaker-hover": "var(--bg-neutral-inverse-weaker-hover)",
      "attention-weakest": "var(--bg-attention-weakest)",
      "attention-weaker": "var(--bg-attention-weaker)",
      "attention-weak": "var(--bg-attention-weak)",
      "attention-default": "var(--bg-attention-default)",
      "attention-stronger": "var(--bg-attention-stronger)",
      "attention-weaker-disabled": "var(--bg-attention-weaker-disabled)",
      "attention-weaker-hover": "var(--bg-attention-weaker-hover)",
      "attention-weak-disabled": "var(--bg-attention-weak-disabled)",
      "attention-weak-hover": "var(--bg-attention-weak-hover)",
      "attention-weakest-hover": "var(--bg-attention-weakest-hover)",
      "brand-weakest": "var(--bg-brand-weakest)",
      "brand-weaker": "var(--bg-brand-weaker)",
      "brand-weak": "var(--bg-brand-weak)",
      "brand-default": "var(--bg-brand-default)",
      "brand-stronger": "var(--bg-brand-stronger)",
      "brand-weaker-disabled": "var(--bg-brand-weaker-disabled)",
      "brand-weaker-hover": "var(--bg-brand-weaker-hover)",
      "brand-default-hover": "var(--bg-brand-default-hover)",
      "brand-default-disabled": "var(--bg-brand-default-disabled)",
      "brand-weakest-hover": "var(--bg-brand-weakest-hover)",
      "danger-weakest": "var(--bg-danger-weakest)",
      "danger-weaker": "var(--bg-danger-weaker)",
      "danger-default": "var(--bg-danger-default)",
      "danger-stronger": "var(--bg-danger-stronger)",
      "danger-default-hover": "var(--bg-danger-default-hover)",
      "danger-default-disabled": "var(--bg-danger-default-disabled)",
      "danger-weaker-hover": "var(--bg-danger-weaker-hover)",
      "danger-weaker-disabled": "var(--bg-danger-weaker-disabled)",
      "danger-weakest-hover": "var(--bg-danger-weakest-hover)",
      "success-weakest": "var(--bg-success-weakest)",
      "success-weaker": "var(--bg-success-weaker)",
      "success-default": "var(--bg-success-default)",
      "success-strong": "var(--bg-success-strong)",
      "success-stronger": "var(--bg-success-stronger)",
      "success-weaker-hover": "var(--bg-success-weaker-hover)",
      "success-weaker-disabled": "var(--bg-success-weaker-disabled)",
      "success-default-hover": "var(--bg-success-default-hover)",
      "success-default-disabled": "var(--bg-success-default-disabled)",
      "success-weakest-hover": "var(--bg-success-weakest-hover)",
      "success-strong-hover": "var(--bg-success-strong-hover)",
      "success-strong-disabled": "var(--bg-success-strong-disabled)",
      "input-default": "var(--bg-input-default)",
      "input-default-hover": "var(--bg-input-default-hover)",
      "input-default-disabled": "var(--bg-input-default-disabled)",
      "raised-default": "var(--bg-raised-default)",
      "raised-default-hover": "var(--bg-raised-default-hover)",
      ...theme("colors"),
    }),
    textColor: ({ theme }) => ({
      "neutral-weakest": "var(--text-neutral-weakest)",
      "neutral-weaker": "var(--text-neutral-weaker)",
      "neutral-weak": "var(--text-neutral-weak)",
      "neutral-default": "var(--text-neutral-default)",
      "neutral-inverse-default": "var(--text-neutral-inverse-default)",
      "neutral-inverse-weak": "var(--text-neutral-inverse-weak)",
      "neutral-inverse-weakest": "var(--text-neutral-inverse-weakest)",
      "attention-weaker": "var(--text-attention-weaker)",
      "attention-weak": "var(--text-attention-weak)",
      "attention-default": "var(--text-attention-default)",
      "attention-strong": "var(--text-attention-strong)",
      "attention-stronger": "var(--text-attention-stronger)",
      "attention-inverse-default": "var(--text-attention-inverse-default)",
      "brand-weaker": "var(--text-brand-weaker)",
      "brand-weak": "var(--text-brand-weak)",
      "brand-default": "var(--text-brand-default)",
      "brand-strong": "var(--text-brand-strong)",
      "brand-stronger": "var(--text-brand-stronger)",
      "brand-strongest": "var(--text-brand-strongest)",
      "danger-weaker": "var(--text-danger-weaker)",
      "danger-weak": "var(--text-danger-weak)",
      "danger-default": "var(--text-danger-default)",
      "danger-strong": "var(--text-danger-strong)",
      "danger-stronger": "var(--text-danger-stronger)",
      "danger-strongest": "var(--text-danger-strongest)",
      "success-weaker": "var(--text-success-weaker)",
      "success-weak": "var(--text-success-weak)",
      "success-default": "var(--text-success-default)",
      "success-strong": "var(--text-success-strong)",
      "success-stronger": "var(--text-success-stronger)",
      "rte-code-green": "var(--rte-code-green)",
      "rte-code-dark-green": "var(--rte-code-dark-green)",
      "rte-code-pink": "var(--rte-code-pink)",
      "rte-code-light-pink": "var(--rte-code-light-pink)",
      "rte-code-slate-gray": "var(--rte-code-slate-gray)",
      "rte-code-brown": "var(--rte-code-brown)",
      "rte-code-orange": "var(--rte-code-orange)",
      "rte-code-gray": "var(--rte-code-gray)",
      "rte-code-punctuation": "var(--rte-code-punctuation)",
      ...theme("colors"),
    }),
    borderColor: ({ theme }) => ({
      "neutral-weak": "var(--border-neutral-weak)",
      "neutral-default": "var(--border-neutral-default)",
      "neutral-strong": "var(--border-neutral-strong)",
      "neutral-stronger": "var(--border-neutral-stronger)",
      "neutral-strongest": "var(--border-neutral-strongest)",
      "neutral-inverse-default": "var(--border-neutral-inverse-default)",
      "attention-default": "var(--border-attention-default)",
      "attention-stronger": "var(--border-attention-stronger)",
      "brand-weaker": "var(--border-brand-weaker)",
      "brand-weak": "var(--border-brand-weak)",
      "brand-default": "var(--border-brand-default)",
      "brand-strong": "var(--border-brand-strong)",
      "brand-stronger": "var(--border-brand-stronger)",
      "brand-strongest": "var(--border-brand-strongest)",
      "danger-weak": "var(--border-danger-weak)",
      "danger-default": "var(--border-danger-default)",
      "danger-stronger": "var(--border-danger-stronger)",
      "danger-strong": "var(--border-danger-strong)",
      "success-default": "var(--border-success-default)",
      "success-stronger": "var(--border-success-stronger)",
      ...theme("colors"),
    }),
    outlineColor: ({ theme }) => ({
      ...theme("borderColor"),
      ...theme("colors"),
    }),
    ringColor: ({ theme }) => ({
      ...theme("borderColor"),
      ...theme("colors"),
    }),
    caretColor: ({ theme }) => ({
      ...iconTokens,
      ...theme("colors"),
    }),
    ringOffsetColor: ({ theme }) => ({
      ...theme("backgroundColor"),
      ...theme("colors"),
      DEFAULT: "var(--bg-neutral-default)",
    }),
    fill: ({ theme }) => ({
      ...iconTokens,
      "neutral-inverse-weakest": "var(--icon-neutral-weak)", // to be deprecated later once all speedboats are migrated
      "neutral-inverse-weak": "var(--bg-neutral-inverse-weak)", // used only for design-stack tooltip/popover arrow
      "raised-default": "var(--bg-raised-default)", // used only for design-stack tooltip/popover arrow
      ...theme("colors"),
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [
    // plugin(({ matchUtilities, addBase, theme }) => {
    //   matchUtilities(
    //     {
    //       icon: value => ({
    //         color: value,
    //       }),
    //     },
    //     {
    //       values: { ...iconTokens },
    //     }
    //   );
    //   matchUtilities(
    //     {
    //       surface: value => ({
    //         backgroundColor: value,
    //       }),
    //     },
    //     {
    //       values: {
    //         default: "var(--surface-default)",
    //         strong: "var(--surface-strong)",
    //       },
    //     }
    //   );
    //   addBase({
    //     ":root": {
    //       "--dashboard-grid-placeholder": theme(
    //         "backgroundImage.dashboard-grid-placeholder"
    //       ),
    //     },
    //   });
    // }),
    tailwindForms,
    tailwindAspectRatio,
    tailwindScrollPlugin,
    tailwindContainerQueriesPlugin,
  ],
};

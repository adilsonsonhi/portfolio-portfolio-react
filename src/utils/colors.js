/**
 * Base color palette following a consistent naming convention
 * Each color scale uses a 50-950 range with consistent increments
 */
export const baseColors = {
  neutral: {
    50: "#F7F7F8",
    100: "#EEEEF0",
    200: "#DADADD",
    300: "#BABBBF",
    400: "#94959C",
    500: "#767681",
    600: "#606169",
    700: "#4E4E56",
    800: "#434349",
    900: "#3B3C3F",
    950: "#27272A",
  },
  brand: {
    50: "#FFFAEC",
    100: "#FFF4D2",
    200: "#FFE6A4",
    300: "#FFD26B",
    400: "#FFB32F",
    500: "#FF9907",
    600: "#F97C00",
    700: "#DB6400",
    800: "#A34909",
    900: "#833E0B",
    950: "#471D03",
  },
};
/**
 * Semantic color tokens that map to specific UI elements and states
 * These reference the base colors but provide meaningful names
 */
export const semanticColors = {
  // Background colors
  background: {
    primary: "#FFFFFF",
    secondary: baseColors.neutral[50],
  },

  // Button colors
  button: {
    primary: {
      background: baseColors.neutral[950],
      hover: baseColors.neutral[900],
      border: baseColors.neutral[950],
      text: baseColors.neutral[50],
    },
    secondary: {
      background: "trasparent",
      hover: baseColors.neutral[950],
      border: baseColors.neutral[300],
      text: baseColors.neutral[950],
    },
    tertiary: {
      background: baseColors.brand[700],
      hover: baseColors.brand[800],
      border: baseColors.brand[700],
      text: baseColors.neutral[50],
    },
  },

  // Text colors
  text: {
    heading: {
      primary: baseColors.neutral[900],
      secondary: baseColors.neutral[500],
    },
    body: {
      primary: baseColors.neutral[500],
      secondary: baseColors.neutral[600],
      tertiary: baseColors.neutral[400],
    },
  },

  // Border colors
  border: {
    default: baseColors.neutral[200],
    form: baseColors.neutral[300],
  },

  // Effects
  effects: {
    shadow: "0 0 24px rgba(149, 157, 165, 0.2)",
  },
};

// Optional: Export both sets if needed
export const colorTokens = {
  ...baseColors,
  ...semanticColors,
};

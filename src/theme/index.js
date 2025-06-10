export const lightTheme = {
  // Core
  primary: "#0D9488", // Teal
  secondary: "#6366F1", // Indigo
  background: "#d2d2fa",
  card: "#F1F5F9",
  text: "#0F172A",
  border: "#CBD5E1",
  surface: "#f6f8fc",
  overlay: "rgba(0, 0, 0, 0.5)",

  // Feedback
  notification: "#DC2626", // Red-600
  success: "#22C55E", // Green-500
  warning: "#EAB308", // Yellow-500
  error: "#DC2626",
  info: "#2563EB", // Blue-600

  // Priority
  priorityHigh: "#DC2626",
  priorityMedium: "#EAB308",
  priorityLow: "#22C55E",

  // Status
  statusCompleted: "#22C55E",
  statusActive: "#2563EB",
  statusOverdue: "#DC2626",

  // UI Elements
  inputBackground: "#F8FAFC",
  cardBackground: "#FFFFFF",
  divider: "#E2E8F0",
  placeholder: "#94A3B8",
  backdrop: "rgba(0, 0, 0, 0.4)",

  // Typography
  textPrimary: "#0F172A",
  textSecondary: "#475569",
  textTertiary: "#94A3B8",
  textInverted: "#FFFFFF",

  // Gradients
  gradients: {
    primary: ["#14B8A6", "#0D9488"],
    secondary: ["#8B5CF6", "#6366F1"],
    success: ["#4ADE80", "#22C55E"],
    warning: ["#FACC15", "#EAB308"],
    error: ["#F87171", "#DC2626"],
    info: ["#60A5FA", "#2563EB"],
  },
};

export const darkTheme = {
  // Core
  primary: "#5EEAD4", // Teal-300
  secondary: "#A5B4FC", // Indigo-300
  background: "#0F172A",
  card: "#1E293B",
  text: "#F8FAFC",
  border: "#334155",
  surface: "#1e1e1e",
  overlay: "rgba(0, 0, 0, 0.7)",

  // Feedback
  notification: "#F87171", // Red-400
  success: "#4ADE80",
  warning: "#FACC15",
  error: "#F87171",
  info: "#60A5FA",

  // Priority
  priorityHigh: "#F87171",
  priorityMedium: "#FACC15",
  priorityLow: "#4ADE80",

  // Status
  statusCompleted: "#4ADE80",
  statusActive: "#60A5FA",
  statusOverdue: "#F87171",

  // UI Elements
  inputBackground: "#334155",
  cardBackground: "#1E293B",
  divider: "#334155",
  placeholder: "#94A3B8",
  backdrop: "rgba(0, 0, 0, 0.6)",

  // Typography
  textPrimary: "#F8FAFC",
  textSecondary: "#CBD5E1",
  textTertiary: "#94A3B8",
  textInverted: "#0F172A",

  // Gradients
  gradients: {
    primary: ["#5EEAD4", "#2DD4BF"],
    secondary: ["#C4B5FD", "#A5B4FC"],
    success: ["#86EFAC", "#4ADE80"],
    warning: ["#FDE68A", "#FACC15"],
    error: ["#FCA5A5", "#F87171"],
    info: ["#93C5FD", "#60A5FA"],
  },
};

export const typography = {
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
  },
  fontWeights: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

export const spacing = {
  0: 0,
  0.5: 2,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
};

export const borderRadius = {
  none: 0,
  sm: 2,
  md: 4,
  lg: 8,
  xl: 12,
  "2xl": 16,
  full: 9999,
};

export const shadows = {
  none: {
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  md: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  lg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  xl: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
};

export const animation = {
  fast: 200,
  normal: 300,
  slow: 500,
};

export const zIndex = {
  modal: 1000,
  dropdown: 900,
  overlay: 800,
  tooltip: 700,
};

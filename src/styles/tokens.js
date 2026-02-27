// Color Palette - Nova Bank Design System
export const colors = {
  primary: '#08F7E4',
  primaryLight: '#E6FFFC',
  primaryLighter: '#C0FFF9',
  primaryDark: '#08F7E4',
  primaryDarker: '#08F7E4',
  secondary: '#1F2937',
  secondaryLight: '#F3F4F6',
  accent: '#08F7E4',
  accentLight: '#08F7E4',
  text: '#1F2937',
  textLight: '#6B7280',
  textLighter: '#9CA3AF',
  background: '#FFFFFF',
  backgroundLight: '#F9FAFB',
  backgroundLighter: '#F3F4F6',
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
  error: '#EF4444',
  warning: '#F59E0B',
  success: '#08F7E4',
  info: '#08F7E4',
};

// Typography
export const typography = {
  fontFamily: {
    sans: '"Inter", "Segoe UI", system-ui, sans-serif',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

// Spacing
export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '2.5rem',
  '2xl': '3rem',
  '3xl': '4rem',
};

// Shadows
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
};

// Border Radius
export const borderRadius = {
  sm: '0.375rem',
  base: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
  '2xl': '2rem',
  full: '9999px',
};

// Z-Index Scale
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  dropdown: 1000,
  sticky: 1001,
  fixed: 1002,
  backdrop: 1003,
  offcanvas: 1050,
  modal: 1060,
  popover: 1070,
  tooltip: 1080,
};

export default {
  colors,
  typography,
  spacing,
  shadows,
  borderRadius,
  zIndex,
};

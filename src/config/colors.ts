export const colors = {
  primary: {
    50: 'var(--primary-50)',    // Lightest green - backgrounds
    100: 'var(--primary-100)',  // Light green - subtle backgrounds
    200: 'var(--primary-200)',  // Light green - hover states
    300: 'var(--primary-300)',  // Medium-light green - secondary elements
    400: 'var(--primary-400)',  // Medium green - active states
    500: 'var(--primary-500)',  // Main green - primary buttons
    600: 'var(--primary-600)',  // Medium-dark green - hover states
    700: 'var(--primary-700)',  // Dark green - active states
    800: 'var(--primary-800)',  // Darker green - text
    900: 'var(--primary-900)',  // Darkest green - emphasis
  },
  // Raw color values for CSS variables
  rawColors: {
    light: {
      primary: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      }
    },
    dark: {
      primary: {
        50: '#0a1f14',
        100: '#0f2b1b',
        200: '#133823',
        300: '#1a482f',
        400: '#22593c',
        500: '#2a6a48',
        600: '#32845c',
        700: '#3a9e70',
        800: '#42b883',
        900: '#4ad297',
      }
    }
  },
  gray: {
    50: '#f9fafb',    // Lightest gray - backgrounds
    100: '#f3f4f6',   // Light gray - subtle backgrounds
    200: '#e5e7eb',   // Light gray - borders
    300: '#d1d5db',   // Medium-light gray - disabled states
    400: '#9ca3af',   // Medium gray - placeholder text
    500: '#6b7280',   // Medium gray - secondary text
    600: '#4b5563',   // Medium-dark gray - body text
    700: '#374151',   // Dark gray - headings
    800: '#1f2937',   // Darker gray - emphasis
    900: '#111827',   // Darkest gray - strong emphasis
  },
  status: {
    success: '#22c55e',  // Green - success states
    error: '#ef4444',    // Red - error states
    warning: '#f59e0b',  // Yellow - warning states
    info: '#3b82f6',     // Blue - info states
  }
}

export const gradients = {
  light: {
    primary: 'from-primary-50 to-white',
    secondary: 'from-gray-50 to-white',
  },
  dark: {
    primary: 'from-primary-900 to-gray-900',
    secondary: 'from-gray-800 to-gray-900',
  }
}

export default colors 
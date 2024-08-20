import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import debugScreens from 'tailwindcss-debug-screens';
import colors from 'tailwindcss/colors';

function useMapDefaultColorPalette({
  palette,
  name,
}: {
  palette: Record<string, string>;
  name: string;
}) {
  const colors = {
    [name]: {},
  };

  Object.entries(palette).map((color) => {
    colors[name][`${color[0]}`] = color[1];
  });

  return colors;
}

const size = (px: number) => ({ [px]: `${px / 16}rem` });
const toRem = (px: number) => `${px / 16}rem`;

export default {
  content: [
    './templates/**/*.{twig,html,vue,js,ts}',
    './src/vue/**/*.{vue,js,ts}',
  ],
  safelist: [
    {
      pattern:
        /bg-(white|gray|black|green|darkgreen|pink|darkpink|orange|darkorange)/,
    },
    { pattern: /col-span-(2|3|4|5|6|8|9|10)/ },
    { pattern: /grid-cols-(2|3|4|5|6|8|9|10)/ },
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      gray: '#F6F6F6',
      darkgray: '#E0E0E0',
      green: '#009688',
      darkgreen: '#20656D',
      pink: '#D81B60',
      darkpink: '#9B104F',
      orange: '#EF5E1D',
      darkorange: '#9B4524',
      ...useMapDefaultColorPalette({ palette: colors.green, name: 'primary' }),
      ...useMapDefaultColorPalette({ palette: colors.pink, name: 'secondary' }),
    },
    fontFamily: {
      sans: ['"Montserrat"', 'Helvetica', 'Arial', 'sans-serif'],
      heading: ['"Quicksand"', 'Helvetica', 'Arial', 'sans-serif'],
      mono: ['"JetBrains Mono"', '"Courier New"', 'Courier', 'monospace'],
    },
    fontSize: {
      ...size(12),
      ...size(13),
      ...size(14),
      ...size(15),
      ...size(16),
      ...size(18),
      ...size(20),
      ...size(22),
      ...size(24),
      ...size(28),
      ...size(30),
      ...size(32),
      ...size(36),
      ...size(40),
      ...size(44),
      ...size(48),
      ...size(52),
      ...size(56),
      ...size(60),
      ...size(72),
      ...size(96),
      ...size(128),
    },
    screens: {
      sm: toRem(640),
      md: toRem(768),
      lg: toRem(1024),
      xl: toRem(1280),
      '2xl': toRem(1440),
      '3xl': toRem(2048),
      nthover: { raw: '(hover: hover)' },
    },
    extend: {
      aspectRatio: {
        landscape: '3 / 2',
        portrait: '2 / 3',
        square: '1 / 1',
      },
      lineHeight: {
        90: '0.90',
        100: '1.00',
        110: '1.10',
        120: '1.20',
        140: '1.40',
        160: '1.60',
        200: '2.00',
      },
      borderRadius: {
        big: '9rem',
      },
      listStyleImage: {
        checkmark: 'url("/dist/svg/icons/list-item.svg")',
      },
    },
    // Plugin Stuff
    debugScreens: {
      ignore: ['nthover'],
      position: ['bottom', 'right'],
    },
  },
  variants: {},
  corePlugins: {
    container: false,
  },
  plugins: [
    debugScreens,
    forms,
    typography,
    ({ addComponents }) => {
      addComponents({
        '.container': {
          width: '100%',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen md': {
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
          '@screen xl': {
            maxWidth: '1280px',
            paddingLeft: 'max(24, min((11px + 3.50vw), 32px))',
            paddingRight: 'max(24, min((11px + 3.5vw), 32px))',
          },
          '@screen 2xl': {
            maxWidth: '1360px',
            paddingLeft: 'max(24, min((8.57px + 3.57vw), 32px))',
            paddingRight: 'max(24, min((8.57px + 3.57vw), 32px))',
          },
        },
      });
    },
  ],
} satisfies Config;

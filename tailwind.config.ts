import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
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
  content: ['./templates/**/*.{twig,html,vue,js,ts}', './src/pcss/**/*.pcss'],
  safelist: [
    {
      pattern: /bg-(white|gray|black|green|darkgreen|pink|darkpink|orange|darkorange)/,
    },
    { pattern: /col-span-(2|3|4|5|6|8|9|10)/ },
    { pattern: /grid-cols-(2|3|4|5|6|8|9|10)/ },
  ],
  darkMode: 'class', // or 'media' or 'class'
  // Extend the default Tailwind config here
  theme: {
    extend: {
      screens: {
        sm: toRem(640),
        md: toRem(768),
        lg: toRem(1024),
        xl: toRem(1280),
        '2xl': toRem(1440),
        '3xl': toRem(1536),
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem',
        '11xl': '112rem',
        '12xl': '120rem',
        '13xl': '128rem',
        '14xl': '136rem',
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
      aspectRatio: {
        landscape: '3 / 2',
        portrait: '2 / 3',
      },
      zIndex: {
        '-1': '-1',
      },
      backgroundImage: {
        overlay: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 69.66%, rgba(0, 0, 0, 0.8) 90.29%)',
        'check-secondary': "url('https://craft-baseplate.ddev.site/dist/img/icons/check.svg')",
        'check-white': "url('https://craft-baseplate.ddev.site/dist/img/icons/check-white.svg')",
      },
      boxShadow: {
        'skip-to-content': '0px 0px 800px 200px rgba(0,0,0, 0.75)',
      },
    },
    // Replace the default Tailwind config here
    spacing: {
      ...size(0),
      ...size(1),
      ...size(1.5),
      ...size(2),
      ...size(3),
      ...size(4),
      ...size(6),
      ...size(8),
      ...size(10),
      ...size(12),
      ...size(14),
      ...size(16),
      ...size(18),
      ...size(20),
      ...size(22),
      ...size(24),
      ...size(28),
      ...size(32),
      ...size(36),
      ...size(40),
      ...size(48),
      ...size(56),
      ...size(64),
      ...size(72),
      ...size(80),
      ...size(96),
      ...size(100),
      ...size(120),
      ...size(140),
      ...size(160),
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
      ...size(80),
      ...size(96),
      ...size(128),
    },
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
    },
    colors: {
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      primary: {
        DEFAULT: 'rgb(var(--color-primary))',
      },
      secondary: {
        DEFAULT: 'rgb(var(--color-secondary))',
      },
      error: '#FF0000',
      'skip-to-content': 'rgb(var(--skip-to-content-bg))',
    },
  },
  variants: {},
  corePlugins: {
    container: false,
  },
  plugins: [
    debugScreens,
    forms,
    ({ addComponents, theme }) => {
      addComponents({
        '.container': {
          width: theme('width.full'),
          maxWidth: theme('screen.3xl'),
          paddingLeft: theme('spacing.6'),
          paddingRight: theme('spacing.6'),
          paddingTop: theme('spacing.14'),
          paddingBottom: theme('spacing.14'),
          margin: '0 auto',
          '@screen lg': {
            padding: theme('spacing.20'),
          },
        },
        '.full-click': {
          '&::after': {
            content: "''",
            zIndex: 10,
            position: 'absolute',
            inset: 0,
            backgroundColor: 'transparent',
            pointerEvents: 'auto',
          },
        },
      });
    },
  ],
} satisfies Config;

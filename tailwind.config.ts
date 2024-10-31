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
  /*theme: {
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
      primary: "#1424d5",
      secondary: "#ef0505"
      // ...useMapDefaultColorPalette({ palette: colors.green, name: 'primary' }),
      // ...useMapDefaultColorPalette({ palette: colors.pink, name: 'secondary' }),
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
  },*/
  // Extend the default Tailwind config here
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1400px',
        '3xl': '1536px',
      },
      spacing: {
        '11.5': '2.875rem',
        '13': '3.125rem',
        '19': '4.875rem',
        '27': '6.875rem',
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
      zIndex: {
        '-1': '-1',
      },
      boxShadow: {
        base: '0px 6px 12px rgba(0, 0, 0, 0.14)',
        menu: '0px 4px 11px 0px rgba(0, 0, 0, 0.12)',
        'menu-inset': 'inset 0px 4px 11px 0px rgba(0, 0, 0, 0.12)',
        'border-black': 'inset 0px 0px 0px 1px theme(colors.black)',
      },
      backgroundImage: {
        overlay: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 69.66%, rgba(0, 0, 0, 0.8) 90.29%)',
        'check-secondary': "url('https://craft-baseplate.ddev.site/dist/img/icons/check.svg')",
        'check-white': "url('https://craft-baseplate.ddev.site/dist/img/icons/check-white.svg')",
      },
    },
    // Replace the default Tailwind config here
    // fontSize: {
    //   xs: ['.75rem', '1rem'], // 12px
    //   sm: ['.8rem', '1.25rem'], // 13px
    //   tiny: ['.875rem', '1.25rem'], // 14px
    //   base: ['1rem', '1.5rem'], // 16px
    //   lg: ['1.125rem', '1.75rem'], // 18px
    //   xl: ['1.3125rem', '1.75rem'], // 21px
    //   '2xl': ['1.5rem', '2rem'], // 24px
    //   '2.5xl': ['1.625rem', '2rem'], // 26px
    //   '3xl': ['1.75rem', '2rem'], // 28px
    //   '4xl': ['2rem', '2.25rem'], // 32px
    //   '4.5xl': ['2.25rem', '2.5rem'], // 36px
    //   '5xl': ['2.5rem', '3rem'], // 40px
    //   '6xl': ['3rem', '3.25rem'], // 48px
    //   '7xl': ['4rem', '4.5rem'], // 72px
    //   '8xl': ['5rem', '5.5rem'], // 80px
    // },
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
      sans: ['"univia-pro"', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      gray: colors.gray,
      primary: {
        DEFAULT: 'rgb(var(--color-primary))',
      },
      secondary: {
        DEFAULT: 'rgb(var(--color-secondary))',
      },
      error: '#FF0000',
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

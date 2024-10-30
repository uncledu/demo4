/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./src/**/*.{html,ts,js,jsx,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      fontSize:{
        'xxs': '0.625rem',
        'xxxs': '0.525rem'
      },
      width:{
        '7.5': '1.875rem'
      },
      height:{
        '7.5': '1.875rem',
        '21':'5.125rem'
      }
    },
  },
  plugins: [],
  corePlugins: {
    // FIXME: 需要h5，修复这里的配置，根据环境变量来控制
    // 小程序不需要 preflight，因为这主要是给 h5 的，如果你要同时开发小程序和 h5 端，你应该使用环境变量来控制它
    preflight: false
  }
}


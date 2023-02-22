const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.tsx',
  staticImage: true,
  latex: true,
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true
})

/** @type {import('next').NextConfig} */
module.exports = withNextra({
  reactStrictMode: true,
  experimental: {}
})

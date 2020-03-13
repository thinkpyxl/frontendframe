const postcssPresetEnv = require('postcss-preset-env');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './**/*.twig',
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

console.log(process.env.NODE_ENV)

module.exports = {
  map: true,
  plugins: [
    require('postcss-import-ext-glob'),
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    postcssPresetEnv({
      features: {
        'nesting-rules': true,
      }
    }),
    ...process.env.NODE_ENV === 'development' ? [] : [purgecss]
  ]
}
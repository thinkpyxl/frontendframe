const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './*.html',
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  map: true,
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'development' ? [purgecss] : []
  ]
}
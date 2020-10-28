const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')
const withPlugins = require('next-compose-plugins')

const nextConfig = {
	images: {
    imageSizes: [61],
	},
}

module.exports = withPlugins(
  [
    [withPWA, {
      pwa: {
        dest: 'public',
        runtimeCaching
      }
    }],
    [withCss],
    [withPurgeCss]
  ],
  nextConfig
)

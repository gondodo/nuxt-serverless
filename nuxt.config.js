const express = require('express')
const cookieParser = require('cookie-parser')
// require('dotenv').config()

module.exports = {
  srcDir: 'src',
  head: {
    title: 'Nuxt Serverless Template',
    meta: [
      { chatset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt Serverless Template' },
    ],
    link: [
      { rel: 'icon', href: '/dev/static/favicon.ico' },
    ],
  },
  extensions: ['js', 'ts'],
  serverMiddleware: [
    express.json(),
    cookieParser(),
  ],
  css: [
    { src: '~/styles/main.scss', lang: 'scss' },
  ],
  build: {
    extractCSS: true,
    extend(config) {
      const tsLoader = {
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/], transpileOnly: true },
        exclude: [/vendor/, /\.nuxt/],
      }
      config.module.rules.push({
        test: /((client|server)\.js)|(\.tsx?)$/,
        ...tsLoader,
      })
      config.resolve.extensions.push('.ts')
      config.module.rules
        .filter((rule) => rule.loader === 'vue-loader')
        .map((rule) => rule.options.loaders = { ts: tsLoader })
    },
  },
  router: {
    base: '/dev/'
  },
  render: {
    etag: false,
    // Disabled compression
    compressor: { threshold: Infinity },
  },
  modules: [
    '@nuxtjs/dotenv',
  ],
  env: {
    HOGE: process.env.HOGE,
  },
}

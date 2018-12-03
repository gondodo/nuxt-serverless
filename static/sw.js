importScripts('/dev/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/dev/_nuxt/0b8d5971822b4b344ca8.js",
    "revision": "31afb14d95dd3d08da1a302bb4de66e9"
  },
  {
    "url": "/dev/_nuxt/21b3716d58bbf550720c.js",
    "revision": "0865faf1e7b3aa516d116a2c232f45d0"
  },
  {
    "url": "/dev/_nuxt/5dbf2f5b90d25adf11f8.js",
    "revision": "416a0b78931fa8de9def70c61f94485a"
  },
  {
    "url": "/dev/_nuxt/65c7ad5d1de56fbf440c.js",
    "revision": "c39ba51e55fc4ade9fd4604287cf5677"
  },
  {
    "url": "/dev/_nuxt/71686f86ca140dc4bac8.js",
    "revision": "b238c19ff47bd3bed9389bd3acedb7f6"
  },
  {
    "url": "/dev/_nuxt/86dcd7d4d1e4ef36737e.css",
    "revision": "566ec1c88c8d4368c146b05363d56f38"
  },
  {
    "url": "/dev/_nuxt/bfab8203e048d3cd68b7.js",
    "revision": "85eb4d802ad6c958f4c59d27672f9bb9"
  },
  {
    "url": "/dev/_nuxt/e0be0e07a37a595fe222.js",
    "revision": "e2cdc04dae424ac99ee104a8abbb3b12"
  },
  {
    "url": "/dev/_nuxt/f52d5ce0e0f4d6e06aff.css",
    "revision": "622c2ad488255eb35db2a0713b832396"
  }
], {
  "cacheId": "nuxt-serverless",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/dev/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/dev/.*'), workbox.strategies.networkFirst({}), 'GET')

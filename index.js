const { loadNuxt, build } = require('nuxt')

const app = require('express')()
const isDev = false
const port = process.env.PORT || 3000


async function start() {
  // We get Nuxt instance
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

  // Render every route with Nuxt.js
  app.use(nuxt.render)

  // Build only in dev mode with hot-reloading
  if (isDev == true) {
    build(nuxt)
  }
  // Listen the server
  app.listen(port, '0.0.0.0')
  console.log('Server  listening on `'  + ':' + port  +  '`.')
}

start()
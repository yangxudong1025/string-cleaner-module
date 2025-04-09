import { defineNuxtModule, addPlugin, addImportsDir } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'string-cleaner-module',
    configKey: 'stringCleaner',
  },
  setup(_, nuxt) {
    addImportsDir(__dirname + '/runtime/composables')
    addPlugin({
      src: __dirname + '/runtime/plugin',
      mode: 'all',
    })
  }
})
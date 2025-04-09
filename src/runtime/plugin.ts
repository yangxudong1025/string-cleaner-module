import { cleanString } from './utils/string-cleaner'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      cleanString
    }
  }
})
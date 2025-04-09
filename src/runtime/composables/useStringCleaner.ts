import { cleanString } from '../utils/string-cleaner'
import { presets } from '../utils/cleaner-presets'

export function useStringCleaner() {
  return {
    clean: cleanString,
    presets,
  }
}
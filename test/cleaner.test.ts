import { describe, expect, it } from 'vitest'
import { cleanString } from '../src/core/cleanString'

describe('cleanString', () => {
  it('removes html and emoji', () => {
    const input = "<b>Hello 👋</b>"
    const output = cleanString(input, { removeHtmlTags: true, removeEmoji: true })
    expect(output).toBe("Hello")
  })
})

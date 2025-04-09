import { cleanString } from '../src/runtime/utils/string-cleaner'

test('clean emoji + html', () => {
  const input = '<p>Hello 👋 世界</p>'
  const result = cleanString(input, { removeHtmlTags: true, removeEmoji: true })
  expect(result).toBe('hello 世界')
})

export function cleanString(input: string, options: any = {}) {
  let result = input
  if (options.removeHtmlTags) {
    result = result.replace(/<[^>]*>/g, '')
  }
  if (options.removeEmoji) {
    result = result.replace(/[^\w\s]/g, '')
  }
  return result
}
export function changeImgUrl(url: string, input: number = 480): string {
  if (url) {
    return url.replace('{size}', input.toString())
  }
  return ''
}

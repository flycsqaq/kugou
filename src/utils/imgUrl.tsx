export function changeImgUrl(url: string, input: number = 480): string {
  return url.replace('{size}', input.toString())
}

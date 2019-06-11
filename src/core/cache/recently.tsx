export const getRecently = () => {
  return window.localStorage['fy-recently'] || []
}

export const saveRecently = (songs: any[] = []) => {
  window.localStorage['fy-recently'] = songs
}
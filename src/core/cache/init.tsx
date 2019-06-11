interface Init {
  listName: string
  list: {
    [name: string]: any[]
  }
}

const initData: Init = {
  listName: 'fy-recently',
  list: {
    'fy-recently': []
  }
}
export const getInit = (): Init => {
  let init = window.localStorage['fy-init']
  if (init) {
    init = JSON.parse(init)
  }
  if (!init) {
    saveInit(initData)
    init = initData
  }
  return init
}

export const saveInit = (init: Init = initData) => {
  window.localStorage['fy-init'] = JSON.stringify(init)
}

export const saveSongCache = (listName: string, list: any[] = []) => {
  const init = getInit()
  init.list[listName] = list
  saveInit(init)
}
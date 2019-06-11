export interface SongBrief {
  hash: string
  filename: string
  // remark: string
  // extname: string // 文件类型名
  filesize: number
  // mvhash: string
  cover?: string // 240 480
}

export interface SongDetail {
  hash: string
  songName: string
  singerName: string
  url: string
  imgUrl: string // 240, 480
  backup_url: string[]
}

export interface Menu {
  specialid: number
  specialname: string
  intro: string
  songs: SongBrief[]
  songcount: number
  // user_avatar: string
  imgurl: string // 240, 480
  collectcount: number
}

export interface SongRank {
  rankid: number
  intro: string
  imgurl: string // 240, 480
  rankname: string
}

export interface SingerClass {
  classid: number
  classname: string
  imgurl: string // 固定的150
}

export interface SingerBrief {
  singerid: number
  singername: string
  imgurl: string // 240, 480
}

export interface SingerDetail {
  singerid: number
  // mvcounter: number
  intro: string
  imgurl: string // 240, 480
  profile: string
  singername: string
}
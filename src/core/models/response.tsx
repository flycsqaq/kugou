import { SongBrief, Menu, SongRank, SingerClass, SingerBrief, SingerDetail, SongDetail } from "@models/data";

export interface NewSongRes {
  data: {
    data: SongBrief[]
  }
}

export interface MenuListRes {
  data: {
    data: {
      list: {
        info: Menu[],
        total: number
      },
      pagesize: number
    }
  }
}

export interface MenuSongsRes {
  data: {
    data: {
      list: {
        info: SongBrief[]
        total: number
      }
      pagesize: number
      page: number
    }
  }
}

export interface SongRankListRes {
  data: {
    data: {
      total: number
      list: SongRank[]
    }
  }
}

export interface SongRankSongsRes {
  data: {
    data: {
      info: SongRank
      songs: {
        total: number
        page: number
        pagesize: number
        list: SongBrief
      }
    }
  }
}

export interface SingerClassifyRes {
  data: {
    data: SingerClass[]
  }
}

export interface SingerListRes {
  data: {
    data: {
      classname: string
      clasid: number
      singers: {
        total: number
        list: {
          total: number
          info: SingerBrief[]
        }
        pagesize: number
        page: number
      }
    }
  }
}

export interface SingerInfoRes {
  data: {
    data: {
      info: SingerDetail
      songs: {
        total: number
        pagesize: number
        list: SongBrief
      }
    }
  }
}

export interface SongInfoRes {
  data: {
    data: SongDetail
  }
}

export interface SongLrcRes {
  data: string
}

export interface MusicSearchRes {
  data: {
    aggregation: {key: string, count: number}[]
    tab: string
    info: SongBrief[]
  }
}
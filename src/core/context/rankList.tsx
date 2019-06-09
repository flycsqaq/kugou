import { useState, Dispatch } from 'react'
import { createContainer } from "unstated-next"
import { SongRank } from '@models/data';
import { getRankList } from '@services/api';
import { SongRankListRes } from '@models/response';

export function RankList() {
  let [rankList, setRankList]: [SongRank[], Dispatch<any>] = useState([])
  let changeRankList = (menuList: SongRank[] = []) => setRankList(menuList)
  let handleGetRankList = () => getRankList().then((res: SongRankListRes) => {
    changeRankList(res.data.data.list)
  })
  return {
    rankList,
    handleGetRankList
  }
}

export const RankListContainer = createContainer(RankList)
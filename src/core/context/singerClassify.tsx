import { useState, Dispatch } from 'react'
import { createContainer } from "unstated-next"
import { SingerClass } from '@models/data';
import { getSingerClasses } from '@services/api';
import { SingerClassifyRes } from '@models/response';

export function SingerClassify() {
  let [singerClassify, setSingerClassify]: [SingerClass[], Dispatch<any>] = useState([])
  let changeSingerClassesList = (singerClassify: SingerClass[] = []) => setSingerClassify(singerClassify)
  let handleGetSingerClassify = () => getSingerClasses().then((res: SingerClassifyRes) => {
    changeSingerClassesList(res.data.data)
  })
  return {
    singerClassify,
    handleGetSingerClassify
  }
}

export const SingerClassifyContainer = createContainer(SingerClassify)
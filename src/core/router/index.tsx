import { lazy } from "react";
import { RouterType } from "@models/router";
import { baseUrl } from "../configuration";

const Home = lazy(() => import("../../containers/Home"))
const MenuList = lazy(() => import("../../containers/MenuList"))
const MenuSongs = lazy(() => import("../../containers/MenuSongs"))
const NewSongs = lazy(() => import("../../containers/NewSongs"))
const SingerDetail = lazy(() => import("../../containers/SingerDetail"))
const SingerClassify = lazy(() => import("../../containers/SingerClassify"))
const SingerList = lazy(() => import("../../containers/SingerList"))
const SongDetail = lazy(() => import("../../containers/SongDetail"))
const SongRankList = lazy(() => import("../../containers/SongRankList"))
const SongRankSongs = lazy(() => import("../../containers/SongRankSongs"))
const Collection = lazy(() => import("../../containers/Collection"))

export const rootRouter: RouterType[] = [
  {
    path: `${baseUrl}`,
    component: Home
  },
  {
    path: `${baseUrl}newsongs`,
    component: NewSongs
  },
  {
    path: `${baseUrl}menulist`,
    component: MenuList
  },
  {
    path: `${baseUrl}menu/:id`,
    component: MenuSongs
  },
  {
    path: `${baseUrl}rank/songs`,
    component: SongRankList
  },
  {
    path: `${baseUrl}rank/songs/:id`,
    component: SongRankSongs
  },
  {
    path: `${baseUrl}class/singer`,
    component: SingerClassify
  },
  {
    path: `${baseUrl}class/singer/:id`,
    component: SingerList
  },
  {
    path: `${baseUrl}singer/:id`,
    component: SingerDetail
  },
  {
    path: `${baseUrl}song/:id`,
    component: SongDetail
  },
  {
    path: `${baseUrl}collection/:id`,
    component: Collection
  }
]
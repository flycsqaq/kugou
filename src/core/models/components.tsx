import { Component } from "react";

export type Xs =  1 | 2 | 7 | 4 | 6 | 5 | 3 | 8 | 9 | 10 | 11 | 12 
export interface ViewProps {
  data: any[]
  start: number
  number: Xs
}

export interface PaginationProps {
  actions: {
    back?: () => any
    next?: () => any
    open?: () => any
    close?: () => any
  }
  canBack: boolean
  canNext: boolean
  isOpen: boolean
}

const songs = 'songs'
type songs = typeof songs
const menus = 'menus'
type menus = typeof menus
const classes = 'classes'
type classes = typeof classes
const singers = 'singers'
type singers = typeof singers
type middleType = songs | menus | classes | singers

interface Actions {
  [name: string]: () => any
}

export interface MiddlewareProps {
  data: any[]
  type: middleType
  row: number
  actions: Actions
  View: any
  Pagination: any
  isOpen?: boolean
}


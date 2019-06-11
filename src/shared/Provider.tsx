import React from 'react';
import { NewSongsContainer } from '@context/newSongs';
import { MenuListContainer } from '@context/menuList';
import { RankListContainer } from '@context/rankList';
import { SingerClassifyContainer } from '@context/singerClassify';
import { MediaQueryContainer } from '@context/mediaQuery';
import { PlayContainer } from '@context/play';
import AppRoot from '@shared/App'

interface Props {
  children?: any
}
export default (props: Props) => {
  return (
    <PlayContainer.Provider>
      <MediaQueryContainer.Provider>
        <SingerClassifyContainer.Provider>
          <RankListContainer.Provider>
            <NewSongsContainer.Provider>
              <MenuListContainer.Provider>
                <AppRoot />
              </MenuListContainer.Provider>
            </NewSongsContainer.Provider>
          </RankListContainer.Provider>
        </SingerClassifyContainer.Provider>
      </MediaQueryContainer.Provider>
    </PlayContainer.Provider>
  )
}
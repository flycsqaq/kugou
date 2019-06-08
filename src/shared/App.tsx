import React, { Suspense } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { rootRouter } from 'core/router';
import { RouterType } from '@models/router';
import { NewSongsContainer } from '@context/newSongs';
import { MenuListContainer } from '@context/menuList';
import { RankListContainer } from '@context/rankList';
import { SingerClassifyContainer } from '@context/singerClassify';
import { MediaQueryContainer } from '@context/mediaQuery';

import { AppStyle } from '@styles/shared/app'

export default () => {
  const classes = AppStyle({})
  return (
    <MediaQueryContainer.Provider>
      <SingerClassifyContainer.Provider>
        <RankListContainer.Provider>
          <NewSongsContainer.Provider>
            <MenuListContainer.Provider>
              <div className={classes.root}>
                <HashRouter>
                  <Suspense fallback={(<div>loading</div>)}>
                    <Switch>
                      {rootRouter.map((route: RouterType, index: number) => (
                        <Route exact key={index} path={route.path} component={route.component} />
                      ))}
                      <Redirect from="**" to="/"  />
                    </Switch>
                  </Suspense>
                </HashRouter>
              </div>
            </MenuListContainer.Provider>
          </NewSongsContainer.Provider>
        </RankListContainer.Provider>
      </SingerClassifyContainer.Provider>
    </MediaQueryContainer.Provider>
  )
}
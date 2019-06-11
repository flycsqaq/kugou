import React, { Suspense } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { rootRouter } from 'core/router';
import { RouterType } from '@models/router';

export default () => {
  return (
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
  )
}
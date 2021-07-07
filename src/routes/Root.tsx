import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// const Intro = lazy(() => import('components/mobile/intro/Intro'));
function Root() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path="/" render={() => <div>12</div>} exact />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Root;

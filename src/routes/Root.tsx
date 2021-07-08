import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Entrance = lazy(() => import('components/quiz/Entrance'));
const Intro = lazy(() => import('components/quiz/Intro'));
const Main = lazy(() => import('components/quiz/Main'));

function Root() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASE_NAME}>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path="/" component={Entrance} exact />
          <Route path="/intro" component={Intro} />
          <Route path="/quiz" component={Main} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Root;

import { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loading from 'components/common/Loading';

const Entrance = lazy(() => import('components/quiz/Entrance'));
const Intro = lazy(() => import('components/quiz/Intro'));
const Main = lazy(() => import('components/quiz/Main'));
const Result = lazy(() => import('components/quiz/Result'));

function Root() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASE_NAME}>
      <Suspense fallback={<Loading isLoading={true} />}>
        <Switch>
          <Route path="/" component={Entrance} exact />
          <Route path="/intro" component={Intro} />
          <Route path="/quiz" component={Main} />
          <Route path="/result" component={Result} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Root;

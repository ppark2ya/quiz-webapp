import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Entrance from 'components/quiz/Entrance';
import Intro from 'components/quiz/Intro';
import Main from 'components/quiz/Main';
import Result from 'components/quiz/Result';

function Root() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASE_NAME}>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={450} classNames="fade">
              <Switch location={location}>
                <Route path="/" component={Entrance} exact />
                <Route path="/intro" component={Intro} />
                <Route path="/quiz" component={Main} />
                <Route path="/result" component={Result} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </BrowserRouter>
  );
}

export default Root;

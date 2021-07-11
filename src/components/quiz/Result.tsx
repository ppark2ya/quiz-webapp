import { useHistory, useLocation } from 'react-router-dom';
import { Location } from 'history';
import { IQuizItem } from 'hooks/useQuiz';
import styled from 'styled-components';
import { useCallback, useEffect, useMemo } from 'react';
import Button from 'components/common/Button';
import { ReactComponent as Retry } from 'assets/retry.svg';
import { ReactComponent as Note } from 'assets/check-note.svg';
import PieChart from 'components/common/PieChart';

const Container = styled.div`
  height: 100vh;
  padding: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .title {
    font-size: 2.5rem;
    position: fixed;
    top: 4vh;
    left: 0;
    width: 100vw;
    text-align: center;
  }
  .result {
    font-size: 1.2rem;
    padding: 0.3vh 0;
  }
`;

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  margin: 1vh 0;
  svg {
    margin-right: 2vw;
  }
`;

interface IResultProps {
  progressTime: number;
  quizItems: IQuizItem[];
  quizCount: number;
}

function Result() {
  const location: Location<{ results: IResultProps }> = useLocation();
  const history = useHistory();

  const onRetryQuiz = useCallback(() => {
    if (location.state?.results) {
      history.push({
        pathname: '/quiz',
        state: {
          results: location.state.results.quizItems.map((quiz) => ({
            ...quiz,
            userAnswer: undefined,
          })),
        },
      });
    }
  }, [location.state?.results]);

  const onShowWrongNote = useCallback(() => {
    if (location.state?.results) {
      history.push({
        pathname: '/quiz',
        state: {
          results: location.state.results.quizItems,
        },
      });
    }
  }, [location.state?.results]);

  const memoizedComponent = useMemo(() => {
    if (location.state?.results) {
      const { progressTime, quizItems } = location.state.results;
      const { solved, failed } = quizItems?.reduce(
        (prev, quiz) =>
          quiz.userAnswer === quiz.correct_answer
            ? {
                ...prev,
                solved: prev.solved + 1,
              }
            : {
                ...prev,
                failed: prev.failed + 1,
              },
        {
          solved: 0,
          failed: 0,
        },
      );

      return (
        <>
          <PieChart
            style={{ height: '50%', marginTop: '-10vh' }}
            data={[
              {
                id: 'solved',
                label: 'solved',
                value: solved,
                color: 'hsl(60, 70%, 50%)',
              },
              {
                id: 'failed',
                label: 'failed',
                value: failed,
                color: 'hsl(92, 70%, 50%)',
              },
            ]}
            fill={[
              {
                match: {
                  id: 'solved',
                },
                id: 'lines',
              },
              {
                match: {
                  id: 'failed',
                },
                id: 'lines',
              },
            ]}
          />
          <div className="title">Result</div>
          <div className="result">{`Time taken to solve the quiz: ${progressTime}`}</div>
          <div className="result">{`Solved: ${solved}`}</div>
          <div className="result">{`Failed: ${failed}`}</div>
          <StyledButton onClick={onRetryQuiz}>
            <Retry fill="white" />
            Try this again
          </StyledButton>
          <StyledButton onClick={onShowWrongNote}>
            <Note fill="white" />
            Wrong Note
          </StyledButton>
        </>
      );
    } else {
      return <div>The wrong approach.</div>;
    }
  }, [location.state?.results]);

  useEffect(() => {
    if (location.state?.results === undefined) {
      history.push('/');
    }
  }, [location.state?.results]);

  return <Container>{memoizedComponent}</Container>;
}

export default Result;

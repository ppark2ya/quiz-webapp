import { IQuizItem } from 'hooks/useQuiz';
import { useCallback } from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';

const QuizContainer = styled.div`
  height: 100vh;
  padding: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    font-weight: bold;
    font-size: 1.5rem;
  }
  .difficulty {
    color: white;
    font-weight: bold;
    background: ${(props) => props.theme.color.red};
    border-radius: ${(props) => props.theme.border.radius};
    width: 25%;
    text-align: center;
    padding: 3vw;
    margin: 2vh 0;
  }
  ul {
    list-style: decimal;
    padding-inline-start: 6vw;
  }
  li {
    list-style: decimal;
    font-size: 1.3rem;
  }
`;

const QuizAnswer = styled.li<{
  correct_answer: string;
  userAnswer?: string;
  currentAnswer: string;
}>`
  color: ${(props) => {
    if (
      props.currentAnswer === props.userAnswer &&
      props.correct_answer !== props.currentAnswer
    ) {
      return props.theme.color.red;
    } else if (
      props.userAnswer &&
      props.correct_answer === props.currentAnswer
    ) {
      return `#46bd46`;
    }
  }};
`;

const NextButton = styled(Button)<{ userAnswer: string | undefined }>`
  visibility: ${(props) => (props.userAnswer ? 'visibility' : 'hidden')};
  opacity: ${(props) => (props.userAnswer ? '1' : '0')};
  transition: opacity 0.3s linear;
`;

interface IQuizItemProps {
  quizItem: IQuizItem;
  onSelectQuizItem: (id: number, selectedAnswer: string) => void;
  onNextQuiz: () => void;
  isLast: boolean;
}

function QuizItem({
  quizItem: {
    id,
    correct_answer,
    difficulty,
    question,
    allAnswers,
    userAnswer,
  },
  onSelectQuizItem,
  onNextQuiz,
  isLast,
}: IQuizItemProps) {
  const handleClick = useCallback(
    (currentAnswer: string) => {
      onSelectQuizItem(id, currentAnswer);
    },
    [id, onSelectQuizItem],
  );

  return (
    <QuizContainer>
      <div
        className="title"
        dangerouslySetInnerHTML={{ __html: `Q${id + 1}. ${question}` }}
      />
      <div className="difficulty">{difficulty}</div>
      <ul>
        {allAnswers.map((ans, idx) => (
          <QuizAnswer
            className="answer"
            key={idx}
            onClick={() => handleClick(ans)}
            correct_answer={correct_answer}
            userAnswer={userAnswer}
            currentAnswer={ans}
            dangerouslySetInnerHTML={{ __html: ans }}
          />
        ))}
      </ul>
      <NextButton onClick={onNextQuiz} userAnswer={userAnswer}>
        {isLast ? 'Result' : 'Next'}
      </NextButton>
    </QuizContainer>
  );
}

export default QuizItem;

import { IQuizItem } from 'hooks/useQuiz';
import { useState, useCallback } from 'react';
import styled from 'styled-components';

const QuizContainer = styled.div``;

const QuizAnswer = styled.div<{
  correct_answer: string;
  userAnswer?: string;
  currentAnswer: string;
}>`
  color: ${(props) => {
    if (
      props.currentAnswer === props.userAnswer &&
      props.correct_answer !== props.currentAnswer
    ) {
      return `red`;
    } else if (
      props.userAnswer &&
      props.correct_answer === props.currentAnswer
    ) {
      return `green`;
    }
  }};
`;

interface IQuizItemProps {
  quizItem: IQuizItem;
  onSelectQuizItem: (id: number, selectedAnswer: string) => void;
  onNextQuiz: () => void;
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
}: IQuizItemProps) {
  const handleClick = useCallback(
    (currentAnswer: string) => {
      onSelectQuizItem(id, currentAnswer);
    },
    [id],
  );

  return (
    <QuizContainer>
      <div
        className="title"
        dangerouslySetInnerHTML={{ __html: question }}
      ></div>
      <div className="">{difficulty}</div>
      {allAnswers.map((ans, idx) => (
        <QuizAnswer
          className="answer"
          key={idx}
          onClick={() => handleClick(ans)}
          correct_answer={correct_answer}
          userAnswer={userAnswer}
          currentAnswer={ans}
        >
          {ans}
        </QuizAnswer>
      ))}
      {userAnswer && <button onClick={onNextQuiz}>Next</button>}
    </QuizContainer>
  );
}

export default QuizItem;

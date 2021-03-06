import { useState, useCallback, useEffect } from 'react';
import useInterval from './useInterval';
import { IResults } from 'api/types';
import { useHistory } from 'react-router';

export interface IQuizItem extends IResults {
  /**
   * 배열인덱스를 키값으로 설정
   */
  id: number;
  /**
   * 랜덤으로 정렬한 전체 퀴즈 문항들
   */
  allAnswers: string[];
  /**
   * 사용자가 선택한 답안
   */
  userAnswer?: string;
}

function useQuiz(results?: IResults[]) {
  const [progressTime, setProgressTime] = useState(0);
  const [quizItems, setQuizItems] = useState<IQuizItem[]>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizCount, setQuizCount] = useState(0);
  const history = useHistory();

  useEffect(() => {
    // 문항 순서 랜덤 지정
    const newQuizItems = results?.reduce(
      (newQuizItems: IQuizItem[], quiz, idx) => {
        const currentAnswers = [quiz.correct_answer, ...quiz.incorrect_answers];
        const allAnswers = [];
        for (let i = 0; i < 4; i++) {
          const rand = Math.floor(Math.random() * 2 ** 32);
          const selectIndex = rand % currentAnswers.length;
          allAnswers[i] = currentAnswers[selectIndex];
          currentAnswers.splice(selectIndex, 1);
        }
        newQuizItems[idx] = {
          ...quiz,
          id: idx,
          allAnswers,
        };
        return newQuizItems;
      },
      [],
    );
    setQuizItems(newQuizItems);
    setQuizCount(newQuizItems?.length ?? 0);
  }, [results]);

  useInterval(() => {
    setProgressTime((prev) => prev + 1);
  }, 1000);

  const onSelectQuizItem = useCallback((id: number, selectedAnswer: string) => {
    setQuizItems((prevState) =>
      prevState?.reduce((newQuizItems: IQuizItem[], quiz, idx) => {
        if (id === idx) {
          newQuizItems[idx] = {
            ...quiz,
            userAnswer: selectedAnswer,
          };
        } else {
          newQuizItems[idx] = {
            ...quiz,
          };
        }
        return newQuizItems;
      }, []),
    );
  }, []);

  const goResultPage = useCallback(() => {
    history.push({
      pathname: '/result',
      state: {
        results: {
          progressTime,
          quizItems,
        },
      },
    });
  }, [progressTime, quizItems]);

  const onNextQuiz = useCallback(() => {
    if (currentIndex + 1 !== quizCount) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      goResultPage();
    }
  }, [currentIndex, quizCount, goResultPage]);

  return {
    progressTime,
    quizItems,
    currentIndex,
    onSelectQuizItem,
    onNextQuiz,
  };
}

export default useQuiz;

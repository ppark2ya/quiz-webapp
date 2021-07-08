/**
 * 요구사항정리
 * 1. 사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다.
 * 2. 사용자는 답안을 선택하면 다음 문항을 볼 수 있다
 *  - 답안 선택 후 다음 문항 버튼을 볼 수 있다.
 *  - 답안이 맞았는지 틀렸는지 바로 알 수 있다.
 *  - 다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다.
 * 3. 결과 정보
 *  - 퀴즈를 마칠 때까지 소요된 시간
 *  - 정답 개수
 *  - 오답 수
 *  - 정오답에 대한 비율을 차트로 표시(추가 선택)
 *  - 다시 풀기(추가 선택)
 *  - 오답 노트(추가 선택)
 */
import { useLocation } from 'react-router-dom';
import { Location } from 'history';
import { IResults } from 'api/types';
import { useState, useEffect } from 'react';

/**
 * 퀴즈 응답 데이터 예시
 * {
      "category": "General Knowledge",
      "correct_answer": "Ed Sheeran - I See Fire",
      "difficulty": "hard",
      "incorrect_answers": [
        "Marvin Gaye - Sexual Healing",
        "Coldplay - Midnight",
        "a-ha - Take On Me"
      ]
      "question": "Electronic music producer Kygo&#039;s popularity skyrocketed after a certain remix. Which song did he remix?",
      "type": "multiple",
  }
 */
interface IQuizItem extends IResults {
  /**
   * 랜덤으로 정렬한 전체 퀴즈 문항들
   */
  allAnswers: string[];
  /**
   * 사용자가 선택한 답안
   */
  userAnswer?: string;
}

function Main() {
  const location: Location<{ results: IResults[] }> = useLocation();
  const { results } = location.state;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizItems, setQuizItems] = useState<IQuizItem[]>();

  useEffect(() => {
    // 문항 순서 랜덤 지정
    const newQuizItems = results.reduce(
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
          allAnswers,
        };
        return newQuizItems;
      },
      [],
    );
    console.log('newQuizItems: ', newQuizItems);
    setQuizItems(newQuizItems);
  }, [results]);

  return <div></div>;
}

export default Main;

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
import useQuiz from 'hooks/useQuiz';
import QuizItem from 'components/quiz/QuizItem';
import { isEmpty } from 'lodash';

function Main() {
  const location: Location<{ results: IResults[] }> = useLocation();
  const { quizItems, currentIndex, onSelectQuizItem, onNextQuiz } = useQuiz(
    location.state?.results,
  );

  return (
    <div>
      {!isEmpty(quizItems) && (
        <QuizItem
          quizItem={quizItems!![currentIndex]}
          onSelectQuizItem={onSelectQuizItem}
          onNextQuiz={onNextQuiz}
          isLast={quizItems!!.length === currentIndex + 1}
        />
      )}
    </div>
  );
}

export default Main;

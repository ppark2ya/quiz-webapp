import { renderHook, act } from '@testing-library/react-hooks';
import * as api from 'api/quiz';
import { ApiResponse } from 'api/types';
import useQuiz from './useQuiz';

const mockData: ApiResponse = {
  response_code: 0,
  results: [
    {
      category: 'General Knowledge',
      correct_answer: 'Ed Sheeran - I See Fire',
      difficulty: 'hard',
      incorrect_answers: [
        'Marvin Gaye - Sexual Healing',
        'Coldplay - Midnight',
        'a-ha - Take On Me',
      ],
      question:
        'Electronic music producer Kygo&#039;s popularity skyrocketed after a certain remix. Which song did he remix?',
      type: 'multiple',
    },
    {
      category: 'programming Knowledge',
      correct_answer: 'C',
      difficulty: 'easy',
      incorrect_answers: ['python', 'java', 'ruby'],
      question: 'Which of the following languages ​​is the oldest?',
      type: 'multiple',
    },
  ],
};

describe('Testing useQuiz hook', () => {
  beforeEach(() => {
    jest
      .spyOn(api, 'getOpenApiTest')
      .mockImplementation(() => Promise.resolve(mockData));
  });

  it('returns quiz items correctly', () => {
    const { result } = renderHook(() => useQuiz(mockData.results));
    console.log(result.current.quizItems);

    act(() => {
      result.current.onSelectQuizItem(0, 'test answer');
      result.current.onSelectQuizItem(1, 'C');
      result.current.onNextQuiz();
    });

    expect(result.current.quizItems!![0].userAnswer).toBe('test answer');
    expect(result.current.quizItems!![1].userAnswer).toBe('C');
    expect(result.current.currentIndex).toBe(1);
  });
});

export type Difficulty = 'easy' | 'medium' | 'hard';
export interface IParams {
  amount: number;
  category?: number; // 9 ~ 32
  difficulty?: Difficulty;
}
/**
 * Code 0: Success Returned results successfully.
 * Code 1: No Results Could not return results. The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)
 * Code 2: Invalid Parameter Contains an invalid parameter. Arguements passed in aren't valid. (Ex. Amount = Five)
 * Code 3: Token Not Found Session Token does not exist.
 * Code 4: Token Empty Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.
 */
type responseCodeType = 0 | 1 | 2 | 3 | 4;

export interface ApiResponse {
  response_code: responseCodeType;
  results?: IResults[];
}

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
export interface IResults {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

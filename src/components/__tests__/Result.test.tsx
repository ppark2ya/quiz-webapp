import { render, screen } from '@testing-library/react';
import Result from '../quiz/Result';
import { ThemeProvider } from 'styled-components';
import { theme } from 'style/theme';
import 'jest-styled-components';
import { useLocation } from 'react-router-dom';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/result',
    state: {
      results: {
        progressTime: 19,
        quizItems: [
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
            allAnswers: [
              'Ed Sheeran - I See Fire',
              'Marvin Gaye - Sexual Healing',
              'Coldplay - Midnight',
              'a-ha - Take On Me',
            ],
            id: 0,
            useAnswer: 'Marvin Gaye - Sexual Healing',
          },
          {
            category: 'programming Knowledge',
            correct_answer: 'C',
            difficulty: 'easy',
            incorrect_answers: ['python', 'java', 'ruby'],
            question: 'Which of the following languages ​​is the oldest?',
            type: 'multiple',
            allAnswers: ['C', 'python', 'java', 'ruby'],
            id: 1,
            useAnswer: 'C',
          },
        ],
      },
    },
  }),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

test('<Result/>', () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <Result />
    </ThemeProvider>,
  );
  const location = useLocation<{ results: any }>();
  console.log(location.state);
  expect(container.firstChild).toMatchSnapshot();

  const timeElement = screen.getByText(/0min 19secs/);
  expect(timeElement).toBeInTheDocument();

  const solvedElement = screen.getByText(/1/);
  expect(solvedElement).toBeInTheDocument();

  const failedElement = screen.getByText(/1/);
  expect(failedElement).toBeInTheDocument();
});

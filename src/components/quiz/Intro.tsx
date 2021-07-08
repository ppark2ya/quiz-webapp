import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import SelectBox from 'components/common/SelectBox';
import Input from 'components/common/Input';
import { getOpenApi } from 'api/quiz';
import { Difficulty, IParams } from 'api/types';
import { useHistory } from 'react-router-dom';

interface IFormInputs {
  amount: number;
  category: string;
  difficulty: string;
}

function Intro() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();
  const history = useHistory();
  const onSubmit = useCallback(async (formData: IFormInputs) => {
    try {
      const { amount, category, difficulty } = formData;
      const params: IParams = {
        amount,
        category: category === 'any' ? undefined : Number(category),
        difficulty:
          difficulty === 'any' ? undefined : (difficulty as Difficulty),
      };
      const { data } = await getOpenApi(params);
      console.log('resp: ', data);

      if (data.response_code === 0) {
        history.push({
          pathname: 'quiz',
          state: {
            results: data.results!!,
          },
        });
      } else {
        window.alert('퀴즈를 생성하는데 실패했습니다. 다시 시도해주세요.');
      }
    } catch (e) {
      window.alert('네트워크 상태를 확인해주세요!');
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="number"
        label="amount"
        register={register}
        required
        min={1}
        max={50}
      />
      {errors.amount?.type === 'min' && (
        <p>Your input required to be more than 0</p>
      )}
      {errors.amount?.type === 'max' && (
        <p>Your input required to be less than 50</p>
      )}
      {errors.amount?.type === 'required' && <p>Your input required</p>}
      <div style={{ marginBottom: '20px' }}></div>
      <SelectBox
        label="category"
        register={register}
        required
        options={[
          { value: 'any', label: 'Any Category' },
          { value: 9, label: 'General Knowledge' },
          { value: 10, label: 'Entertainment: Books' },
          { value: 11, label: 'Entertainment: Film' },
          { value: 12, label: 'Entertainment: Music' },
          { value: 13, label: 'Entertainment: Musicals &amp; Theatres' },
          { value: 14, label: 'Entertainment: Television' },
          { value: 15, label: 'Entertainment: Video Games' },
          { value: 16, label: 'Entertainment: Board Games' },
          { value: 17, label: 'Science &amp; Nature' },
          { value: 18, label: 'Science: Computers' },
          { value: 19, label: 'Science: Mathematics' },
          { value: 20, label: 'Mythology' },
          { value: 21, label: 'Sports' },
          { value: 22, label: 'Geography' },
          { value: 23, label: 'History' },
          { value: 24, label: 'Politics' },
          { value: 25, label: 'Art' },
          { value: 26, label: 'Celebrities' },
          { value: 27, label: 'Animals' },
          { value: 28, label: 'Vehicles' },
          { value: 29, label: 'Entertainment: Comics' },
          { value: 30, label: 'Science: Gadgets' },
          { value: 31, label: 'Entertainment: Japanese Anime &amp; Manga' },
          { value: 32, label: 'Entertainment: Cartoon &amp; Animations' },
        ]}
      />
      <SelectBox
        label="difficulty"
        register={register}
        required
        options={[
          { value: 'any', label: 'Any Difficulty' },
          { value: 'easy', label: 'easy' },
          { value: 'medium', label: 'medium' },
          { value: 'hard', label: 'hard' },
        ]}
      />
      <input type="submit" value="submit" />
    </form>
  );
}

export default Intro;

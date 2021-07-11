import { memo, CSSProperties } from 'react';
import styled from 'styled-components';
import { Path, UseFormRegister } from 'react-hook-form';

const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  padding: 1vh 0;
  label {
    margin-right: 2vw;
    width: 25%;
    font-weight: bold;
    font-size: 1.2rem;
  }
  input {
    width: 60%;
    border: 1px solid ${(props) => props.theme.color.backGray};
    border-radius: ${(props) => props.theme.border.radius};
    padding: 3vw 5vw;
    font-size: 1.2rem;
  }
`;

interface IInputProps<T = any> {
  label: Path<T>;
  register: UseFormRegister<T>;
  required?: boolean;
  min?: number;
  max?: number;
  type?: string;
  style?: CSSProperties;
  className?: string;
}

function Input({
  label,
  register,
  required,
  min,
  max,
  type = 'text',
  style,
  className,
}: IInputProps) {
  return (
    <Container className={className} style={style}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        {...register(label, { required, min, max })}
        placeholder="Input number"
      />
    </Container>
  );
}

export default memo(Input);

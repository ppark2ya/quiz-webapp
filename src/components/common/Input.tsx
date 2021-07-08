import { memo, CSSProperties } from 'react';
import styled from 'styled-components';
import { Path, UseFormRegister } from 'react-hook-form';

interface IInputProps<T = any> {
  label: Path<T>;
  register: UseFormRegister<T>;
  required?: boolean;
  min?: number;
  max?: number;
  type?: string;
  style?: CSSProperties;
}

function Input({
  label,
  register,
  required,
  min,
  max,
  type = 'text',
  style,
}: IInputProps) {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        {...register(label, { required, min, max })}
        style={style}
      />
    </>
  );
}

export default memo(Input);

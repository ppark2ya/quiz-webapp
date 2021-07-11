import { memo, CSSProperties } from 'react';
import styled from 'styled-components';
import { Path, UseFormRegister } from 'react-hook-form';

const imagePath = require('assets/mb_ic_select_arrow.svg').default;

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
  select {
    width: 60%;
    background-color: white;
    border: 1px solid ${(props) => props.theme.color.backGray};
    border-radius: ${(props) => props.theme.border.radius};
    background: url(${imagePath}) no-repeat 90% 50%;
    background-size: 3.5vw;
    padding: 3vw 10vw 3vw 5vw;
    color: ${(props) => props.theme.color.red};
    font-weight: bold;
    font-size: 1.2rem;
    margin-right: 2vw;
  }
`;

interface ISelectBoxProps<T = any> {
  label: Path<T>;
  register: UseFormRegister<T>;
  required: boolean;
  options: { value: string | number; label: string }[];
  style?: CSSProperties;
  className?: string;
}

function SelectBox({
  label,
  register,
  required,
  options,
  style,
  className,
}: ISelectBoxProps) {
  const optionList = options.map((o) => (
    <option key={o.value} value={o.value}>
      {o.label}
    </option>
  ));

  return (
    <Container className={className} style={style}>
      <label htmlFor={label}>{label}</label>
      <select {...register(label, { required })}>{optionList}</select>
    </Container>
  );
}

export default memo(SelectBox);

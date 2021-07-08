import { memo, CSSProperties } from 'react';
import styled from 'styled-components';
import { Path, UseFormRegister } from 'react-hook-form';

const StyledSelect = styled.select`
  background-color: white;
  border: 1px solid ${(props) => props.theme.color.backGray};
  border-radius: ${(props) => props.theme.border.radius};
  background: url(/src/assets/mb_ic_select_arrow.svg) no-repeat 85% 50%; /* 화살표 모양의 이미지 */
  background-size: 3.5vw;
  padding: 3vw 10vw 3vw 3vw;
  color: ${(props) => props.theme.color.red};
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 2vw;
`;

interface ISelectBoxProps<T = any> {
  label: Path<T>;
  register: UseFormRegister<T>;
  required: boolean;
  options: { value: string | number; label: string }[];
  style?: CSSProperties;
}

function SelectBox({
  label,
  register,
  required,
  options,
  style,
}: ISelectBoxProps) {
  const optionList = options.map((o) => (
    <option key={o.value} value={o.value}>
      {o.label}
    </option>
  ));

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <StyledSelect style={style} {...register(label, { required })}>
        {optionList}
      </StyledSelect>
    </>
  );
}

export default memo(SelectBox);

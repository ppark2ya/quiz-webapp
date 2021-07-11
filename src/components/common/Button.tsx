import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: ${(props) => props.theme.border.radius};
  background-color: ${(props) => props.theme.color.red};
  color: white;
  font-weight: bold;
  padding: 15px 15vw;
  font-size: 1.2rem;
`;

interface IButtonProps {
  children?: React.ReactNode;
  onClick?: (e?: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

function Button(props: IButtonProps) {
  return <StyledButton type="submit" {...props} />;
}

export default Button;

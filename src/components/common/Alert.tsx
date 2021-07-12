import Portal from './Portal';
import styled from 'styled-components';
import { ReactNode } from 'react';

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  .alert-container {
    background-color: white;
    border-radius: ${(props) => props.theme.border.radius};

    & .alert-header {
      height: 40px;
      background-color: ${(props) => props.theme.color.red};
      border-radius: ${(props) => props.theme.border.radius}
        ${(props) => props.theme.border.radius} 0px 0px;
      text-align: right;

      span {
        color: white;
        font-weight: bold;
        display: inline-block;
        padding: 3vw;
        font-size: 1.2rem;
      }
    }

    & .alert-content {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70vw;
      height: 120px;
      text-align: center;
    }
  }
`;

interface IAlertProps {
  id: string;
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

function Alert({ id, isOpen, children, onClose }: IAlertProps) {
  return isOpen ? (
    <Portal id={id}>
      <Background>
        <div className="alert-container">
          <div className="alert-header">
            <span onClick={onClose}>X</span>
          </div>
          <div className="alert-content">{children}</div>
        </div>
      </Background>
    </Portal>
  ) : (
    <></>
  );
}

export default Alert;

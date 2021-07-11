import { useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Button from 'components/common/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  div {
    font-size: 2rem;
    &.highlight {
      padding: 3vw;
      color: ${(props) => props.theme.color.red};
      font-size: 2.4rem;
      text-align: center;
    }
  }
`;

function Entrance() {
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push('/intro');
  }, []);

  return (
    <Container>
      <div>On today's quiz</div>
      <div className="highlight">Challenge yourself!</div>
      <Button onClick={handleClick}>Take a Quiz</Button>
    </Container>
  );
}

export default Entrance;

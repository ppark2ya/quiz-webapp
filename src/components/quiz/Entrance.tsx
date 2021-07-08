import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  background-color: #cecece;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function Entrance() {
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push('/intro');
  }, []);

  return (
    <Container>
      <button onClick={handleClick}>퀴즈풀기</button>
    </Container>
  );
}

export default Entrance;

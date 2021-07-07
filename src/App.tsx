import { useEffect } from 'react';
import { getOpenApi } from 'api/quiz';
import { isMobile } from 'react-device-detect';
import Root from 'routes/Root';

function App() {
  useEffect(() => {
    async function asyncGetOpenApi() {
      const { data } = await getOpenApi({
        amount: 10,
        difficulty: 'hard',
      });
      console.log(data);
    }
    asyncGetOpenApi();
  }, []);

  return (
    <div>{isMobile ? <Root /> : <div>지원하지 않는 장비입니다.</div>}</div>
  );
}

export default App;

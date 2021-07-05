import { useEffect } from 'react';
import { getOpenApi } from 'api/quiz';

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
  return <div className="App">Hello, Create-React-App</div>;
}

export default App;

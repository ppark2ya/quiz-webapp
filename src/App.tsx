import { isMobile } from 'react-device-detect';
import Root from 'routes/Root';

function App() {
  return <>{isMobile ? <Root /> : <div>지원하지 않는 장비입니다.</div>}</>;
}

export default App;

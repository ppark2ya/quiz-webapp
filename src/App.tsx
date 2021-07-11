import apiClient from 'api/apiClient';
import useComponentWillMount from 'hooks/useComponentWillMount';
import { useMemo, useState } from 'react';
import { isMobile } from 'react-device-detect';
import Root from 'routes/Root';
import Loading from 'components/common/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useComponentWillMount(() => {
    apiClient.interceptors.request.use(
      function (config) {
        setIsLoading(true);
        return config;
      },
      function (error) {
        setIsLoading(false);
        return Promise.reject(error);
      },
    );

    apiClient.interceptors.response.use(
      function (response) {
        setIsLoading(false);
        return response;
      },
      function (error) {
        setIsLoading(false);
        return Promise.reject(error);
      },
    );
  });

  const MountedComponent = useMemo(
    () => (isMobile ? <Root /> : <div>지원하지 않는 장비입니다.</div>),
    [isMobile],
  );

  return (
    <>
      <Loading isLoading={isLoading} />
      {MountedComponent}
    </>
  );
}

export default App;

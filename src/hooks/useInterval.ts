import { useRef, useEffect } from 'react';

function useInterval<T = any>(callback: T, delay: number) {
  const savedCallback: React.MutableRefObject<T | null> = useRef<T>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      (savedCallback as any).current();
    }
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default useInterval;

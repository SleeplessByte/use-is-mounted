import { useRef, useEffect } from 'react';

/**
 * Returns a ref that contains a value that is true when the component is
 * mounted and false when it's no longer mounted.
 */
export function useIsMounted() {
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, [isMountedRef]);

  return isMountedRef;
}

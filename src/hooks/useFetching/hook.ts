import { useState } from 'react';

export const useFetching = (cb: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async (...args: any[]) => {
    try {
      setIsLoading(true);
      await cb(args);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};

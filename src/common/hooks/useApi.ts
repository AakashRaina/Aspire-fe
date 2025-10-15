import { useState, useEffect } from "react";

interface UseApiReturn<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

export function useApi<T>(apiFunction: () => Promise<T>): UseApiReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await apiFunction();
        setData(result);
      } catch (err) {
        const error =
          err instanceof Error ? err : new Error("An unknown error occurred");
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [apiFunction]);

  return {
    data,
    isLoading,
    error,
  };
}

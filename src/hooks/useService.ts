import { useEffect, useState } from "react";
import { Result } from "../sevices/serviceFetcher";

type FetcherFn<T> = () => Promise<Result<T>>;

export function useService<T>(fetcherFunction: FetcherFn<T>): {
  result: Result<T> | null;
  error: Error | null;
  isLoading: boolean;
} {
  const [result, setResult] = useState<Result<T> | null>(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetcherFunction()
      .then((data) => {
        setResult(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [fetcherFunction]);

  return { result, error, isLoading };
}

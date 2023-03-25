import axios from 'axios';
import { useEffect, useState } from 'react';

export function useRequest<RESPONSE>(url: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<RESPONSE | undefined>(undefined);
  const [error, setError] = useState<unknown>(undefined);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(url)
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return { isLoading, response, error };
}

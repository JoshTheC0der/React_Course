// this entire file is a hook - a javascript file that is used as a functional component
// helps you keep track of things (like data) that CHANGE over time
// to be used to manipulate life cycles (mounting / unmounting / ) and states (current values of the program)
// this is a generic hook - so as to not have duplicate code

import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

// define the shape of how the data fetched will be handled

interface FetchResponse<T> {
  count: number;
  results: T[];
}
// you specify the TYPE of parameter after the const ... = (equal sign)
// insdie the bracket you specify the input (as well as the inputs type)
const useData = <T>(endpoint: string) => {
  // genres represents the current value of the state
  // setGenres is the function you can use to update that value
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })

      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;

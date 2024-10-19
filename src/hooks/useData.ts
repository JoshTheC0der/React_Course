// this entire file is a hook - a javascript file that is used as a functional component
// helps you keep track of things (like data) that CHANGE over time
// to be used to manipulate life cycles (mounting / unmounting / ) and states (current values of the program)
// this is a generic hook - so as to not have duplicate code

import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';

// define the shape of how the data fetched will be handled

interface FetchResponse<T> {
  count: number;
  results: T[];
}
// you specify the TYPE of parameter after the const ... = (equal sign)
// insdie the bracket you specify the input (as well as the inputs type)

// add '?' after an input variable ('requestConfig?') to make it OPTIONAL

// deps - dependancies that tell this function to fetch data based on our specified parameters
// and to re-run based on if one of the dependancies change
// e.g. if a genre has been selected, fetch data (which will then be displayed) on the games that fall
// under that category of genre
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  // genres represents the current value of the state
  // setGenres is the function you can use to update that value

  // 5. to then accept the query parameter of 'genres' we had to open up the useData hook and make it more
  // flexible . We also added an array of dependencies which means that if any of the dependencies changes
  // our effects will re-run and re-fetch any of the data from the servers
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
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
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;

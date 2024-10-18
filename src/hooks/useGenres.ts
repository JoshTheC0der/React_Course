// this entire file is a hook - a javascript file that is used as a functional component
// helps you keep track of things (like data) that CHANGE over time
// to be used to manipulate life cycles (mounting / unmounting / ) and states (current values of the program)

import useData from './useData';

// define the shape of how the data fetched will be handled
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useData<Genre>('/genres');

export default useGenres;

import useData from './useData';
import { Genre } from './useGenres';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

// 'useGame' name of fxn
// () is the input and : 'Genre' ... is the type of the input
// what is returned calls on another function called 'useData'

// 4. the 'useGames' hook passes the 'genre'  as a query string parameter to the 'useData' hook
const useGames = (selectedGenre: Genre | null) =>
  useData<Game>('/games', { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;

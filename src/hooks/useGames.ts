import { GameQuery } from '../App';
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

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
      },
    },

    [gameQuery]
  );

// the code below was later re-factored as seen above BUT the notes are still helpful so I dont want to
// delete it
// // 'useGame' name of fxn
// // () is the input and : 'Genre' ... is the type of the input
// // what is returned calls on another function called 'useData'

// // 4. the 'useGames' hook passes the 'genre'  as a query string parameter to the 'useData' hook
// const useGames = (
//   selectedPlatform: Platform | null,
//   selectedGenre: Genre | null
// ) =>
//   // we are calling a function 'useData' passing it the 'Game' interface that fetches data from the API
//   // it specified the type of data that this function will work with '<Game>'
//   useData<Game>(
//     // here is the endpoint of the url from which we want to fetch data
//     '/games',

//     // request configuration '{ params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } }'
//     // -  this is an object that specifies parameters (filters) for the API request

//     // 'genres: selectedGenre?.id' - this means the data will be filtered by the genre by sending the id
//     // of the selected genre (if it is selected - '?' ) to the API

//     // 'platforms: selectedPlatform?.id' - this means the data will be filtered by platform by sending the id
//     // of the selected platform (if it is select '?') to the API
//     { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },

//     // below is a dependency so when it changes, our effect re-fetches the data
//     // this tells the app when to re-fetch data
//     // if selectedGenre or selectedPlatform change then the function will re-fetch the data from the API
//     // i.e. if you click on it (genrelist or platformselector) it will change and thus the API will
//     // be called upon as stated above
//     [selectedGenre?.id, selectedPlatform?.id]
//   );

export default useGames;

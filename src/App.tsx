import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}
function App() {
  // this below handles the 'state' of when you select a genre - it's initially zero hence (null) in brackets
  const [gameQuery, setSelectedGameQuery] = useState<GameQuery>(
    {} as GameQuery
  );

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          {/* 2. this is where we pass the selected genre to the app component
          which causes it to re render - in the next render the selected genre is passed to the game grid */}
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) =>
              // what the '{ ...gameQuery, genre }' does is spread the existing game query '...' into a new
              // object '{}', whilst the ',genre' as a second argument either overwrites (if it already exists)
              // or adds it (if the gameQuery didn't contain it) thereby resulting in this new object containing
              // the updated/new 'genre' property which we then set as the 'gameQuery' using the useState
              // defined above
              setSelectedGameQuery({ ...gameQuery, genre })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) =>
            setSelectedGameQuery({ ...gameQuery, platform })
          }
        />
        {/* 2. this is where the selected genre is passed to the 'GameGrid' */}
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;

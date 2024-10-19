import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

interface Props {
  // selectedGenre is the name of the property that is set as a property of 'Props' of type Genre or null
  selectedGenre: Genre | null;
}
const GameGrid = ({ selectedGenre }: Props) => {
  // isLoading is a bool designed by Chakra to add animation/functionality to the loading elements
  // switch it on (true) whilst loading but off once done (false)

  // 3. we now pass the selected genre to the 'useGames' hook
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding="10px"
      >
        {/* inner .map('skeleton') is arbitrary and could be any string e.g. .map(beeswax)*/}
        {/* it represents each element inside the skeletons array */}
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

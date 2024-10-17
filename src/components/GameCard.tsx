import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

// Props is properties
interface Props {
  game: Game;
}

// '{game}: Props' is destructuring the 'game' property that we've defined as 'Game' above from the 'Props'
// interface and saying that
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;

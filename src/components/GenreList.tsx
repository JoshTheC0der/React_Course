import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  // onSelect... is a function which is then passed as a 'Prop' which is the property
  // genre is the name of the input and 'Genre' is the type (specified in the Genre interface)
  // it returns void but it can log the selected genre or update the state

  // 1. this was to notify the parent of 'GenreList' that a component has been selected
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

// 1. this is where you select a genre
// above you define the function for how to do so - it will be sent to the parent container to then
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  // if error return nothing otherwise in conjunction with all the other error messages
  // it will become confusing
  if (error) return null;

  // check if the genre list is loading - return a spinner if it is
  if (isLoading) return <Spinner></Spinner>;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={'5px'}>
          <HStack>
            <Image
              boxSize={'32px'}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />

            {/* when you console.log genre open Chrome Dev and 'Console' to see the result
            the api automatically links genres to games using unique ID's your job is to only 
            display games that are from the genre clicked */}
            <Button
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant={'link'}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  // works like an if statement - checks whether the score is greater than 75 and if so '?' it sets the color
  // to green , doing the same for above 60 and finally setting any other color to red

  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red';
  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;

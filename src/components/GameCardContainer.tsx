import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

// the width to the overflow were in the GameCard and GameCardSkeleton components - this is more modularised
// and better since if we update this it will automatically change both of those components
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow={'hidden'}>
      {/* inside the box you need to add children for them to render */}
      {children}
    </Box>
  );
};

export default GameCardContainer;

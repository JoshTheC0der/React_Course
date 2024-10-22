import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  return (
    // need to wrap the 'InputLeftElement' otherwise it will be 'left' to what frame of reference?
    // hence the 'InputGroup' as a parent container and wrapper around the two
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant={'filled'}
      />
    </InputGroup>
  );
};

export default SearchInput;

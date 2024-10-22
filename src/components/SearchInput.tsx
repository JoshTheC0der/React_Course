import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  // create an element 'ref' that makes use of the 'useRef' hook to make a reference
  // to a value that persists across renders
  //  with a type of 'HTMLInputElement' - to tell TypeScript what value to point to
  // and an initial value of 'null'
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        // default tends to be to reload the page and 'event.preventDefault()' prevents that
        event.preventDefault();
        // if truthy then log the current value
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      {/* // need to wrap the 'InputLeftElement' otherwise it will be 'left' to what frame of reference?
        // hence the 'InputGroup' as a parent container and wrapper around the two */}
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant={'filled'}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

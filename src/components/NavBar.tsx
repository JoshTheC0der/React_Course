import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

// If unchanged - this is a direct copy of 'SearchInput' props because 'SearchInput' is nested inside
// the navbar - to access it it will be passed from the App component down to this Navbar down to
// the 'SearchInput'
// this isnt ideal but we are doing it this way for now
interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

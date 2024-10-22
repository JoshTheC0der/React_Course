import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}
const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
  // a great way to link info is to place it into an object to then be called
  // for example (below) you can store the value you want and have it linked to the label you want
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating ', label: 'Average rating' },
  ];

  // find the current sort order using '.find' where the '.value' is equal to the sortOrder since if you look
  // below the sortOrder that was passed to App (and then back) was the order.value
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

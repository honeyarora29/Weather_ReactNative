import * as React from 'react';
import {View, Text} from 'react-native';
import {Searchbar} from 'react-native-paper';

function SearchScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Enter the name of the city"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
}

export default SearchScreen;

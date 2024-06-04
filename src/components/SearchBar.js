import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => setQuery(e.target.value);

  const handleSearch = () => onSearch(query);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
      <Box display="flex" justifyContent="center" mb={4}>
        <TextField
            label="Find your recipie"
            variant="outlined"
            aria-label="Find your recipie"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
        />
        <Button variant="contained" color="secondary" onClick={handleSearch}>
          Search
        </Button>
      </Box>
  );
};

export default SearchBar;

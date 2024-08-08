import React, { useState } from 'react';

const SearchBarComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search tools..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBarComponent;

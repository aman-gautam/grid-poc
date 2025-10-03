import React, { useState } from 'react';

interface SearchBarProps {
  selectedRetailer: string;
  onRetailerSelect: (retailer: string) => void;
}

const retailers = ['Walmart', 'Kroger', 'Albertsons', 'Target', 'Walgreens'];

const SearchBar: React.FC<SearchBarProps> = ({ selectedRetailer, onRetailerSelect }) => {
  const [searchTerm, setSearchTerm] = useState(selectedRetailer);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredRetailers = retailers.filter(retailer =>
    retailer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (retailer: string) => {
    setSearchTerm(retailer);
    onRetailerSelect(retailer);
    setShowSuggestions(false);
  };

  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200);
  };

  return (
    <div className="search-container" style={{ position: 'relative' }}>
      <input
        type="text"
        className="search-input"
        placeholder="Search for a retailer..."
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      
      {showSuggestions && searchTerm && filteredRetailers.length > 0 && (
        <div className="autocomplete-suggestions">
          {filteredRetailers.map(retailer => (
            <div
              key={retailer}
              className="autocomplete-item"
              onClick={() => handleSuggestionClick(retailer)}
            >
              {retailer}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
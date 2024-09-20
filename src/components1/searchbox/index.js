import React from "react";
import SearchInput from "./searchInput";

import "./index.css";

const SearchBox = ({ onSearch }) => {
  return (
    <div className="search-box">
      <SearchInput onChange={onSearch} />
    </div>
  );
}

export default SearchBox;
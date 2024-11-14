import React from "react";

import { useFiltersContext } from "../../context/filtersCtx";

const SearchInput = () => {
  const { filters, setFilters } = useFiltersContext();
  return (
    <input onChange={(e) => setTimeout(() => setFilters({...filters, search: e.target.value}), 2000)} type="text" placeholder="Busca Pokimons"/>
  );
};

export default SearchInput;
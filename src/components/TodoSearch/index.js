import React, { useContext } from 'react';
import { TodoContext } from "../../TodoContext/index";

import './TodoSearch.css'

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext)

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Filtro de Busqueda"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
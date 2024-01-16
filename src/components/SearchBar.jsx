// import { useRef,useState,useReducer } from "react";
import Chip from "./Chip";
import Dropdown from "./Dropdown";
const SearchBar = () => {
  return (
    <>
      <div className="search-bar-container bg-white rounded-full  min-w-max flex mb-0 pb-0">
        <Chip></Chip>
        <input
          className="rounded-lg m-2 ml-0 p-2 h-3 w-64  focus:outline-none "
          type="text"
          placeholder="Search..."
          value=""
        />
      </div>
      <Dropdown> </Dropdown>
    </>
  );
};

export default SearchBar;

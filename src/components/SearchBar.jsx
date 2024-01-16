// import { useRef,useState,useReducer } from "react";
import Chip from "./Chip";
const SearchBar = () => {
  return (
    <div className="search-bar-container bg-white rounded-full  min-w-max flex">
      <Chip></Chip>
      <input
        className="rounded-lg m-2 ml-0 p-2 h-6 w-64  focus:outline-none"
        type="text"
        placeholder="Search..."
        value=""
      />

      
    </div>
  );
};

export default SearchBar;

import { useRef,useState } from "react";
import Chip from "./Chip";
const SearchBar = () => {



  return (
    <div className="search-bar-container">
      <input  className="rounded-lg m-2 p-2 h-10 w-64" type="text" value={<Chip/>}/>
    </div>
  );
};

export default SearchBar;

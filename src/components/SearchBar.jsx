// import { useRef,useState,useReducer } from "react";
import { useContext } from "react";
import Chip from "./Chip";
import Dropdown from "./Dropdown";
import { AppContext } from "../App";
const SearchBar = () => {



  const data = useContext(AppContext)
  console.log("Printing from searchBar component");
  console.log(data)
  const handleInputSelect = (e) => {
    // console.log(e)
    console.log("Input element clicked");
  };

  const handleBlur = () => {
    console.log("Clicked away!");
  };





  return (
    <>
      <div className="search-bar-container bg-white rounded-full flex flex-wrap max-w-[200px] md:max-w-md  mb-0 pb-0">
        <Chip></Chip>
        <Chip></Chip>
        <Chip></Chip>
        <Chip></Chip>
        <Chip></Chip>
        <Chip></Chip>
        <Chip></Chip>
        <Chip></Chip>
        <Chip></Chip>
        <Chip></Chip>
        <Chip></Chip>
        <Chip></Chip>

        <input
          className="rounded-lg m-2 ml-0 p-2 h-3 w-64  focus:outline-none "
          type="text"
          placeholder="Add new user..."
          
          onFocus={handleInputSelect}
          onBlur={handleBlur}
        />
      </div>
      <Dropdown> </Dropdown>
    </>
  );
};

export default SearchBar;

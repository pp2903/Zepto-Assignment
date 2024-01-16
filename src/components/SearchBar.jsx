import { useContext, useState } from "react";
import Chip from "./Chip";
import Dropdown from "./Dropdown";
import { AppContext } from "../App";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [warn,setWarn] = useState(false)

  const data = useContext(AppContext);
  const { inputActive, setInputActive, state, dispatch } = data;

  const handleInputSelect = (e) => {
    setInputActive(true);
  };

  const handleBlur = (e) => {
    
    setWarn(false)

    console.log("From blur");
  };

  const handleInputChange = (e) => {
    console.log("From handle input change");       
    setInput(e.target.value);
  };

  const handleKeyDown = (e)=>{
    console.log(e.target.value)
    if(e.keyCode === 8 && state.chipItems.length !==0 && input==="" ){

      if(warn===false){

        setWarn(true)
      }
      else{
        const lastItem = state.chipItems[state.chipItems.length -1]
        const newDropItems = [...state.dropdownItems,lastItem]
        const newChipItems = state.chipItems.filter((item)=>{
          if(item.id!==lastItem.id)
          return item
        })
        dispatch({type:"REMOVE",payload:{newDropItems,newChipItems}})
        setWarn(false);
      }
    }
    
    // console.log(e.target.value);
  }

  const chipList = state.chipItems.map((item,index) => {   

    const isLastItem = index === state.chipItems.length - 1;
    const shouldWarn = warn && isLastItem;
    return (
      <div key={item.id} >
        <Chip
          id={item.id}
          name={item.name}
          profile_photo={item.profile_photo}
          shouldWarn = {shouldWarn}
        />
      </div>
    );
  });

  return (
    <>
      <div className="search-bar-container bg-white rounded-md flex flex-wrap max-w-[250px] md:max-w-md  mb-1 pb-0">
        {chipList}

        <input
          className="rounded-lg m-2 ml-0 p-2 h-3 w-64  focus:outline-none "
          type="text"
          placeholder="Add new user..."
          value={input}
          onChange={handleInputChange}
          onFocus={handleInputSelect}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur} 
        />
      </div>
      {inputActive && data.state.dropdownItems.length > 0 && (
        <Dropdown input={input} setInput={setInput}  />
      )}
    </>
  );
};

export default SearchBar;

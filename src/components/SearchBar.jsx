import { useContext, useState } from "react";
import Chip from "./Chip";
import Dropdown from "./Dropdown";
import { AppContext } from "../App";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const data = useContext(AppContext);
  const { inputActive, setInputActive, state, dispatch } = data;

  const handleInputSelect = (e) => {
    setInputActive(true);
  };

  const handleBlur = (e) => {
    if (e.relatedTarget.name !== "dropdown-item")
      if (e.relatedTarget === null) {
        console.log("Dropdown disappears");  
        setInputActive(false);
      }

    console.log("From blur");
  };

  const handleInputChange = (e) => {
    console.log("From input change");
    
    setInput(e.target.value);
  };

  const chipList = state.chipItems.map((item) => {
    return (
      <div key={item.id}>
        <Chip
          id={item.id}
          name={item.name}
          profile_photo={item.profile_photo}
        />
      </div>
    );
  });

  return (
    <>
      <div className="search-bar-container bg-white rounded-full flex flex-wrap max-w-[250px] md:max-w-md  mb-0 pb-0">
        {chipList}

        <input
          className="rounded-lg m-2 ml-0 p-2 h-3 w-64  focus:outline-none "
          type="text"
          placeholder="Add new user..."
          value={input}
          onChange={handleInputChange}
          onFocus={handleInputSelect}
          // onBlur={handleBlur}
        />
      </div>
      {inputActive && data.state.dropdownItems.length > 0 && (
        <Dropdown input={input} setInput={setInput}  />
      )}
    </>
  );
};

export default SearchBar;

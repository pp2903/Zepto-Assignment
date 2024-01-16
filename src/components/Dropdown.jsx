import { useContext, useState } from "react";
import { AppContext } from "../App";

const Dropdown = () => {
  const data = useContext(AppContext);
  const { state, dispatch } = data;

  const dropdown_list = state.dropdownItems.map((item) => {
    const { id, name, email, profile_photo } = item;

    return (
      <div key={id}>
        <DropdownItem id={id} name={name} email={email} profile_photo={profile_photo} />
      </div>
    );
  });

  return (
    <div className="dropdown-container block min-w-max max-w-md flex-col bg-white rounded-lg  pt-0 mt-0 drop-shadow-2xl justify-evenly overflow-y-auto h-28">
      {dropdown_list}
    </div>
  );
};





const DropdownItem = ({ id, name, email, profile_photo }) => {
  const data = useContext(AppContext);
  const { state, dispatch } = data;



  const handleClick = (id)=>{
    
    
    const newDropItems = state.dropdownItems.filter((item)=>{
      if(item.id!==id) return item
    })

    const item = state.people.find(obj=>obj.id===id)
    console.log("The item = ",item);
    const newChipItems= [...state.chipItems, item]
    console.log("New chip items",newChipItems)
    
    dispatch({type:'SELECT',payload:{newDropItems,newChipItems}})
  }


  return (
    <a id={`item-${id}`} href="#!" name="dropdown-item" onClick={()=>handleClick(id)}>
      <div
        className={`dropdown-item p-2 flex justify-between min-w-min  hover:bg-slate-100 rounded-sm`}
      >
        <div className="grow px-2">
          <img
            className="mx-1 w-4 h-4 rounded-full"
            src={profile_photo}
            alt=""
          />
        </div>
        <div className="grow px-2">
          <p className="text-[10px]">{name}</p>
        </div>
        <div className="grow px-2">
          <p className="text-[7px] mt-[3px] text-slate-700 opacity-75">
            {email}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Dropdown;

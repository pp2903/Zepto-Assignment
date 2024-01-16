import { useState } from "react";

const Dropdown = () => {
  // var margin_left = "20"; //finds the margin to the left after adding the elements
  return (
    // <div className={`flex ml-${margin_left}`}>Dropdown</div>
    <div className="dropdown-container block flex-col bg-white rounded-lg  pt-0 mt-0 drop-shadow-2xl justify-evenly  overflow-y-auto h-28">
      <DropdownItem />
      <DropdownItem />
      <DropdownItem />
      <DropdownItem />
      <DropdownItem />
      <DropdownItem />
      <DropdownItem />
      <DropdownItem />
      <DropdownItem />
      <DropdownItem />
    </div>
  );
};

const DropdownItem = () => {
  return (
    <>
      <div className={`dropdown-item my-1 flex justify-between w-full hover:bg-slate-100 rounded-sm`}>
        <div className="grow px-2">
            
            <img className="mx-1 w-4 h-4 rounded-full" src="./src/images/profilePhotos/p2.png" alt="" />
            
            </div>
        <div className="grow px-2">
          <p className="text-[10px]">Alex Jones</p>
        </div>
        <div className="grow px-2">
          <p className="text-[7px] mt-[3px] text-slate-700 opacity-75">alexjones@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default Dropdown;

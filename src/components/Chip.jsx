import { useContext } from "react";
import { AppContext } from "../App";

const Chip = ({id,name,email,profile_photo}) => {


  const data = useContext(AppContext);
  const { inputActive, setInputActive, state, dispatch } = data;



  const handleClick = (id)=>{

    const item = state.people.find(obj=>obj.id===id);
    console.log(item);
    const newDropItems = [...state.dropdownItems,item]

    const newChipItems = state.chipItems.filter((item)=>{
        if(item.id!==id) return item
    })


    dispatch({type:"REMOVE",payload:{newDropItems,newChipItems}})


  }












  return (
    <>
    <div className="chip flex  place-content-center bg-slate-300 rounded-full py-1 min-w-max max-w-min items-center m-[3.5px]">

    <img className="mx-1 w-4 h-4 rounded-full" src={profile_photo} alt={name}/>
    <p className="mx-1 text-xs">{name}</p>
    <a className="mx-1 mr-1.5 text-xs" href="#!"><img className="w-[10px] pt-[0.20rem]" onClick={()=>handleClick(id)} src="/cross.png" alt="cross icon" /></a>
    
    </div>
    
    </>
  )
}
export default Chip
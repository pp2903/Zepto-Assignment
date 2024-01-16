
import './App.css'
import SearchBar from './components/SearchBar'
import Chip from './components/Chip'
import { user_data } from './data/userData'
import { createContext, useEffect, useRef, useState } from 'react'
export const AppContext = createContext({})
import { useReducer } from 'react'
function App() {

  const [inputActive, setInputActive] = useState(false);
  const people = user_data  
  
  const defaultState = {
    people:people,
    dropdownItems:[...people],
    chipItems:[],

  }
  
  //handling all the changes in the reducer function
  const reducer = (state, action)=>{
    if(action.type==="SELECT"){
      console.log("REDUCER RECEIVED THE PAYLOAD! ",action.payload)
      return {...state,dropdownItems:action.payload.newDropItems,chipItems:action.payload.newChipItems}
    }

    if(action.type==="REMOVE"){
      
      console.log("REDUCER RECEIVED THE PAYLOAD! ",action.payload)
      return {...state,dropdownItems:action.payload.newDropItems,chipItems:action.payload.newChipItems}
    }
  }


  console.log("Default state",defaultState);

  const appRef = useRef(null);
  useEffect(()=>{
    const handleClickOutside = (event) => {
      if (appRef.current && !appRef.current.contains(event.target)) {
        setInputActive(false)
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  
    
  },[]);



  const [state, dispatch] = useReducer(reducer,defaultState);

  return (

    <AppContext.Provider value={{state,dispatch,inputActive,setInputActive}}>
    <div ref={appRef} className='app-container'>
    <SearchBar></SearchBar>
    </div>
    </AppContext.Provider>
  )
}

export default App


import './App.css'
import SearchBar from './components/SearchBar'
import Chip from './components/Chip'
import { user_data } from './data/userData'
import { createContext } from 'react'
export const AppContext = createContext({})
function App() {
  const people = user_data  

  return (

    <AppContext.Provider value={people}>
    <div className='app-container grid grid-cols-1 gap-1 self-center'>
    <SearchBar></SearchBar>
    {/* <Chip></Chip> */}
    </div>
    </AppContext.Provider>
  )
}

export default App

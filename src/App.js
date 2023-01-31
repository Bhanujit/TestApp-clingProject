import FrontPage from './pages/frontPage';
import React,{createContext,useState} from 'react';
import axios from 'axios'
import './App.css';
//Creating Context
export const Functionalities = createContext();

function App() {
const [gapTime,setGapTime]=useState(false)
// for 5 second delay
setTimeout(()=>{
  setGapTime(true)
},5000)
  //Fething and parsing data
const getData = async(url,setItem)=>{
  const startTime = await Date.now()
  const data = await axios.get(url)
  const endTime = await Date.now()
  setItem({startTime,endTime,data})
}

//Saving data into local storage
const saveData = async(name,data,setItem)=>{
  const startSave = await Date.now()
  await localStorage.setItem(name,JSON.stringify(data))
  const endSave= await Date.now()
  setItem({startSave,endSave})
}
  return (
    <Functionalities.Provider value = {{saveData,getData,gapTime}}>
      <FrontPage/>
    </Functionalities.Provider>
  );
}

export default App;

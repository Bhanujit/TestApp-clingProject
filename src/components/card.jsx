import React,{useContext,useState,useEffect} from 'react'
import { Functionalities } from '../App'
import './card.css'

const Card = (props) => {
  //getting data from context api
  const {getData,saveData,gapTime}=useContext(Functionalities);
  const [data,setData] = useState({});
  
  //for parsing data from api and saving
  useEffect(()=>{
    if(gapTime===true){
      getData(props.url,setData)
    }
  },[gapTime,props.clicked,props.update]);
 
  // for saving data in the local storage
  const [savingData,setSavingeData]=useState({});
  useEffect(()=>{
   if(gapTime) {
    saveData(props.name,data.data,setSavingeData)
   }
  },[gapTime,data.data,props.name]);

  return (
    <div className='card-container'>
      <h3>{props.name}</h3>
        <p>Start: {data.startTime}</p>
        <p>End: {data.endTime}</p>
        <p>StartSave: {savingData.startSave}</p>
        <p>EndSave: {savingData.endSave}</p>
    </div>
  )
}

export default Card;
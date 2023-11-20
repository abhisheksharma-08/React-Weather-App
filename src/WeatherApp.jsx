import SearchBox from "./searchBox"
import InfoBox from "./infobox"
import { useState } from "react"
export default function WeatherApp(){
const [weatherInfo,setweatherInfo]=useState("")

let c=true;
let updateInfo=(newInfo)=>{
    c=true;
    setweatherInfo(newInfo);

}


    return(<div style={{textAlign:"center"}}>
        <h2>
    Weather App !!</h2>
    {console.log(c)}
   
    <SearchBox updateInfo={updateInfo}/>
  {c?  <InfoBox info={weatherInfo}/>:""}
  

   
    
    
    
    </div>)
}
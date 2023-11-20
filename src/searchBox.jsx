import TextField from '@mui/material/TextField';
import "./searchBox.css"
import InfoBox from './infobox';

import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox({updateInfo}) {
    let[city,setcity]=useState("");
    let[error,seterror]=useState(false);
   


    let getWeatherInfo=async()=>{
        try {
            // let response=  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3045dd712ffe6e702e3245525ac7fa38`)
      let jsonresponse=await response.json();
      console.log(jsonresponse);

    
    let result={
        
        city:city,
        temp:jsonresponse.main.temp,
        tempMin:jsonresponse.main.temp_min,
        tempMax:jsonresponse.main.temp_max,
        huidity:jsonresponse.main.humidity,
        feelslike:jsonresponse.main.feels_like,
        weather:jsonresponse.weather[0].description,

    }
console.log(result)
return result;
            
        } catch (err) {
            throw err;
        }
      
}


let handelchange=(event)=>{
    setcity(event.target.value);
}
let handelsubmit=async(event)=>{
    try {
        event.preventDefault();
        
        setcity("");
      let newInfo= await getWeatherInfo();
      updateInfo(newInfo);
    } catch (error) {
        seterror(true)
        
    }
 
}

    return (
        <div className='SearchBox'>
        
            <form onSubmit={handelsubmit}>
                <TextField id="city" label="City" variant="outlined" value={city} required onChange={handelchange} />
                <br></br>
                <br></br>
                <Button variant="contained" type="submit">
                    Search

                </Button>
                
            </form>
            {error&& <p style={{color:"red"}}>"No such place exist!!</p>}
         
        </div>
    )
}
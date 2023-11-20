import * as React from 'react';
import Card from '@mui/material/Card';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Typography from '@mui/material/Typography';
import "./infobox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';




export default function InfoBox({info}){
    
   let  HOT_URL="https://images.unsplash.com/photo-1535089880589-adc75d7c46b0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   let COLD_URL="https://images.unsplash.com/photo-1514994839288-31e8ecf32060?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   let RAIN_URL="https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";    
   
 

    return(



        <div className="InfoBox">
           
<div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.huidity >80 ?RAIN_URL  :info.temp >15 ? HOT_URL:COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.huidity >80 ? <ThunderstormIcon/>:  info.temp >15 ?  <WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <div>Temperature = {info.temp}&deg;C </div>
         <div>Humidity = {info.huidity}</div>
         <div>Min Temp = {info.tempMin}</div>
         <div>Max Temp = {info.tempMax}</div>
         <div>The weather can be described as <b>{info.weather}</b> & feels like <b>{info.feelslike}&deg;C</b></div>
        </Typography>
      </CardContent>
     
    </Card>
    </div>


        </div>
    )
}
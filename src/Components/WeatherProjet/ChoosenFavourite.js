import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'; 
import './WeatherPage.css'

export default function ChoosenFavourite(props){   
  
    return(
        <div>   
                <button className='forecastcard' onClick={()=>{props.setChoosenCity({choosenName:props.cityName,choosenKey:props.cityKey})}}>
                    <h6>{props.cityName}</h6>
                    <h5>{props.temperature}°C</h5>
                    <h5>{props.condition} </h5>
                </button>   
        </div>
    )
}
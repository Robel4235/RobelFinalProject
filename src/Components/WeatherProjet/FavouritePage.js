import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'; 
import './WeatherPage.css'
import ChoosenFavourite from './ChoosenFavourite'

export default function FavouritePage(props){   
  
    return(
        <div >
            {props.favouriteList.map((element)=>(     
                <td>
                    <Link to='/'>
                    <ChoosenFavourite setChoosenCity={props.setChoosenCity} cityName={element.cityName} 
                    temperature={element.temperature} condition={element.condition} cityKey={element.cityKey}/>  
                    </Link>
                </td> 
                           
            ))}
              
        </div>
    )
}
import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'; 
import './WeatherPage.css'
import forecastCard from './ForecastCard';
import ForecastCard from './ForecastCard';
import FavouriteOperator from './FavouriteOperator';
import {AiFillHeart,AiOutlineHeart} from 'react-icons/ai';

export default function WeatherPage(props){   
  const [cityName,setCityName]=useState('')
  const [cityInfo,setCityInfo]=useState({})
  const [cityCondition,setCityCondition]=useState({})
  const [forecastList,setforecastList]=useState([])
  const [currentTemp,setCurrentTemp]=useState(0)
  const key ='KOXg8wUAkNZ83XNGQdmrLNp8ZDGKP9ie'
  const tempDefault=null;
  //get city information
 const getCity =async(city)=>{
    const base ='http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
    const query=`?apikey=${key}&q=${city}`;
    const response =await fetch(base+query);
    const data= await response.json();
    setCityInfo(data[0]);
    console.log(data)
    return (data[0]);
 } 
 //get weather information
 const getWeather =async(id)=>{
    const base ='http://dataservice.accuweather.com/currentconditions/v1/';
    const query=`${id}?apikey=${key}`;
    const response =await fetch(base+query);
    const data= await response.json();
    getForecasts(id)
    setCityCondition(data[0]);
    setCurrentTemp(data[0].Temperature.Metric.Value);
    console.log(data)
    return data[0];
 } 
 //get 5 Days of Daily Forecasts
 const getForecasts =async(id)=>{
    const base ='http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
    const query=`${id}?apikey=${key}`;
    const response =await fetch(base+query);
    const data= await response.json();
    setforecastList(data.DailyForecasts);
    console.log(data)
 } 
 
const checkDefault =()=>{
   debugger;
  
   if (cityName=='' && props.choosenCityName==''&& props.choosenCityKey=='' && forecastList.length==0 &&
    Object.entries(cityInfo).length=== 0&& Object.entries(cityCondition).length=== 0){  
      getCity('tel aviv')
      getWeather('215854')
   }else{
      if(props.choosenCityName!=''&&props.choosenCityKey!=''){
         getCity(props.choosenCityName)
         getWeather(props.choosenCityKey)
      }else{
         return null;

      }
     
   }
}

    return(
        <div>
            <div> 
                   {checkDefault()}   

                <input type="text" placeholder='Enter the city here..' onChange={e=>setCityName(e.target.value)} /> 
                 <button onClick={()=>{getCity(cityName).then(data=>{
                  getWeather(data.Key)}).then(data=>{console.log(data)})      
                 .catch(err=>console.log(err))}}>Search</button>  <br /> <br />
                 <div className='mainbox'>
                    <div>
                      <FavouriteOperator cityKey={cityInfo.Key} cityName={cityInfo.LocalizedName} 
                        temperature={currentTemp} condition={cityCondition.WeatherText}  
                        favouriteList={props.favouriteList} setFavouriteList={props.setFavouriteList}
                        liked={props.liked} setLiked={props.setLiked}/>
                    </div>
                        <h3 className='leftToTheBox'>{cityInfo.LocalizedName}</h3>
                        <h3 className='leftToTheBox'>{currentTemp} °C</h3>
                        <h4>{cityCondition.WeatherText}</h4> <br /> <br />
                    <div> 
                      {forecastList.map((element)=>(
                         <td>
                             {<ForecastCard date={element.Date} condition={element.Day.IconPhrase}
                              tempmax={element.Temperature.Maximum.Value} tempmin={element.Temperature.Minimum.Value}/>}
                         </td>                      
                      ))}
                   </div>
                 </div>
                 
            </div>       
        </div>
    )
}
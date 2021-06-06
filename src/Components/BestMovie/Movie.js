import React, { useState } from 'react';
import {Link} from 'react-router-dom'; 
import './Movie.css';
export default function Movie(props){
    const [refresh,setRefresh]=useState(false)
    const avgRate=()=>{
        let clicks=props.movieList[props.indx].Rate.length
        let sum =0;
        for(let i=0;i<props.movieList[props.indx].Rate.length;i++){
            sum+=props.movieList[props.indx].Rate[i]
        }
        let avg =sum/clicks;
        props.movieList[props.indx].rateAvg=avg;
        mostRated();
        setRefresh(!refresh);
    }
    const mostRated =()=>{
        let arrAvgRates=[]
        for(let i=0;i<props.movieList.length;i++){
            arrAvgRates.push(props.movieList[i].rateAvg)
        }
        for(let i=1;i<arrAvgRates.length;i++){
            for(let j=0;j<arrAvgRates.length;j++){
                if (arrAvgRates[i]>=arrAvgRates[j]){
                    let temp =arrAvgRates[j];
                    arrAvgRates[j]=arrAvgRates[i];
                    arrAvgRates[i]=temp
                }
            }
        }
        for(let i=0;i<props.movieList.length;i++){
           if (props.movieList[i].rateAvg==arrAvgRates[0]){
               props.mostFunc(i);
           }
           if(props.movieList[i].rateAvg==arrAvgRates[1]){
               props.secondFunc(i);
           }
           if (props.movieList[i].rateAvg==arrAvgRates[2]) {
               props.thirdFunc(i);
           }
        }
       
    }
    
    const updateRate=(element)=>{
        debugger;
        props.movieList[props.indx].Rate.push(element);
        avgRate();
    }
    
    return(
        <div >
           <table className='leftSide'>
               <tr className='leftSide'>
                   <h4>movie name: {props.movieList[props.indx].Name}</h4>
                   {props.movieList[props.indx].Img}
                   {props.movieList[props.indx].Descrption} <br />
                    {props.movieList[props.indx].rateAvg} <br />
                   <button value='1' onClick={e=>{updateRate(Number(e.target.value))}}>1</button>
                   <button value='2' onClick={e=>{updateRate(Number(e.target.value))}}>2</button> 
                   <button value='3' onClick={e=>{updateRate(Number(e.target.value))}}>3</button> 
                   <button value='4' onClick={e=>{updateRate(Number(e.target.value))}}>4</button>
                   <button value='5' onClick={e=>{updateRate(Number(e.target.value))}}>5</button> 
               </tr>
           </table>
        </div>
    )
}
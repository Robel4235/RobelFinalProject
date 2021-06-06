import React, { useState } from 'react';
import {Link} from 'react-router-dom'; 
export default function Product(props){
    const [refresh,setRefresh]=useState(false);
    const swichOnRefresh=(indx)=>{
        props.roomList[props.current].Iytems[indx].swich='on'
        setRefresh(!refresh);
    }
    const swichOfRefresh=(indx)=>{
        props.roomList[props.current].Iytems[indx].swich='off'
        setRefresh(!refresh);
    }
    return(
        <div>
          {
              props.roomList[props.current].Iytems.map((item,indx)=>{
                  if(item.swich=='off'){
                      return (
                          <button value={indx} style={{backgroundColor:'red'}} 
                          onClick={e=>{swichOnRefresh(e.target.value)}}>{item.product}</button>
                      )
                  }else {
                      if (item.swich=='on') {
                          return(
                            <button value={indx} style={{backgroundColor:'green'}} 
                            onClick={e=>{swichOfRefresh(e.target.value)}}>{item.product}</button>
                          )
                          
                      }
                  }

              })
          }
        </div>
    )
}
import React, { useState } from 'react';
import {Link} from 'react-router-dom'; 
export default function HomePage(props){
    
    return(
        <div>
            {               
              props.roomList.map((element,indx)=>(
              
                <Link to='/inside'> <button value={indx} style={{height:'2cm',width:'2cm',backgroundColor:element.Color}} 
               onClick={e=>{props.currentFunc(e.target.value)}}>{element.Name}</button></Link> ))                  
            }   
           <Link to='/addroom'> <button  style={{borderRadius:'10px'}}>+</button></Link>

        </div>
    )
}
import React, { useState } from 'react';
import {Link} from 'react-router-dom'; 
export default function AddRome(props){
    const [type,setType]=useState('');
    const [name,setName]=useState('');
    const [color,setColor]=useState('');
    const typeSaver =(element)=>{
        setType(element.target.value)
    }
    const nameSaver =(element)=>{
        setName(element.target.value)
    }
    const colorSaver =(element)=>{
        setColor(element.target.value)
    }

    return(
        <div>
            <select name="" id="" onChange={typeSaver}> 
                <option value="BedRoom">Bed Room</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Bathroom">Bath Room</option>
                <option value="LivingRoom">Living Room</option>
            </select> {type} <br/>
            <input type="text" placeholder='Room Name' onChange={nameSaver}/> {name} <br/>
            <input type="text" placeholder='Room Color' onChange={colorSaver}/> {color} <br/>
            {
                type!=''&& name.length<=5 &&name.length>=1?<Link to='/'> <button onClick={()=>{props.addRoomFunc(type,name,color)}}>Create new</button></Link>:
                <button onClick={()=>{alert('please set the inputs right')}}>Create</button>              
            }
            
        </div>
    )
}
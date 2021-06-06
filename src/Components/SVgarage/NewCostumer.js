import React, { useState } from 'react';
import {Link} from 'react-router-dom'; 
export default function NewCostumer(props){
    const[name,setName]=useState('');
    const[Id,setId]=useState('');
    const[adress,setAdress]=useState('');
    const[phone,setPhone]=useState('');
    const[carNum,setCarNum]=useState('');
    const saveName =(element)=>{
        setName(element.target.value);
    }
    const saveId =(element)=>{
        setId(element.target.value);
    }
    const saveAdress =(element)=>{
        setAdress(element.target.value);
    }
    const savePhone =(element)=>{
        setPhone(element.target.value);
    }
    const saveCarNum =(element)=>{
        setCarNum(element.target.value);
    }

    return(
        <div>
            <h3>New Custumer</h3>
            <input onChange={saveName} type="text" placeholder='Full Name' /><br />
            <input onChange={saveId} type="number" placeholder='ID Number'/><br />
            {Id.length>9||Id.length<9&&Id!=''?<p>please set the ID right</p>:null}
            <input onChange={saveAdress} type="text" placeholder='Adress' /><br />
            <input onChange={savePhone} type="number" placeholder='Phone Number'/><br />
            {phone.length<7 && phone!=''?<p>please set the phone number right</p>:null}
            <input onChange={saveCarNum} type="number" placeholder='Car Number'/><br />
            {Id.length>9||Id.length<9||phone.length<7||name==''||Id==''||adress==''||phone==''||carNum==''?<button>Submit</button>:
            <Link to='/'><button onClick={()=>{props.addCostumer(name,Id,adress,phone,carNum)}}>Submit</button></Link>}
           
            
                 
        </div>
    )
}
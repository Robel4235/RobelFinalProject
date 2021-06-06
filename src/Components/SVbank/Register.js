
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register (props){
 const[id,setId]=useState('');
const[user,setUser]=useState('');
const[pass,setPass]=useState('');
const[confirmPass,setConfPass]=useState('');
const[money,setMoney]=useState(0);

const saveId=(element)=>{
    setId(element.target.value)
}
const saveUser=(element)=>{
    setUser(element.target.value)
}
const savePass=(element)=>{
    setPass(element.target.value)
}
const saveConfirmPass=(element)=>{
    setConfPass(element.target.value)
}
const saveMoney=(element)=>{
    setMoney(element.target.value)
}
 
    return(
        <div>
            <Link to='/' >Home Page</Link>
            <h3>REGISTER</h3> 
           <div> <input onChange={saveId} type="number" placeholder='ID'/> {id}  </div>
           <div> <input onChange={saveUser} type="text" placeholder='User Name'/>{user} </div>
           <div> <input onChange={savePass} type="text" placeholder='PassWord'/>{pass}</div>
           <div> <input onChange={saveConfirmPass}  type="text" placeholder='Confirm Pass'/>{confirmPass} </div>
           <div> <input onChange={saveMoney} type="number" placeholder='Money'/>{money} </div>
           
          
        </div>
    )
}
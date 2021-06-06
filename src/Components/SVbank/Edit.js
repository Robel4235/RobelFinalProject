
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Edit (props){
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
const toEditCostFunc=()=>{
    if (id==''||user==''||user==''||pass==''||money==0){
        return  <button >Create</button>
    }else{
        if(id.length>9 || id.length<9){
            alert('id must be 9 digits')
            return null
        }
        if(user.length<4){
         alert('minumum 4 leters od user name')
         return null
        }
        if(pass!=confirmPass || pass.length<6 ){
         alert('please confirm the password correctly')
         return null
        } 
        if(money>1000000||money<0){
         alert('money from 0 to 1000000 only')
         return null
        } 
       return(    
            <button onClick={()=>{props.EditCostumer(Number(id) ,user,pass,confirmPass,money)}}>Create</button> 
       )
     
    }
     
}
    
    return(
        <div>
            <h3>REGISTER</h3>
           <div> <input onChange={saveId} type="number" placeholder={props.costumerList[props.currentUser].Id}/> {id}  </div>
           <div> <input onChange={saveUser} type="text" placeholder={props.costumerList[props.currentUser].UserName}/>{user} </div>
           <div> <input onChange={savePass} type="text" placeholder={props.costumerList[props.currentUser].PassWord}/>{pass}</div>
           <div> <input onChange={saveConfirmPass}  type="text" placeholder={props.costumerList[props.currentUser].Confirm}/>{confirmPass} </div>
           <div> <input onChange={saveMoney} type="number" placeholder={props.costumerList[props.currentUser].Money}/>{money} </div>
           {toEditCostFunc()}
        </div>
    )
}
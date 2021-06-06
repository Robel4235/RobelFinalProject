import React, { useState } from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

export default function CostumerPage (props){
    const [editBox,setEditBox]=useState (false)
    const [amount,setAmount]=useState (0)
    const [company,setCompany]=useState ('')
    const saveAmount =(element)=>{
        setAmount(element.target.value)
    }
    const saveCompany =(element)=>{
        setCompany(element.target.value)
    }

    const showBalance=()=>{
        let sum=0;
        for(let i=0;i<props.costumerList[props.currentUser].Expences.length;i++){
            sum+=props.costumerList[props.currentUser].Expences[i].Amount;
        }
        let tempBalance=props.costumerList[props.currentUser].Money-sum;
        alert('Your Balance is->'+ tempBalance);
    }
    const showEditBox=()=>{
        if (editBox==true){
            return(
                <div>
                   <div> <input onChange={saveAmount} type="number" placeholder='amount'/> </div>
                   <div> <input onChange={saveCompany} type="text" placeholder='company'/> </div>
                   <div><button onClick={()=>{props.setBalance(amount,company)}}>Confirm</button></div>
                </div>
            )
        }
    }

   
    
    return(
        <div>
            <Link to='/'>Home page</Link>
            <h5>Well Come {props.costumerList[props.currentUser].UserName} </h5>
           <div>
               <button onClick={()=>{showBalance()}}>Balance</button>
               <button onClick={()=>{setEditBox(!editBox)}} >Action</button>
           </div>
           <div>
               <button>EXIT</button>
               <Link to='/edit'><button>EDIT</button></Link>
           </div>
           {showEditBox()}
        </div>
    )
}
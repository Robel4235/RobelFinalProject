import React, { useState } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
export default function FirstPage (props){    
       const[user,setUser]=useState('')
        const[password,setPasword]=useState('')
        const saveUser=(element)=>{
            setUser(element.target.value)
        }
        const savePassword=(element)=>{
            setPasword(element.target.value)
        }
        const userCheker =()=>{
            if (user==''||password==''){
                return(
                    <button>Enter</button>
                )
            }else{
                if (user=='Admin'&&password=='Admin'){
                    return (
                      <Link to='/manager'><button>Go to Manager</button></Link>  
                    )
                }
                
                let temp =false;
                let temindx=0;
            for(let i=0;i<props.costumerList.length;i++){
                if (props.costumerList[i].UserName==user && props.costumerList[i].PassWord==password){
                    temp=true;
                    temindx=i
                    break;
                }
            }
            if (temp==true){
                return(
                   <Link to='/costumerPage'><button onClick={()=>{props.setCurrentUser(temindx)}}>Enter</button></Link> 
                )
            }else{        
                return 
            }

            }
            
       }
    return(
        <div>
            {/*<Link to='/sec'>for the second Question</Link>*/}
            <h3>SV-BANK</h3>
           <div> <input onChange={saveUser} type="text" placeholder='User Name'/> {user} </div>
           <div> <input onChange={savePassword} type="text" placeholder='PassWord'/> {password} </div>
           <Link to ='/register'><h6>Create New User</h6></Link>
           {userCheker()}
          

        </div>
    )
}
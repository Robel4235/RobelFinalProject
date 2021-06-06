import React, { useState } from 'react';
import {Link} from 'react-router-dom'; 
export default function FirstPage(props){   
    const [refresh,setRefresh]=useState(false)
    const [listIDorCar,setIt]=useState(props.startArr)
    const [selected,setSelectd]=useState('')
    const [radiobut,setRadioBur]=useState(false)
    

    const saveSelected =(element)=>{
        setSelectd(element.target.value);
    }  
    const radio1=()=>{
        setRadioBur(!radiobut)
        document.getElementById('idrad').checked=radiobut;
        let tempList=[]
       for (let i =0; i<props.costumerList.length;i++){
           tempList.push(props.costumerList[i].CarNum)
       }
       setIt(tempList);
    }
    const radio2=()=>{
        setRadioBur(!radiobut)
        document.getElementById('carnumRad').checked=radiobut
        let tempList=[]
       for (let i =0; i<props.costumerList.length;i++){
           tempList.push(props.costumerList[i].ID)
       }
       setIt(tempList);
    }

    const checkCostumer =()=>{
        let tempcurrent=0;
        for (let i=0; i<props.costumerList.length;i++){      
            if (selected==props.costumerList[i].ID||selected==props.costumerList[i].CarNum){
                tempcurrent=i;
                break;
            }
        }
        props.setCurrent(tempcurrent);
    }

    
    return(
        <div>
            <h3>SV-Garage</h3>
           <Link to='/newCos'> <button>New Costumer</button></Link> <br />
           
           <select name="" id="" onChange={saveSelected}>
               <option value="">none</option>
               {listIDorCar.map((element)=>(
                   <option value={element}>{element}</option>
               ))}
            </select> {selected} <br />
            <input onClick={()=>{radio1()}}  checked={radiobut} id='carnumRad'  type="radio"/> car NUmber 
            <input onClick={()=>{radio2()}} checked={!radiobut} id='idrad'  type="radio" /> ID<br />
            
            {selected==''?<button>Enter</button>:<Link to='/costumerpage'><button onClick={()=>{checkCostumer()}}>Enter</button></Link>}          
        </div>
    )
}
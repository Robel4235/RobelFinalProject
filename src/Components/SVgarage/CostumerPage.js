import React, { useState } from 'react';
import {Link} from 'react-router-dom'; 
export default function CostumerPage(props){   
    const[problemNum,setProblemNum]=useState('');
    const [addProblem,setAddProblem]=useState(false);
    const [showProblem,setShowProblem]=useState(false);
    const [num,setnum]=useState('');
    const [desc,setDesc]=useState('');
    const [time,setTime]=useState(0);
    const [price,setPrice]=useState(0);
    const [problemIndex,setProblemIndex]=useState(0);
    const [showHistory,setShowHistory]=useState(false);

    const saveProblemNum =(element)=>{
        setProblemNum(element.target.value);
    }
    const savenNum =(element)=>{
        setnum(element.target.value);
    }
    const saveDesc =(element)=>{
        setDesc(element.target.value);
    }
    const saveTime =(element)=>{
        setTime(element.target.value);
    }
    const savePrice =(element)=>{
        setPrice(element.target.value);
    }
      
    const checkProblem =()=>{
        if (problemNum==''){
           setAddProblem(!addProblem)
        }else{
            if (problemNum!='' && props.problemList.length<1){
                alert("there is no problem number in this costumer's history, add new one if it is needed")
                setAddProblem(!addProblem)
            }else {
                    let finder =false;
                    let probIndx=0;
                    for (let i=0; i<props.problemList.length;i++){
                         if (props.problemList[i].ProblemNum==problemNum){
                             finder=true;
                             probIndx=i;
                             break;
                         }
                      }
                     if (finder==true){
                        setProblemIndex(probIndx);
                         setShowProblem(!showProblem);
                     }else{
                            alert ('no such number in the list')
                       }
            }               
        }    
    }

    const sendToprobFunc =()=>{
        props.addProbFunc(num,desc,time,price)
        setAddProblem(!addProblem)
    }
    
    return(
        <div>
            <h4>Costumer Name: {props.costumerList[props.current].Name}</h4>
            {props.costumerList[props.current].problemCode.length<1? <button onClick={()=>{alert("there is no problems history for this costumer")}}>History</button>:
            <Link to='/problemhistory'><button>History</button></Link>}
            <button>Details</button> <br />
           <input type="number" placeholder='problem number' onChange={saveProblemNum} /> 
           <button onClick ={()=>{checkProblem()}} >Search</button> <br />
           {showProblem==true?
           <div>
               <h4>problem number: {props.problemList[problemIndex].ProblemNum}</h4> 
               <h4>Description: {props.problemList[problemIndex].Description}</h4> 
               <h4>Fix time: {props.problemList[problemIndex].FixTime} hours</h4> 
               <h4>Price: {props.problemList[problemIndex].Price} </h4>
               <button onClick={()=> setShowProblem(!showProblem)}>Hide</button>
           </div> : null
           }
            <br/>
           {addProblem==true? 
           <div>
               <input onChange={savenNum} type="number" placeholder='problem number'/><br />
               <input onChange={saveDesc}  type="text" placeholder='description'/><br />
               <input onChange={saveTime} type="number" placeholder='fix time'/><br />
               <input onChange={savePrice} type="number" placeholder='price'/><br />
               <button onClick={()=>{sendToprobFunc()}}>enter</button>
           </div>:null}

           <Link to='/'>Back to the main page</Link>
        </div>
    )
}
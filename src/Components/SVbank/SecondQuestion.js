import React, { useState } from 'react'
export default function SecondQuestion(props){
    const [num,setNum]=useState(0);
    const saveNum =(element)=>{
        setNum(element.target.value)
    }
    const Second1 =(num)=>{
        debugger;
        let temparr=[]
       while(num>1){
           let single=num%10
           temparr.push(single)
           num=Math.floor(num/ 10)
       }
       let indx=0;
       for (let i=1; i<temparr.length;i++){
           for(let j=0;j<temparr.length;j++){
               if (temparr[i]<=temparr[j]){
                   indx=temparr[i];
                   temparr[i]=temparr[j];
                   temparr[j]=indx
               }
           }
           indx=0;
       }
       let tempnum=''
       for (let i=0;i<temparr.length;i++){
           tempnum=tempnum+temparr[i];
       }
       alert (tempnum);

    }
    return(
        <div>
            <input onChange={saveNum} type="number" placeholder='enter number here'/>
            <button onClick ={()=>{Second1(num)}}>enter</button>

        </div>
    )
}
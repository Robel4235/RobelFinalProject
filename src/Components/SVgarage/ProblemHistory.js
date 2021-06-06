import React, { useState } from 'react';
import {Link} from 'react-router-dom'; 
export default function ProblemHistory(props){
    const problems=[];
    const buildProblemsList =()=>{
        let temp ={}
        let temppriceSum=0
        let totalTime=0
        for (let i=0;i<props.costumerList[props.current].problemCode.length;i++){
            for(let j=0;j<props.problemList.length;j++){
                if (props.costumerList[props.current].problemCode[i]==props.problemList[j].ProblemNum){
                     temp ={num:props.problemList[j].ProblemNum,description:props.problemList[j].Description,time:props.problemList[j].FixTime,price:props.problemList[j].Price}
                     temppriceSum+= Number(props.problemList[j].Price) ;
                     totalTime+=Number(props.problemList[j].FixTime) ;

                    problems.push(temp)
                }
            }
        }
        totalTime=totalTime/9;
        let totalTimeStr=totalTime.toString();
        let indxAfterDot=totalTimeStr.indexOf('.');
        let hours = totalTimeStr.charAt(indxAfterDot+1);
        let days = totalTimeStr.substring(0,indxAfterDot);
        return (
            <div>
                <table>
                <tr>
                    <td>Problem Number</td>
                    <td>Descrpition</td>
                    <td>Fixing Time</td>
                    <td>Price</td>
                </tr>
                {problems.map((element)=>(
                    <tr>
                        <td>{element.num} </td>
                        <td>{element.description} </td>
                        <td>{element.time} </td>
                        <td>{element.price} </td>
                    </tr>
                ))}
                <tr>
                    <td>Total Price :{temppriceSum}</td>
                    <td>Total fixing time : {days} days and {hours} hours</td>
                </tr>
            </table>
            </div>
        )
    }
    
    return(
        <div>
            {buildProblemsList()}          
        </div>
    )
}
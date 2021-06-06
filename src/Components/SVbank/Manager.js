import React from 'react'
import ShowMore from './ShowMore'
export default function Manager(props){
    return(
        <div>
            {props.costumerList.map((element,index)=>(
                <div>
                    <div>{element.Id} {element.UserName}</div> <button onClick={()=>{<ShowMore  costumerList={props.costumerList} index={index}/>}}>show more</button>
                </div>
            ))}
        </div>
    )
}
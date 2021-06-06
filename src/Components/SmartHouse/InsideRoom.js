import React, { useState } from 'react';
import {Link} from 'react-router-dom'; 
import Product from './Product'
export default function InsideRoom(props){
    const [prodBox,setProdBox]=useState(false);
    const [product,setproduct]=useState('');
    const productSaver=(element)=>{
        setproduct(element.target.value)
    }
    const addProduct =()=>{
        debugger;
        if (props.roomList[props.currentRoom].Iytems.length<5){
            if (product=='stereo'){
                let finder =false;
                for (let i=0; i<props.roomList[props.currentRoom].Iytems.length;i++){
                    if (props.roomList[props.currentRoom].Iytems[i].product==product){
                        finder=true;
                        break;
                    }
                }
                if (finder==true){
                    return null;
                }else{
                    props.roomList[props.currentRoom].Iytems.push({product:product,swich:'off'});
                    setProdBox(!prodBox);
                    return null;
                }
            }else{
                if (product=='boiler' &&  props.roomList[props.currentRoom].Type!='Bathroom'){
                    return null
                }else{
                    props.roomList[props.currentRoom].Iytems.push({product:product,swich:'off'});
                    setProdBox(!prodBox);
                    return;
                }
            }
            props.roomList[props.currentRoom].Iytems.push({product:product,swich:'off'});
            setProdBox(!prodBox);
            return;
            
        }else{
            return null;
        }
        
        props.roomList[props.currentRoom].Iytems.push({product:product,swich:'off'});
        setProdBox(!prodBox);
    }
    return(
        <div>
            <h3>Room Name:</h3><h5>{props.roomList[props.currentRoom].Name}</h5> <br/> <br/>
            <h3>Room Type:</h3><h5>{props.roomList[props.currentRoom].Type}</h5> <Product roomList={props.roomList} current={props.currentRoom}/> <br/> <br/>
            <button onClick={()=>{setProdBox(!prodBox)}}>Add products</button> <br/>
            {
                
            prodBox==true?
            <div><select value={product} onChange={productSaver}>
            <option value="ac">AC</option>
            <option value="boiler">Boiler</option>
            <option value="stereo">Stereo System</option>
            <option value="lamp">Lamp</option>
        </select>  {product} <br/> <button onClick={()=>{addProduct()}}>Add</button></div> :null}
        </div>
    )
}
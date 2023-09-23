import React from "react";
import {AiFillDelete,AiFillEdit,AiFillCheckCircle} from "react-icons/ai"

const Todo = ({_id,text ,Deletetodo,Edittodo,Updatetod})=>{
    return(
        <div  className="todo">
            <div id = {_id }className="item" name = "text">{text}</div>
            <AiFillDelete  id = {_id + "icon"} className = "icon"  onClick={Deletetodo}/>
            <AiFillEdit id = {_id + "icon2"} className = "icon"  onClick={Edittodo}/>
            <AiFillCheckCircle id = {_id + "tick"} className=" iconno " onClick={Updatetod} />
        </div>
    )
}


export default Todo  
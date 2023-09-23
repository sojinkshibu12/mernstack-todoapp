import React from 'react';
import { useEffect , useState } from 'react';
import Todo from "./Todo"
import   {settngalltodo,deletetodo,addtodo,updatetodo} from"./control"



function App() {

  const [todos, settodo] = useState([])


  useEffect(() => {
    settngalltodo(settodo)

    
  }, [])

  return(<div>

    <div className='topbar'><h1 >ToDo</h1></div>


    <div className='inputholder'>
      <input id = "input"className='input' placeholder='Addtodos'></input>
      <div className='button'onClick={()=>{
        addtodo(settodo ,document.getElementById("input").value)
        document.getElementById("input").value = ""
      }}>add</div>
    </div>

    
    {todos.map((item) =><Todo _id = {item._id} key = {item._id}  text = {item.text} Deletetodo = {()=>{deletetodo(settodo,item._id)} } Edittodo = {() =>{
      var ele = document.getElementById(item._id);
      ele.contentEditable = "true";
      var deletebtn = document.getElementById(`${item._id}icon`);
      deletebtn.classList.remove("icon");
      deletebtn.classList.add("iconno");
      var inserbtn = document.getElementById(`${item._id}icon2`);
      inserbtn.classList.remove("icon");
      inserbtn.classList.add("iconno");
      var checkbtn = document.getElementById(`${item._id}tick`);
      checkbtn.classList.remove("iconno");
      checkbtn.classList.add("icontick");

      
    }} 
    Updatetod={()=>{
      var ele = document.getElementById(item._id);
      ele.contentEditable = "false";
      var deletebtn = document.getElementById(`${item._id}icon`);
      deletebtn.classList.remove("iconno");
      deletebtn.classList.add("icon");
      var inserbtn = document.getElementById(`${item._id}icon2`);
      inserbtn.classList.remove("iconno");
      inserbtn.classList.add("icon");
      var checkbtn = document.getElementById(`${item._id}tick`);
      checkbtn.classList.remove("icontick");
      checkbtn.classList.add("iconno");
      updatetodo(settodo,ele.innerHTML,item._id);
    }}
    />)}
    



    
  </div>);
}

export default App;

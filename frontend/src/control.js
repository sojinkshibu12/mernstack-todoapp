import axios from 'axios'
const baseurl = "https://mernstack-todoapp.vercel.app"



const settngalltodo = (settodo) => {
    axios
    .get(baseurl)
    .then(({data}) => {
        settodo(data)
    });

}

const deletetodo = (settodo , id) => {
    axios
    .post(`${baseurl}/delete` , {_id:id})
    .then(({data}) => {

        settngalltodo(settodo)
    });

}

const addtodo = (settodo , Text) =>{
    axios
    .post(`${baseurl}/save`, {text:Text})
    .then(({data})=>{
        settngalltodo(settodo)
    });
}


const updatetodo = (settodo,Text,id) =>{
    axios
    .post(`${baseurl}/update`, {_id:id}, {text:Text})
    .then(({data})=>{
        settngalltodo(settodo)
    });
}
export  {settngalltodo , deletetodo,addtodo,updatetodo}   

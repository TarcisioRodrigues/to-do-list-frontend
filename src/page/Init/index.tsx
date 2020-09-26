import React, { useState,FormEvent, } from 'react';
import {FiTrash2} from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
export default function Task(){
  interface Task {
    id: string;
   plan:string
  }
  const[plan,setPlan]=useState('');
  const[tasks,setTasks]=useState<Task[]>([])
 console.log(tasks)
  async function handleNewTask(event:FormEvent){
    event.preventDefault();
    try{
        const response=await api.post('/task/create',{plan})
          setTasks(response.data)
        
    }catch(err){
      alert('Falha para marcar');

    }
  }
  async function handleDeleteTask(id:string):Promise<void>{
    try{
      await api.delete(`task/${id}`,{
      
      });
      const taskdelete= tasks.filter(task=>task.id!==id);
      setTasks(taskdelete)
     
    }catch(err){
      alert('Erro ao deletar');

    }
  }
  
 
 
  return(
  <div className="task-container">
    <section className="form">
      <form  onSubmit={handleNewTask}>
        <h1>Todo List</h1>
        <input placeholder = "Digite suas ideias" value={plan} required
        onChange={(event)=>setPlan(event.target.value)}/>
       <ul>
         {tasks&&tasks.map(task =>(
           <li>
            {task.plan}
            <button  onClick={() => handleDeleteTask(task.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3"/>
            </button>
           </li>
           
         ))}
       </ul>
       <div className="button">
         <button type="submit">Marcar</button>
         
         </div> 
      </form>
    </section>
   
  </div>
  );
}
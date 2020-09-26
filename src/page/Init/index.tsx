import React, { useState,FormEvent, } from 'react';
import api from '../../services/api';
export default function Task(){
  interface Task {
    id: string;
   
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
      alert('Erro ao deletear');

    }
  }
  
 
 
  return(
  <div className="logon-container">
    <section className="form">
      <form  onSubmit={handleNewTask}>
        <h1>Digite uma tarefas</h1>
        <input placeholder = "Digite sua tarefas" value={plan} 
        onChange={e=>setPlan(e.target.value)}/>
       <ul>
         {tasks&&tasks.map(task =>(
           <li>
            task.{plan}
            <button onClick={()=>handleDeleteTask(task.id)} type="button"></button>
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
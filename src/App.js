import React, { useState } from 'react';
import './App.css';
import Input from './Componet/Input/input';
import ToDoList from './Componet/ToDoList/ToDoList';

function App() {
  const [ taskList, setTaskList] = useState([])

  const addTaskList = (title)=>{
    setTaskList((prevTaskList)=>{
      return[
        ...prevTaskList,
        {id:Math.random().toString(), title:title}
      ];
    });
  }
  return (
    <React.Fragment>
      <h1>To Do Task</h1>
      <div className="section">
        <Input onAdd={addTaskList}></Input>
      </div>
      <div className="section1">
        <ToDoList list={taskList}></ToDoList>
      </div>
    </React.Fragment>
  );
}

export default App;

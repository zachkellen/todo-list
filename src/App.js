import { useState } from 'react';
import './App.css';
import ToDo from './components/todo';
import Form from './components/form';

function App() {
  const [todos, setTodos] = useState([])

  const onCheckBox = (idx) => {
    const temp = {
      ...todos[idx],
      isComplete: !todos[idx].isComplete
    }
    setTodos([
      ...todos.slice(0,idx),
      temp,
      ...todos.slice(idx+1)
    ])
  }

  const onDeleteHandler = (idx) => {
    setTodos([
      ...todos.slice(0,idx),
      ...todos.slice(idx+1)
    ])
  }

  return (
    <div className="App">
      <h1>My To-Do List:</h1>
      <Form todos={todos} setTodos={setTodos}/>
      {
        todos.map((item, idx)=>{
          return <ToDo onDeleteHandler={onDeleteHandler} onCheckBox={onCheckBox} description={item.description} isComplete={item.isComplete} key={idx} idx={idx} />
        })
      }
    </div>
  );
}

export default App;

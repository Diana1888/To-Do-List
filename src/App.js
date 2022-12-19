import './App.css';
import list from "./list.jpg"
import { ToDoList } from './ToDoList';


function App() {
  return (
    <div className='app'>
      <div className='container'>
        <img src={list} width="420px" alt='list'/>
      </div>
      <div className='container'>
        <h1>To Do List</h1>
      </div>
      <ToDoList/>
    </div>
  );
}

export default App;

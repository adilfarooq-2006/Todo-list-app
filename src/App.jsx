import { use, useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';
uuidv4();

function App() {

  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")
  const [showfinished, setshowfinished] = useState(true)

  useEffect(() => {
    let todosString = localStorage.getItem("todos")
    if(todosString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])
  
  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinshed = (e) => {
    setshowfinished(!showfinished)
  }
  
  

  const handleEdit = (e, id)=>{
    let t = todos.filter(i=>i.id === id)
      setTodo(t[0].todo);
      let newTodos = todos.filter(item=>{
        return item.id !== id;
      })
      setTodos(newTodos)
      saveToLS()
  }

  const handleDelete = (e, id)=>{
    let newTodos = todos.filter(item=>{
      return item.id !== id;
    })
    setTodos(newTodos)
    saveToLS()
  }

  const handleAdd = ()=>{
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo("")
    saveToLS()
  }
  
  const handleChange = (e)=>{
    setTodo(e.target.value)
  }

  const handleCheckBox = (e) => {
    console.log(e, e.target)
    let id = e.target.value;
    console.log(id)
    let index = todos.findIndex(item=>{
      return item.id == id;
    })
    console.log(index)
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;  
    setTodos(newTodos)
    console.log(newTodos)   
    saveToLS()
  }
  

  return (
    <>
      <Navbar/>
      <div className="md:container bg-blue-300 mx-auto md:w-[50vw] px-5 py-3 md:my-4 rounded-xl md:h-[80vh] h-[92vh] overflow-y-auto">
      <h1 className='text-xl font-bold text-center my-2 text-blue-900'>iTASKS - Manage your all tasks at one place</h1>
      <h1 className='text-l font-bold text-blue-900'>Add a Todo</h1>
      <div className="addTodo flex flex-col gap-1">
        <input onChange={handleChange} value={todo} className='bg-blue-200 p-1 rounded-2xl px-2 w-full' type="text" placeholder='Enter a todo - Minimum 3 characters'/>
        <button onClick={handleAdd} disabled={todo.length<=2} className='bg-blue-700 text-white p-0.5 px-4 rounded-xl hover:bg-blue-900 font-medium transition-all disabled:bg-red-600 '>Save this Todo</button>
      </div>
      <input className='my-4' onChange={toggleFinshed} type="checkbox" checked={showfinished} /> Show Finished
      <div className="h-[1.5px] bg-blue-700"></div>
      
      <div className="todos">
      <h1 className='text-l font-bold text-blue-900'>Your Todos</h1>
        {todos.length==0 && <div className='md:mx-60 mx-30' >No Todos to Display</div>}
        {todos.map(item => {
         return (showfinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between items-center my-2 ">
          <div className='flex gap-5'>
          <input onChange={handleCheckBox} value={item.id} checked={item.isCompleted} type="checkbox" />
          <div className={item.isCompleted?"line-through":""} >{item.todo}</div>
          </div>
          <div className="button  flex gap-2 text-white">
            <button onClick={(e)=>handleEdit (e, item.id)} className='bg-blue-700 p-0.5 px-4 rounded-xl hover:bg-blue-900 font-medium transition-all'><MdEdit /></button>
            <button onClick={(e)=>{handleDelete (e, item.id)}} className='bg-blue-700 p-0.5 px-4 rounded-xl hover:bg-blue-900 font-medium transition-all'><MdDelete /></button>
          </div>
        </div>
          })}
      </div>
      
      </div>
    </>
  )
}

export default App

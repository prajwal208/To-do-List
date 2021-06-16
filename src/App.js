import React,{useState,useEffect} from 'react'
import './App.css';
import Home from "./componets/Home.js";
import AddTodo from "./componets/AddTodo.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import TodoList from './componets/TodoList.js';


function App() {


const [todos,setTodos] =useState([])

 const addstodo = (task,date) => {
   let todo = {
     task:task,
     date:date,
   } 

   setTodos([...todos,todo])
  
 }

 let deletetodo = (todo) => {
   setTodos(todos.filter((e) => {
     return e!== todo
   }))
 }

 useEffect(() => {
   const retrivetodos = JSON.parse(localStorage.getItem("todolist"))
   setTodos(retrivetodos)
 },[])

 useEffect(() => {
   localStorage.setItem("todolist",JSON.stringify(todos))
 })



  return (
    <>
   <Router>
      <Switch>
     
     <Route exact path="/">
     <Home/>
     </Route>

        <Route exact path="/addtodo">
       <AddTodo addstodo={addstodo} />
       <TodoList todos={todos} deletetodo={deletetodo} />
       </Route>
       
       </Switch>
       </Router>

     
    </>
  );
}

export default App;

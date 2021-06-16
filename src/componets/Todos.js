import React from 'react'
import './style.css'

export default function Todos({ todo,deletetodo }) {
    return (
        <>
            
                <div className="border">
                    <p>{todo.task}</p>
                    <p>{todo.date}</p>
                    <button type="button" class="btn btn-danger" id="btn2"
                    onClick={() => {deletetodo(todo)}}>Delete</button>
                </div>
               
            
        </>
    )
}

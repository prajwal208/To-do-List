import React from 'react'
import Todos from "./Todos.js";





export default function TodoList({ todos, deletetodo }) {
    return (
        <>
           
            <div className="container2">
                <div className="content2">
                    {todos.map((todo) => (
                        <Todos todo={todo} deletetodo={deletetodo} />

                    ))}
                </div>
            </div>


        </>
    )
}


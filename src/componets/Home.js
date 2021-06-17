import React from 'react'
import image1 from './image/giff.gif'
import './style.css'
import { Link } from "react-router-dom"


export default function Home() {

    
    

    return (
        <div>
            <div className="container">
                <div className="content">
                    <img src={image1} id="image1" alt={image1} />
                    <h2>Manage Your Daily Todo</h2>

                    <Link to="/todoList">
                        <button type="button" class="btn btn-primary" id="btn1"
                        ><span>&#8594;</span></button>
                    </Link>
                </div>

               

             
            </div>
        </div>
    )
}

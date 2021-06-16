import React,{useState} from 'react'

function AddTodo({addstodo}) {

   
      
        
    const [task,setTask]=useState("")
    const [date,setDate]=useState("")   
     
    const submit = (e) => {
       
        e.preventDefault();
        if(task==="" || date === ""){
            alert("task and date cannot be empty")
        }

        else{
            addstodo(task,date)
            setTask("")
            setDate("")
        }
    }

   
    
   
    
   
   return (
        <>
            <div className="container1">
                <div className="content1">
                    <header>To-Do </header>


                    <form onSubmit={submit}>
                        <div className="mb-3" id="input">
                            <label for="exampleInputEmail1" className="form-label">Add Task</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                            onChange={(e) => {setTask(e.target.value)}} value={task}/>
                            
                        </div>
                        <div className="mb-3" id="space" id="input">
                            <label for="exampleInputPassword1" className="form-label">Add Date</label>
                            <input type="date" className="form-control" id="exampleInputPassword1"
                            onChange={(e) => {setDate(e.target.value)}} value={date} />
                        </div>

                        <button type="submit" class="btn btn-primary" id="btn5"
                        onSubmit={addstodo}>Add Task</button>
                    </form>
                      
                     <div className="headings">
                    
                    
                    <h3>this is your to-do-list.</h3>
                    
                    </div> 
                </div>
            </div>
        </>
    )
}

export default AddTodo

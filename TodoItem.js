import React from 'react'

const TodoItem = (todo, onDelete) => {
  return (
  <div>
       <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn_sm btn_danger" onClick={()=>{onDelete(todo)}}
      >Danger</button>
  </div>
    
  
  )
}

export default TodoItem

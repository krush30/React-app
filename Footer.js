import React from 'react'
import './footer.css'


const Footer = () => {
  let footerStyle ={
    position: "relative",
    top: '70vh',
    width: "100%",
    border: "2px solid red" 
  }

  return (
    <footer className='bg-dark text-light my-3' style={footerStyle}>
      <p className="text_center">
      
      Copyright &copy; MyTodosList.com</p>
    </footer>
  )
}

export default Footer



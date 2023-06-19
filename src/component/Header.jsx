import React, { useState, useEffect } from 'react'
import './Header.css'

function Header(props) {
  const [isclicked,setIsclicked] = useState(false) 

  function changeColor(){
    setIsclicked(!isclicked)
    console.log(isclicked)
  }
  useEffect = (()=> {
    console.log('useEffectHook is added to this project')
    }, [isclicked])
  
  const buttonStyle = {
    backgroundColor: isclicked ? 'red' : 'white',
    color: isclicked ? 'white': 'green', 
    padding:'4px',
    borderRadius: '20%'
  }
  function deletePost(elemenetId){
      props.getId(elemenetId)
  }

  return (
    <div className="container">
        <h4>{props.id}</h4>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <button style={buttonStyle} onClick={changeColor}>Like the post</button>
        <button style = {
          {padding:'4px',
           borderRadius: '20%'
           }
          }
          onClick={() => deletePost(props.id)}>Delete the post</button>
        
    </div>
  )
}

export default Header
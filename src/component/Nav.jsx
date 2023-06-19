import React from 'react'

function Nav() {
    const navStyle = {
      
        backgroundColor:'#111',
        color:'#fff',
        height:'auto',
        fontWeight:'bolder',
        textAlign:'center',
        

    }
  return (
    <div className='nav' style={navStyle}>
        <h1 style={{padding:'5px'}}>Top Courses</h1>
    </div>
  )
}

export default Nav
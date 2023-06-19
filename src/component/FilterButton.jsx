import React from 'react'

function FilterButton({name,getCategory}) {
  const filter_btn = {
    border:'1px solid #111',
    padding:'3px 5px',
    // margin:'0 auto',
    backgroundColor:'black',
    color:'#fff',
    borderShadow: '2px 4px #111',
    fontFamily:'Verdana, Arial, Helvetica, sans-serif',
    cursor:'pointer'
  }
  function handleClick(){
    console.log(name)

    getCategory(name)
    console.log('clicked')
  }
    return (
    <button onClick = {handleClick} style = {filter_btn} className='filter-btn'>
        {name}
    </button>
  )
}

export default FilterButton
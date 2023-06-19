import React from 'react'

import Infocard from './Infocard'
function Catergory(props) {
    const category_container = {
        display:'flex',
        gap:'5px',
        alignItem:'center',
        flexWrap:'wrap',
        justifyContent:'center',
        marginTop:'20px',
        marginLeft: '5%',
        marginRight: '5%',
    }
    return (
    <div style = {category_container} className='catergory_container'>
        {
        props.catergory.map(e => <Infocard id = {e.id} nm={e.title} des = {e.description} sc = {e.image.url}></Infocard>)
        }
    </div>
  )
}

export default Catergory
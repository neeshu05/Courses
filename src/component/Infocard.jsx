import React, { useState } from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc"

function Infocard({id,sc,nm,des}) {
    const Info_container = {
        display:'flex',
        flexDirection:'column',
        width:'30%',
        height:'360px',
        border:'1px solid #111',
        objectFit:'cover',
        marginLeft: 'auto',
        marginRight: 'auto',
        overflow:'overlay',
        position:'relative'
    }
const [changeC,setChangeC] = useState(false)
function changeColor(){
    setChangeC(!changeC)
}

  return (
    <div style = {Info_container} className='Info_container'>
        <img style={{
            maxWidth:'100%',
            maxHeight:'100%',
            padding:'2px',
            position:'relative'
        }} src={sc} alt = 'product_image'></img>
        <button style ={{position:'absolute',right:'0px',bottom:'40%',border:'1px solid #111',borderRadius:'50%'}}onClick = {changeColor}>
        {
        changeC? <FcLike fontSize={'1.75rem'} />
        :<FcLikePlaceholder fontSize={'1.75rem'}></FcLikePlaceholder>
}
        </button>
        

        <h2 style={{padding:'1px 5px',objectFit:'contain',fontSize:'1rem'}}>{nm}</h2>
        <p style={{padding:'0px 5px'}}>{des}</p>

    </div>
  
    )
}

export default Infocard
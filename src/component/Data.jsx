import React, { useState } from 'react'

function Data(props) {

    const [newName,setName] = useState('')
    const [newDescription,setNewDescription] = useState('')
    const cont = {
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        maxWidth: '100%',
        justifyContent: 'space-between',
        margin: '10px',
        padding: '5px'
    }

    function NameHandler(event){
        setName(event.target.value)
    }

    function descriptionHandler(event){
        setNewDescription(event.target.value)
    }

    function getData(event){
        event.preventDefault();

        const data = {
            name: newName,
            description: newDescription,
        }
        props.item(data)
        setName('')
        setNewDescription('')
    }
    return (
        <div style={cont}>
            <form onSubmit={getData}>
                <input type='text' value = {newName} onChange={NameHandler}></input>
                <input type='text' value = {newDescription} onChange={descriptionHandler}></input>
                <button type='submit'>Add</button>

            </form>

        </div>
    )
}

export default Data
import React, { useState } from 'react'

const TwoWayBinding = () => {
    
    const [title, setTitle] = useState('')
    
    const changing = (e) => {
        e.preventDefault()
        console.log("form submitted by ",title)
        setTitle('')
    }
    return (
        <div>
        <form onSubmit={(e) => {
            changing(e)
        }}>
            <input type="text" placeholder ="Enter Name" onChange={(e) => {setTitle(e.target.value)}} value={title}/>
            <button>Submit</button>
        </form>
        </div>
    )
}

export default TwoWayBinding

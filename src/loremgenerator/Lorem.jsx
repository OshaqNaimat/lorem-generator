import React, { useState } from 'react'
import { data } from './Data'

const Lorem = () => {

    const [number,setNumber] = useState('')
    const [lorem,setLorem] = useState([])
const generate = (e)=>{
    e.preventDefault()
     let sliceData= data.slice(0,number)    
     setLorem(sliceData)
}

  return (
    <>
    <div className="">
        <h1>Lorem generator</h1>
        <form action="">
            <input value={number} onChange={(e)=>setNumber(e.target.value)} type="text" placeholder='e.g 3'  />
            <button>Generate</button>
        </form>
    </div>

    <div className="">
        {lorem.map((item,index)=>{
            return <p> {item} </p>
        })}
    </div>
    </>
  )
}

export default Lorem
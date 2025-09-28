import React from 'react'

const Lorem = () => {

    const [number,setNumber] = useState('')
    const [lorem,setLorem] = useState([])
const generate = (e)=>{
    e.preventDefault()

}

  return (
    <>
    <div className="">
        <h1>Lorem generator</h1>
        <form action="">
            <input value={number} onClick={()=>setNumber(e.target.value)} type="text" placeholder='e.g 3'  />
            <button>Generate</button>
        </form>
    </div>
    </>
  )
}

export default Lorem
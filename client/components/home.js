import React, {useState} from 'react'
import Head from './head'
 import {history} from '../redux'
// import wave from '../assets/images/wave.jpg'



const Home = () => {
 const [name, setName] = useState('')
const click = () => {
  return history.push(`/${name.trim()}`)
}
   
  return (
    <div>
      <Head title="Hello" />
      <img alt="wave" src="images/wave.jpg" />
      <div> Hello World Dashboard  </div>
      
       <div>
        <input type='text' onChange={(e)=>{setName(e.target.value)}} value={name}/>
       </div>
       <div>
        <button type='button' onClick={click}>Go</button>
       </div>
        <div>
          ------------------
        </div>
    </div>
  )
}

Home.propTypes = {}

export default Home

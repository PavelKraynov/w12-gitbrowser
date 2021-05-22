import React from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import Markdown from 'react-markdown'
import Head from './head'
import Header from './header'


const Readme = () => {

  return (
    <div>
      <Head title="Readme" />
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
    
          Read me
          
        </div>
      </div>
    </div>
  )
}

Readme.propTypes = {}

export default React.memo(Readme)

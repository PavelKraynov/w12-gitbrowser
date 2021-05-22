// import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  
  return (
    <div>
      <div className="flex flex-col justify-center ">
        <div
          id="repository-name"
          className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          {props.name}
         
          <div id="go-back">
            <Link to="/">Go back</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {}

export default React.memo(Header)

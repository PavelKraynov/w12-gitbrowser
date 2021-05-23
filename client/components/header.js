// import axios from 'axios'
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { userName } = useParams()
  return (
    <div>
      <div className="flex flex-col justify-center ">
        <div
          id="repository-name"
          className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10"
        >
          {userName}
          <div className="flex justify-between w-full">
            <div id="go-back" className="border rounded py-1 px-2">
              <Link to="/">Go back</Link>
            </div>
            <div id="go-repository-list" className="border rounded py-1 px-2">
              <Link to={`/${userName}`}>Go to repo list</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {}

export default React.memo(Header)

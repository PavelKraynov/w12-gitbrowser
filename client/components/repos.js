import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Head from './head'
import Header from './header'


const Repos = () => { 
  const [users, setUsers] = useState([])
  const { userName } = useParams()
  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/repos`)
    .then((it) => setUsers(it.data))
    return (
      ()=>{}
    )
  }, [userName])
  return (
    <div>
      <Head />
      <Header name={userName} />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          hello repos
        </div> 
        <div>
          <ol className='list-decimal list-inside'>
          {users.map(user => {
           return ( 
           <div key={user.id}>
             <Link to={`/${userName}/${user.name}`}>
             {user.name}
             </Link>
           </div>
           )
          })
          }
          </ol>
          </div>
      </div>
    </div>
  )
}

Repos.propTypes = {}

export default React.memo(Repos)

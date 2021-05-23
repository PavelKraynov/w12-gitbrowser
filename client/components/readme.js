import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Markdown from 'markdown-to-jsx'
import Head from './head'
import Header from './header'

const Readme = () => {
  const [text, setText] = useState('')
  const { userName, repositoryName } = useParams()
  console.log(setText)
  useEffect(() => {
    axios(
      `https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`
    ).then((it) => setText(it.data))
    .catch(() => setText('No readme file'))
    return () => {}
  }, [])
  return (
    <div>
      <Head title="Readme" />
      <Header userName={userName} />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          <Markdown>{text}</Markdown>
        </div>
      </div>
    </div>
  )
}

Readme.propTypes = {}

export default React.memo(Readme)

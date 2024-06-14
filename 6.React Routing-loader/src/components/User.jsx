import React from 'react'
import {useParams} from 'react-router-dom'

const User = () => {
    const {userid="John"}=useParams()
  return (
    <div>
      <h1>Hello User : {userid}</h1>
    </div>
  )
}

export default User;
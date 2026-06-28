import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <div>
        <div className='flex justify-center bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
    </div>
  )
}

export default User

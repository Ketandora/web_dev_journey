import React, { useEffect, useState } from 'react'
import { useLoaderData} from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Ketandora')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

  return (
    <div>
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Following: {data.following}
        <div className='flex justify-center'>
            <img  src= {data.avatar_url}  alt="profile" width={300}/>
        </div>
      </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Ketandora')
    return response.json()
}
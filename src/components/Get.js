import React, { useEffect,useState} from 'react'
// import Create from './Create'

const Get = () => {
    const[info,setInfo]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>response.json())
        .then((data)=>setInfo(data));
    },[])
    console.log(info);
  return (
    <div>
        {
            info.map((getPosts,index)=>{
                return(
                    <div key={index}>
                        <h1>{getPosts.title}</h1>
                        <button>view</button>
                        <button>delete</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Get

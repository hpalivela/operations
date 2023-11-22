import React, { useEffect, useState } from 'react'

const Create = () => {
    const[create,setCreate]=useState([]);
    const newObj={
        userId:1,
        title:'New post Title',
        body:'NEW POST IS CREATING',
    }
    const newObj2={
        userId:2,
        title:'New post Title2',
        body:'NEW POST IS CREATING2',
    }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(newObj)
        }).then((response)=>response.json()).then((data)=>setCreate(data))
        .catch((error)=>console.log(error))
    },[]);
    console.log(create);
  return (
    <div>
      {
        <h1>{create.title}</h1>
      }
    </div>
  )
}

export default Create

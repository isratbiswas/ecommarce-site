import React, { useEffect, useState } from 'react'

const UsersList = () => {
    const [users, setUsers]=useState([])
    const[loading, setLoading]=useState(true)
    const [error, setError]= useState("");
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users?_limit=6`)
        .then(res=>res.json())
        .then(data=>{
            setUsers(data);
            console.log(data)
            setLoading(false);
            setError("")
        })
        .catch((error)=>{
            setError(error.message)
            setLoading(false);
            setUsers([])
        })
    },[])
    if(loading){
        return<div><h2>loading the data.............</h2></div>
    }
    if(error){
        return<div><h3>{error}</h3></div>
    }
    return (
        <div>
           <h2>Users List</h2> 
           {
            users.map((user) => <li key={user.id}>{user.name}</li>)
           }
        </div>
    )
}

export default UsersList
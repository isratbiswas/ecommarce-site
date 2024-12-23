import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

const PostList = () => {
    const [posts,setPosts] = useState([]);
    const [loading, setLoading] =useState(true);
    const [error, setError] =useState("");
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(res=>res.json())
        .then(data=>{
            setPosts(data);
            setLoading(false);
            setError("")
        })
        .catch((error)=>{
            setError(error.message)
            setLoading(false)
            setPosts([[]])
        })
    },[])
    if(loading){
        return <div><h2>loading...</h2></div>
    }
    if(error){
        return<div>{error}</div>
    }
    return (
        <div>
           <h2>Posts : {posts.length}</h2> 
           <ul>
            {
                posts.map((post)=>{
                return <li key={post.id} ><Link to='/'>{post.title}</Link></li>
                }
            )
            }
           </ul>
        </div>
    )
}

export default PostList
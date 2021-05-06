import React, { useEffect, useState } from 'react';
import Post from '../Posts/Post';

const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => setPosts(json))
    }, [])
    return (
        <div>
            <h3>This is home</h3>
            <h3>I have got {posts.length} posts</h3>
            {
                posts.map(x => <Post post={x}></Post>)
            }
        </div>
    );
};

export default Home;
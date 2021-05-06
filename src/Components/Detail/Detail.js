import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const Detail = () => {
    let {id}  = useParams()
    const [detail, setDetail] = useState({})
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(json => setDetail(json))
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response => response.json())
        .then(json => setComments(json))
    }, [])
    const {title, body} = detail
    return (
        <div>
            <h3>This is detail {id}</h3>
            <p>title : {title}</p>
            <p>body: {body}</p>
            <p>Number of comments : {comments.length}</p>

            {
                comments.map(x => <Comment comment= {x}></Comment>)
            }
        </div>
    );
};

export default Detail;
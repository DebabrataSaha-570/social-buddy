import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id, title, body} = props.post

    let history = useHistory();
    const showComments = (id) => {
        const url = `post/${id}`
        history.push(url)
    }
    return (
        <div>
            <h3> id : <strong>{id}</strong> {title}</h3>
            <p>{body}</p>
            <button onClick={() => showComments(id)}>Show comments</button>
        </div>
    );
};

export default Post;
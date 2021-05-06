import React from 'react';

const Comment = (props) => {
    const {name, email} = props.comment
    return (
        <div>
            <h3>This is comment component</h3>
            <p>name: {name}</p>
            <p>Email : {email}</p>
        </div>
    );
};

export default Comment;
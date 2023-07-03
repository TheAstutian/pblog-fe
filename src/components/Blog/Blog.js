import React from 'react';

const Blog =(props)=>{
    return (
        <>
            <div>
                <h1>{props.title}</h1>
            </div>
            <div>
                <span>{props.body}</span>
            </div>
        </>
    )
}

export default Blog; 
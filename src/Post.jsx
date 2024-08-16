import React from 'react'

export default function Post(props) {
    return (
        <>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </>
    )
}

import React from 'react';
import Chapter from '../Chapter/Chapter';

const Display = (props) => {
    return (
        <div style={{border: "2px solid gray", padding: '10px', margin: "15px"}}>
            <h2>Name: {props.name}, Pages: {props.pages}</h2>
            <Chapter chapter={props.pages}></Chapter>
        </div>
    );
};

export default Display;
import React from 'react';

const Chapter = (props) => {
    return (
        <div style={{border: "2px solid pink", padding: '10px', margin: "15px"}}>
           <h4>Chapter page: {props.chapter}</h4> 
        </div> 
    );
};

export default Chapter;
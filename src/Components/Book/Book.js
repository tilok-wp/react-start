import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Book = () => {
    const [pages , setPages] = useState(0);
    const increasePage =() =>{
        const newPage = pages +1
        setPages(newPage) // This is asynchronous
        // console.log(pages)
    }

    // useEffect( () =>{
    //     console.log('Run only one time')
    // }, [])
    // useEffect( () =>{
        //     console.log('If not set ,[], it rendar every time')
        // })
        
        useEffect( () =>{
            console.log('Run dependency on chages [Pages] ')
            console.log(pages)

        }, [pages])


    return (
        <div style={{border: "2px solid green", padding: '10px'}}>
            <h1>This is my Favourit book</h1>
            <h3>Current page: {pages}</h3>
            <button onClick={increasePage}>Page increase</button>
            <Display name="Human Book" pages={pages}></Display>
        </div>
    );
};

export default Book;
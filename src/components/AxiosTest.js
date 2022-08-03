import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react'; 
import axios from 'axios';

const AxiosTest = () => {
    
    const [ test, setTest ] = useState('#ffffff');

    useEffect(() => {
        
        function changeBackground() {
            let newColor = '#';
            let hexadecimalCharacters = 'abcdef0123456789';
            for (let i = 0; i <= 5; i++) {
                let newIndex = Math.floor(Math.random() * 16);
                newColor += hexadecimalCharacters[newIndex];
            }
            return setTest(newColor);
        }

        setInterval(() => {
            changeBackground()
        }, 5000);

    }, [test])

   



    return (
        <div style={{backgroundColor: test}} >
            Hello {test}
            
            
        </div>
    );
}

export default AxiosTest;

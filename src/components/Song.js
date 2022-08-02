import React from 'react';
import { useState } from 'react';
import './style.css';
import UpVoteButton from './UpVoteButton';

const Song = (props) => {

    const [ counter, setCounter ] = useState(0);

    const increaseUpvote = () => {
        console.log('Hello');
        if (!counter) {
            setCounter(prevCount => prevCount + 1);
        } else {
            setCounter(prevCount => prevCount - 1);
        }
        
    }

    return (
        <div className="songStyling">
            <li>{props.songTitle}</li>
            <UpVoteButton handleChange={increaseUpvote} />
            <span>{counter}</span>            
        </div>
    );
}

export default Song;
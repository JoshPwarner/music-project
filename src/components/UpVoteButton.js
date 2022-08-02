import React from 'react';
import './style.css';


const UpVoteButton = ({handleChange}) => {
    let newButtonId = '';
    for ( let i = 0; i < 19; i++) {
        newButtonId += Math.floor(Math.random() * 10);
    } 
    return (
        <div className='checkboxContainer'>
            <input className="hideCheckbox" id={newButtonId} onChange={handleChange} type="checkbox"/>
            <label className="checkboxLabel" htmlFor={newButtonId}>Upvote!</label>
        </div>
    );
}

export default UpVoteButton;

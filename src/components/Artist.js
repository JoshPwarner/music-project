import React from 'react';
import Genre from './Genre';
import Intro from './Intro';
import { useState } from 'react';


const Artist = ({artist:{name, genre, intro, albums}}) => {
    
    return (
        <div>
            <h2>Name: {name}</h2>
            <Genre genre={genre} />
            <Intro intro={intro}/>
            
        </div>
    );
}

export default Artist;

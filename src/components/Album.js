import React from 'react';
import SongList from './SongList';
const Album = ({album}) => {
    
    return (
        <div>
            <h3>{album.name}</h3>
            <p>{album.date}</p>
            <SongList songs={album.songs} />
            <img src={album.artwork}>
                
            </img>
        </div>
    );
}

export default Album;

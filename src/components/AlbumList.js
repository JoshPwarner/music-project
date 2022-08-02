import React from 'react';
import Album from './Album';

const AlbumList = ({albums}) => {
    return (
        <div>
            {
                albums.map(album => 
                    <Album album={album} />
                    
                    )
            }
            
        </div>
    );
}

export default AlbumList;

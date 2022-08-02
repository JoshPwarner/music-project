import React from 'react';
import { useState } from 'react';
import Song from './Song';
import './style.css';

const SongList = ({songs}) => {
    
   
    return (
        <ul className='songListStyling'>
            {
                songs.map((song) => 
                    <Song song={song} />
                    
            )
            }
        </ul>
       
    );
}


// const Songs = () => {
//     const [ bool, upvote] = useState(false);

//     const zero = 0;

//     const changeVote = () => {
//         upvote(prevState => !prevState);
//         if(prevState) {
//             parseInt(zero.textContent) += 1;
//         } else {
//             parseInt(zero.textContent) -=1;
//         }

//     }


//     return (
//         <span>{zero}</span>
        
//     );
// }

 

export default SongList;

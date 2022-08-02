import './App.css';
import Artist from './components/Artist';
import Album from './components/Album';
import Intro from './components/Intro';
import SongList from './components/SongList';
import UpVoteButton from './components/UpVoteButton';


const eminem = {
  name:"Eminem",
  genre: "rap",
  intro: "This is just a test to check if my JSX works",
  albums: [{name: "Curtain Call",   
            date: "December 6, 2005",
            songs: ['Lose Yourself', 'Like Toy Soliders'],
            artwork: 'https://m.media-amazon.com/images/I/7180kSiluwL._AC_SY450_.jpg'
           },
           {
            name: "The Eminem Show",
            date: "May 26, 2002",
            songs: ['Without Me', "Cleanin' Out My Closet"],
            artwork: "https://upload.wikimedia.org/wikipedia/en/3/35/The_Eminem_Show.jpg"

           }
          ]
  
}

// const introEminem = "This is just a test to check if my JSX works";

// const songsEminem = ['Lose Yourself', 'Like Toy Soliders'];


function App() {
  return (
    <div>
      <Artist artist={eminem}>        
      </Artist>
      
      
    </div>
  );
}

export default App;

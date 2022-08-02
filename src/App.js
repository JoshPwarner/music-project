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
            date: "",
            songs: [],
            artwork: 'https://m.media-amazon.com/images/I/7180kSiluwL._AC_SY450_.jpg'
           },
          ]
  
}

const introEminem = "This is just a test to check if my JSX works";

const songsEminem = ['Lose Yourself', 'Like Toy Soliders'];


function App() {
  return (
    <div>
      <Artist name="Eminem">
        <Album url="https://m.media-amazon.com/images/I/7180kSiluwL._AC_SY450_.jpg"/>

        
        <Intro intro={introEminem}/>

        <SongList songs={songsEminem}/>

        

        
      </Artist>
      
      
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import Cat from './sounds/cat-meow.wav'
import Cow from './sounds/cow-moo.wav'
import Dog from './sounds/dog-barking.wav'
import Duck from './sounds/ducks1-32839.mp3'
import Goat from './sounds/goat-bah.mp3'
import Horse from './sounds/horse.wav'
import Pig from './sounds/pig-grunt.mp3'
import Roaster from './sounds/roaster.wav'
import Sheep from './sounds/sheep-bah.mp3'

function App() {
  const data = [
    { src: Cat, id : 'cat', letter: 'Q' },
    { src: Cow, id : 'cow', letter: 'W' },
    { src: Dog, id : 'dog', letter: 'E' },
    { src: Duck, id : 'duck', letter: 'A' },
    { src: Goat, id : 'goat', letter: 'S' },
    { src: Horse, id : 'horse', letter: 'D' },
    { src: Pig, id : 'pig', letter: 'Z' },
    { src: Roaster, id : 'roaster', letter: 'X' },
    { src: Sheep, id : 'sheep', letter: 'C' }
  ];

  const [display, setDisplay] = useState('');

  const handleDisplay = (display) => {
    setDisplay(display);
  };

  const playAudio = (src) => {
    const audio = new Audio(src);
    audio.play();
  };

  return (
    <div id='drum-machine'>
      <div id='display'>
        <button onClick={() => playAudio(data[0].src)}>Play Audio</button>
      </div>
    </div>
  );
}

export default App;

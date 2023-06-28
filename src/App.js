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

import CatPic from './animal-pictures/cat.jpg'
import CowPic from './animal-pictures/cow.jpg'
import DogPic from './animal-pictures/dog.jpg'
import DuckPic from './animal-pictures/ducks.jpg'
import GoatPic from './animal-pictures/goat.jpg'
import HorsePic from './animal-pictures/horse.jpg'
import PicPics from './animal-pictures/pigs.jpg'
import RoasterPic from './animal-pictures/roaster.jpg'
import SheepPic from './animal-pictures/sheep.jpg'
import Animals from './animals';



function App() {
  const data = [
    { src: Cat, id : '1', letter: 'Cat', pictureSrc: CatPic },
    { src: Cow, id : '2', letter: 'Cow', pictureSrc:CowPic },
    { src: Dog, id : '3', letter: 'Dog', pictureSrc:DogPic },
    { src: Duck, id : '4', letter: 'Duck', pictureSrc:DuckPic },
    { src: Goat, id : '5', letter: 'Goat', pictureSrc:GoatPic },
    { src: Horse, id : '6', letter: 'Horse', pictureSrc:HorsePic },
    { src: Pig, id : '7', letter: 'Pig', pictureSrc: PicPics },
    { src: Roaster, id : '8', letter: 'Roaster', pictureSrc:RoasterPic },
    { src: Sheep, id : '9', letter: 'Sheep', pictureSrc:SheepPic }
  ];
//   const animalData =[

//     {id: 1, src: CatPic},
//     {id: 2, src: CowPic},
//     {id: 3, src: DogPic},
//     {id: 4, src: DuckPic},
//     {id: 5, src: GoatPic},
//     {id: 6, src: HorsePic},
//     {id: 7, src: PicPics},
//     {id: 8, src: RoasterPic},
//     {id: 9, src: SheepPic}

// ]
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
        {data.map((item) => (
          
             <Animals 
             key={item.id} 
             src={item.src}
             pictureSrc ={item.pictureSrc}
             playAudio = {playAudio} 
             letter = {item.letter}
             data= {data}
             />
        ))}
        
      </div>
      
      </div>
    
  );
  
}

export default App;

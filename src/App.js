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

import BabyCow from './animal-pictures/cow-smiling.avif'
import CatPic from './animal-pictures/cat-white.avif'
import CowPic from './animal-pictures/cow-field.avif'
import DogPic from './animal-pictures/dog-husky.avif'
import DuckPic from './animal-pictures/duck-water.avif'
import GoatPic from './animal-pictures/goat-white.avif'
import HorsePic from './animal-pictures/horse-hay.avif'
import PicPics from './animal-pictures/pig-black.avif'
import RoasterPic from './animal-pictures/roaster-farm.avif'
import SheepPic from './animal-pictures/sheep-grass.avif'
import Animals from './animals';
import './font.css'


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

  const [images, setImages] = useState(BabyCow)

  const handleImages = (images) =>{
      setImages(images)
  }

  return (
    <div className='animal-class'>
      
     
      <div id='drum-machine'> 
      <header>
        <p className='kids' style={{fontFamily: 'Comic Sans MS'}}>
          Hello <span id='kids' > kIDS!</span> <br />
        <span className='click'><span className='click-span'>Click</span> the name of any of 
        these <br/><span>Domestic Animal</span> to hear their sound 
       <br/> and see their images </span></p>
      </header>
      <div className='body'>
          <img src={images} style={{width:250}}/>
      <div id='display'>
        {data.map((item) => (
          
             <Animals 
             id={item.id} 
             src={item.src}
             pictureSrc ={item.pictureSrc}
             letter = {item.letter}
             handleImages = {handleImages}
             />
        ))}
      </div>
      </div>
    
      </div>
      </div>
  );
  
}

export default App;

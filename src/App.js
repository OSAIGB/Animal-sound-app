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

  const [images, setImages] = useState(BabyCow)

  const handleImages = (images) =>{
      setImages(images)
  }

  return (
    <div className='animal-class'>
      
      <header><h1>Hi kIDS! </h1>
      <h2>Click a domestic animal's name <br/> to find out their 
      sound and image</h2> 
      </header>
      <div id='drum-machine'>
      <img src={images} style={{width:270}}/>
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
  );
  
}

export default App;

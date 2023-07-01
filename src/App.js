import React, { useState } from 'react';
import './App.css';
import Cat from './sounds/cat-meow.wav';
import Cow from './sounds/cow-moo.wav';
import Dog from './sounds/dog-barking.wav';
import Duck from './sounds/ducks1-32839.mp3';
import Goat from './sounds/goat-bah.mp3';
import Horse from './sounds/horse.wav';
import Pig from './sounds/pig-grunt.mp3';
import Roaster from './sounds/roaster.wav';
import Sheep from './sounds/sheep-bah.mp3';
import BabyCow from './animal-pictures/cow-smiling.avif';
import CatPic from './animal-pictures/cat-white.avif';
import CowPic from './animal-pictures/cow-field.avif';
import DogPic from './animal-pictures/dog-husky.avif';
import DuckPic from './animal-pictures/duck-water.avif';
import GoatPic from './animal-pictures/goat-white.avif';
import HorsePic from './animal-pictures/horse-hay.avif';
import PicPics from './animal-pictures/pig-black.avif';
import RoasterPic from './animal-pictures/roaster-farm.avif';
import SheepPic from './animal-pictures/sheep-grass.avif';
import Animals from './animals';
import './font.css';
import Header from './header';
import WildHeader from './wild-header'
import WildBody from './wild-body'

import Cougar from './wild-animal-photo/cougar.jpeg'
import Eagle from './wild-animal-photo/eagle.jpg'
import Elephant from './wild-animal-photo/elephant.jpeg'
import Hyena from './wild-animal-photo/hyena.jpeg'
import Lion from './wild-animal-photo/lion.jpeg'
import Monkey from './wild-animal-photo/monkey.jpeg'
import Owl from './wild-animal-photo/owl.jpeg'
import Snake from './wild-animal-photo/snake.jpeg'
import Wolf from './wild-animal-photo/wolf.jpg'
import HappyLion from './wild-animal-photo/happylion.jpg'
import CougarSound from './wild-animal-sounds/cougar.mp3'
import ElephantTrum from './wild-animal-sounds/elephant-trumpet.mp3'
import EagleCry from './wild-animal-sounds/gryffin-cry-6995.mp3'
import HyenaLaugh from './wild-animal-sounds/hyena-laugh.mp3'
import MonkeyScream from './wild-animal-sounds/monkey-scream.mp3'
import OwlHoot from './wild-animal-sounds/owl-hoot.mp3'
import LionRoar from './wild-animal-sounds/roar-of-a-lion-154719.mp3'
import SnakeHiss from './wild-animal-sounds/snakehiss2.mp3'
import WolfHowl from './wild-animal-sounds/wolf-howl-6310.mp3'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function App() {
  const data = [
    { src: Cat, id: '1', letter: 'Cat', pictureSrc: CatPic },
    { src: Cow, id: '2', letter: 'Cow', pictureSrc: CowPic },
    { src: Dog, id: '3', letter: 'Dog', pictureSrc: DogPic },
    { src: Duck, id: '4', letter: 'Duck', pictureSrc: DuckPic },
    { src: Goat, id: '5', letter: 'Goat', pictureSrc: GoatPic },
    { src: Horse, id: '6', letter: 'Horse', pictureSrc: HorsePic },
    { src: Pig, id: '7', letter: 'Pig', pictureSrc: PicPics },
    { src: Roaster, id: '8', letter: 'Roaster', pictureSrc: RoasterPic },
    { src: Sheep, id: '9', letter: 'Sheep', pictureSrc: SheepPic }
  ];
  const wild = [
    { src: CougarSound, id: '1', letter: 'Cougar', pictureSrc: Cougar },
    { src: EagleCry, id: '2', letter: 'Eagle', pictureSrc: Eagle },
    { src: ElephantTrum, id: '3', letter: 'Elephant', pictureSrc: Elephant },
    { src: HyenaLaugh, id: '4', letter: 'Hyena', pictureSrc: Hyena },
    { src: LionRoar, id: '5', letter: 'Lion', pictureSrc: Lion },
    { src: MonkeyScream, id: '6', letter: 'Monkey', pictureSrc: Monkey },
    { src: OwlHoot, id: '7', letter: 'Owl', pictureSrc: Owl },
    { src: SnakeHiss, id: '8', letter: 'Snake', pictureSrc: Snake },
    { src: WolfHowl, id: '9', letter: 'Wolf', pictureSrc: Wolf }
  ];

  const [images, setImages] = useState(BabyCow);
  const [header, setHeader] = useState(Header);
  const [wildHeader, setWildHeader] = useState(WildHeader)
  const [animalImages, setAnimalImages] = useState(true);
  const [wildImages, setWildImages] = useState(HappyLion)
  const [isSwitched, setIsSwitched] = useState(false)
  const [clickedText, setClickedText] = useState(false)


  const ChangeClickedText = () =>{
    setClickedText((clickedText) => !clickedText)
  }
const changeSwitch = () =>{
  setIsSwitched(!isSwitched);
}

  const changeHeader = (texts) => {
    setHeader('This is a ' + texts + '.');
  };
const wildHead = (texts) =>{
  setWildHeader('This is a/an '+ texts + '.' )
}
  const handleImages = (images) => {
    setImages(images);
  };

const ChangeWildImages = (wildAnimalImage) =>{
  setWildImages(wildAnimalImage)
}

  const changeImage =() =>{
    setAnimalImages(!animalImages)
  }

  const backgroundImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url(${animalImages ? images : wildImages })`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'blur(6px)', // Apply the blur effect
    WebkitBackdropFilter: 'blur(10px)', // For Safari
    backdropFilter: 'blur(10px)', // For modern browsers
    zIndex: -1
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>

      <div style={backgroundImageStyle} />
         <div className='button-text'>  
          <button className="switch-button" onClick={() => 
        {changeImage();
        changeSwitch();
        ChangeClickedText()}}>
           <div className={`inner-switch ${isSwitched ? 'switched' : ''}`}></div>
           
          </button> 
            <h3 className='click'>
            <FontAwesomeIcon icon={faArrowLeft} />    Click to see {clickedText ? 'Domestic Animals' : 'Wild Animals'} </h3>
          </div>
    
           <div className="animal-class" style={{ zIndex: 1, position: 'relative' }}>

        {animalImages ? ( <div id="drum-machine">
          <header>
            <p className="kids" style={{ fontFamily: 'Comic Sans MS' }}>
              Hello <span id="kids"> Domestic Animal lovers!</span> <br />
            </p>
            <div
              className="click"
              style={{ fontFamily: 'Comic Sans MS', fontWeight: 600 }}
            >
              {header}
            </div>
          </header>

          

          <div className="body">
            <img src={images} style={{ width: 250 }} className='dom-images'/>

            <div id="display">
              {data.map((item) => (
                <Animals
                  id={item.id}
                  src={item.src}
                  pictureSrc={item.pictureSrc}
                  letter={item.letter}
                  handleImages={handleImages}
                  texts={changeHeader}
                />
              ))}
            </div>
          </div>
        </div>) : (
 <div id="drum-machine">
 <header>
   <p className="kids-wild" style={{ fontFamily: 'Comic Sans MS' }}>
     Hello <span id="kids-wild"> Wild Animal lovers!</span> <br />
   </p>
   <div
     className="click-wild"
     style={{ fontFamily: 'Comic Sans MS', fontWeight: 600 }}
   >
     {wildHeader}
   </div>
 </header>


 <div className="body">
   <img src={wildImages} style={{ width: 250 }} className='wild-images' />

   <div id="display">
     {wild.map((items) => (
       <WildBody
         ids={items.id}
         src={items.src}
         pictureSrc={items.pictureSrc}
         letters={items.letter}
         handleImages={ChangeWildImages}
         texts={wildHead}
       />
     ))}
   </div>
 </div>
</div>
        )}
      </div>
    </div>
  );
}

export default App;

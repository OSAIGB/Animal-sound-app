import React from 'react';
import { useState } from 'react';



function WildAnimals({ texts, ids, letters, pictureSrc, src, handleImages }) {
  
  const [buttonClick, setButtonClick] = useState(false)

const AnimateButton = () =>{
  setButtonClick(!buttonClick)
  setTimeout(() => {
    setButtonClick(true)
  }, 500);
}
 const playAudio = () =>{
const audio = new Audio(src)
audio.play()
handleImages(pictureSrc)
texts(letters)
AnimateButton()

}
 return (
    <div>
      <div id='animal-data'>
        <button
          className={`sound-wild ${buttonClick ? 'yes': ''}`}
          id={ids}
          onClick={playAudio}
          style={{ fontFamily: 'Comic Sans MS' }}>
          {letters}
        </button>
      </div>
    </div>
  );
}

export default WildAnimals;

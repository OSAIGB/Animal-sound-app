import React from 'react';

function WildAnimals({ texts, ids, letters, pictureSrc, src, handleImages }) {
 const playAudio = () =>{
const audio = new Audio(src)
audio.play()
handleImages(pictureSrc)
texts(letters)


}
 return (
    <div>
      <div id='animal-data'>
        <button
          className='sound-wild'
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

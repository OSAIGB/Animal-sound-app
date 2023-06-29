import './App.css'
import { useState } from 'react';

function Animals({pictureSrc, id, letter, src, handleImages}){
   

const playAudio = () => {
    const audio = new Audio(src);
    handleImages(pictureSrc)
    audio.play();
    
  };

    return(
           <div> 
              <div id='animal-data'>
                <button className='sound' 
                id={id} 
                onClick={playAudio}>
                    {letter}
                </button> 
              </div>
        </div>  
    )
}
export default Animals
import './App.css'
import { useState } from 'react';
import './font.css'
function Animals({pictureSrc, id, letter, src, handleImages}){
   

const playAudio = () => {
    const audio = new Audio(src);
    handleImages(pictureSrc)
    audio.play();
    
  };

    return(
           <div> 
              <div id='animal-data' >
                <button className='sound' 
                id={id} 
                onClick={playAudio} 
                style={{ fontFamily:'Comic Sans MS'}}>
                    {letter}
                </button> 
              </div>
        </div>  
    )
}
export default Animals
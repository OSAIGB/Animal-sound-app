import './App.css'
import { useState } from 'react';
import './font.css'
function Animals({pictureSrc, id, letter, src, handleImages,  texts, }){
   
  const [buttonClick, setButtonClick] = useState(false)

  const AnimateButton = () =>{
    setButtonClick(!buttonClick)
    setTimeout(() => {
      setButtonClick(true)
    }, 500);
  }

const playAudio = () => {
    const audio = new Audio(src);
    handleImages(pictureSrc)
    audio.play();
    texts(letter)
AnimateButton()
    
  };

    return(
      <div>
        
           <div> 
    
              <div id='animal-data' >
                <button className={`sound ${buttonClick ? 'yes': ''}`}
                id={id} 
                onClick={playAudio} 
                style={{ fontFamily:'Comic Sans MS'}}>
                    {letter}
                </button> 
              </div>
        </div>  
        </div>
    )
}
export default Animals
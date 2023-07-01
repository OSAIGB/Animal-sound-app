function WildAnimals(playAudio, id, letters, pictureSrc){

  // const playAudio = () => {
  //   const audio = new Audio(src);
  //   handleImages(pictureSrc)
  //   audio.play();
  //   texts(letter)
    
  // };
  return(
    <div> 
       <div id='animal-data' >
         <button className='sound' 
         id={id} 
         onClick={playAudio} 
         style={{ fontFamily:'Comic Sans MS'}}>
             {letters}
         </button> 
       </div>
 </div>  
)
}
export default WildAnimals
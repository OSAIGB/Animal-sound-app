import './App.css'


function Animals({data, pictureSrc, key, letter}){
console.log(letter)
   
    return(
           <div> 
              <div id='animal-data'>
                <button className='sound' key={key}>
                    {letter}
                </button> 
                {data.map((objects) => {
             <img src={objects.pictureSrc} 
             alt={objects.id} 
             key={objects.id}/>
              })}
              </div> 
            
             
        </div>  
    )

}

    
export default Animals
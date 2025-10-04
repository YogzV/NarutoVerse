import {getCharacters} from "../services/api.js";
import CharacterRender from "../Renders/CharacterRender.jsx"
import {useState,useEffect} from "react";


export default function Characters(){

    const [char,setChar] = useState([]);
    const [loading,isLoading] = useState(false);

    useEffect(() => {
         const res = async ()=>{
            const data = await getCharacters();
            
            isLoading(true);
            setChar(data.characters);   
        }
        res();
    },[])

    
   const renderChar = char.map(element => {
    return <CharacterRender key={element.id} char={element} />
  });
   

  if(loading)
  {
    return(
        <div>
           <h1 style={{textAlign:"center"}}>Naruto Anime Characters</h1>
           <a href="./home" className="back-home">Back to Home</a>
          {renderChar}
        </div>
    )
  }
  return (<h1 style={{textAlign:"center"}}>Loading...</h1>)
}
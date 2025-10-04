import {getCharactersById} from "../services/api.js"
import {useState,useEffect} from "react"

export default function KekkaiRender(props)
{
  
    const [src,setSrc] = useState(null);
    const [char,setChar] = useState(null);

    const id = props.kek.characters[0];

    useEffect(()=>{
        const response  = async()=> {
            const res = await getCharactersById(id);
            setSrc(res.images[0]);
            console.log(res);
            setChar(res)
            
        }
        response();
    },[id])
    

     useEffect(()=>{
        if(!src) return;
        const img = new Image();
        img.src = src;
        img.onerror = ()=> setSrc(char.images[1]);
    
     },[char])

    const notIncluded = [341,406,259,715,336,145,925]

    if(char && !notIncluded.includes(char.id)){
    return(
        <div className="char-container" >
            
             <img className="char-image" src={src} />
             <p className="char-description">The Character name is {char.name},{char.jutsu? `Famous Jutsu are ${char.jutsu.slice(0,5).join(",")}`:
             ""} and the nature type is {char.natureType?.slice(0,4).join(",") || "Chakra absorbing"}.
             </p>
                
        </div>
        )
    }
}
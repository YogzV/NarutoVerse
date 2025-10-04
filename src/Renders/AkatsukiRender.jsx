import {useState,useEffect} from "react"

export default function AkatsukiRender(props)
{

   const [src,setSrc] = useState(props.akat.images[0]);

   useEffect(()=>{
    const img = new Image();
    img.src = src;
    
    
    img.onerror = ()=> setSrc(props.akat.images[1]);
    
   },[])
   
  const notAkat = [166,141,400,396,559,195,325,627,735,1425]

   if(!notAkat.includes(props.akat.id)){
    return(

        <div className="char-container" >
             <img className="char-image" src={src} />
           
             <p className="char-description">
            {props.akat.name}, first appearing in {props.akat.debut.manga}.Skilled in jutsu like {props.akat.jutsu.slice(0,5).join(",")} and 
            has the Nature types of {props.akat.natureType? props.akat.natureType.join(","):"Jashin’s curse techniques and immortality, not elemental chakra" }.</p>
        </div>
        )
    }
    return null;
  
}
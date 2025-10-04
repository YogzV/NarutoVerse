import {useEffect,useState} from "react"

export default function CharacterRender(props)
{

    const [valid,setValid] = useState(true);
    const src = props.char.images[0]
    
    useEffect(
    ()=>{
        const img = new Image();
        img.src = src;

        
        img.onerror = ()=> setValid(false)
        

    },[])

    const jutsus = props.char.jutsu.slice(0,5).join(',');
   

    if(valid && props.char.name!=="Jiraiya")
        {
            return(
            <div className="char-container">
                 <img className="char-image" src={src} />
                 <p className="char-description">{props.char.name}, 
                    Born on {props.char.personal.birthdate},first appeared in the manga {props.char.debut.manga}.
                     He is a  and later became the Seventh Hokage. His main nature type is {props.char.natureType?.[0]}, and he is known for powerful 
                    jutsu such as the {jutsus}.</p>
            </div>
            )
        }
    
    return null;
        
}
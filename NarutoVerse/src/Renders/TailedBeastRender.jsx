import {useEffect,useState} from "react"


export default function TailedBeastRender(props)
{

    const [valid,setValid] = useState(false);
    useEffect(()=>{
        const img = new Image();
        img.src = props.tail.images[0];

        img.onload = ()=> setValid(true);
    },[])

  if(valid){

    return(
        <div className="char-container">
            
             <img className="char-image" src={props.tail.images} />
        
            {props.tail.name === "Matatabi"?
             <p className="char-description">Matatabi, introduced in Naruto Chapter #313, 
             is the Two-Tails known for jutsu like the Tailed Beast Ball and 
             powerful Fire Release. Its jinchūriki, Yugito Nii, harnessed its strength, while Matatabi’s 
             unique trait is its blazing, cat-like form engulfed in blue flames.
            </p>:
            <p className="char-description"> The {props.tail.name}, first seen in {props.tail.debut.manga}, 
                wields destructive jutsu like {props.tail.jutsu.join(",")}. As a powerful tailed beast with jinchuriki as  
                {" "}{props.tail.personal.jinchūriki[0]}
            </p>
            }
            
        </div>
        )
    }
}
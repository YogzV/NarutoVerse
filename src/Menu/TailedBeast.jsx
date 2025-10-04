import {getTailedBeast} from "../services/api.js"
import {useState,useEffect} from "react"
import TailedBeastRender from "../Renders/TailedBeastRender.jsx"
export default function TailedBeast(){
    
    const [tail,setTail] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        const res = async()=>{
                const result = await getTailedBeast();
                console.log(result["tailed-beasts"]);
                setLoading(true);
                setTail(result["tailed-beasts"]);
        }
        res();
        
    },[])

    const tailRender = tail.map(element => {
     return <TailedBeastRender key={element.id} tail={element} />}
    );
    
    if(loading)
    {
    return(
    <div>
        <h1 style={{textAlign:"center"}}>Tailed Beasts</h1>
        <a href="./home"  className="back-home">Back to Home</a>
        {tailRender}
    </div>)
    }
    return (<h1 style={{textAlign:"center"}}>Loading...</h1>)
}
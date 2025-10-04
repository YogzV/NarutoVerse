import {getKekkeiGenkai} from "../services/api.js"
import {useState,useEffect} from "react"
import KekkaiRender from "../Renders/KekkaiRender.jsx"

export default function TailedBeast(){
    
    const [kek,setKek] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        const res = async()=>{
                const result = await getKekkeiGenkai();
                setLoading(true);
                setKek(result["kekkei-genkai"]);
        }
        res();
        
    },[])

    const kekRender = kek.map(element => {
     return <KekkaiRender key={element.id} kek={element} />}
    );
    
    if(loading){
    return(
    <div>
        <h1 style={{textAlign:"center"}}>Kekkai Genkai Characters</h1>
        <a href="./home"  className="back-home">Back to Home</a>
        {kekRender}
    </div>)
    }
    return (<h1 style={{textAlign:"center"}}>Loading...</h1>)
}
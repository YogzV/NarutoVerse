import {getAkatsuki} from "../services/api.js"
import {useState,useEffect} from "react"
import AkatsukiRender from "../Renders/AkatsukiRender.jsx"

export default function Akatsuki(){

   const [akat,setAkat] = useState([]);
   const [loading,setLoading] = useState(false);
   
   useEffect(()=>{
     const res = async()=>{
        const result = await getAkatsuki();
        console.log(result.akatsuki);
        setLoading(true);
        setAkat(result.akatsuki);
     }
     res();
   },[])

   const renderAkat = akat.map(element => {
    return <AkatsukiRender key={element.id} akat={element} />
   })

   if(loading){
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Akatsuki Characters</h1>
            <a href="./home"  className="back-home">Back to Home</a>
            {renderAkat}
        </div>
    )
   }

   return (<h1 style={{textAlign:"center"}}>Loading...</h1>)
}
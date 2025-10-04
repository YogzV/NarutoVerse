import {useNavigate} from "react-router-dom"
import {useEffect} from "react"


export default function LoginPage(){


  useEffect(()=>{
    document.body.className = "login-page";
    
    return () => document.body.className = "";
  },[])

  const navigate = useNavigate();
 
  function login(){

      const name = document.getElementById("username");
      const pass = document.getElementById("password");
      const nameAlert = document.getElementById("name");
      const passAlert = document.getElementById("pass");

      if(name.value === ""){
        nameAlert.classList.add("show");
        name.focus();
        return name.classList.add("error");
      }else{
        name.blur();
        nameAlert.classList.remove("show");
        name.classList.remove("error");
      }
      if(pass.value === "")
      {
        pass.focus();
        passAlert.classList.add("show");
        return pass.classList.add("error");
      }else{
        pass.blur();
        passAlert.classList.remove("show");
        pass.classList.remove("error");
      }
      if(name.value==="y" && pass.value==="h")
      {     
        navigate("/home");
      }
      name.value = "";
      pass.value = "";

      return;
      
  }

  function handleSubmit(event){
       event.preventDefault();
  }

  return(
 <div id="login-page">
 
    <h1 id="login-header">Login </h1>

    <form onSubmit={(e)=> handleSubmit(e)}>    
        <input className="login" id="username" type="text" placeholder="Username" />
        <p className="alert" id="name">Please enter a valid username!</p>
        <input className="login" id="password" type="password" placeholder="Password" />
        <p className="alert" id="pass">Please enter a valid password!</p>
        <br />
        <button onClick={()=> login()} className="login" id="login-btn">Enter</button>
    </form>

  </div>
  )
}
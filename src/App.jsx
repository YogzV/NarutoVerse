import {BrowserRouter,Routes,Route} from "react-router-dom"
import LoginPage from "./LoginPage.jsx"
import Characters from "./Menu/Characters.jsx"
import TailedBeast from "./Menu/TailedBeast.jsx"
import Akatsuki from "./Menu/Akatsuki.jsx"
import Kekkai from "./Menu/Kekkai.jsx"
import HomePage from "./HomePage.jsx"

export default function App(){
  return(
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/tailedBeast" element={<TailedBeast />} />
      <Route path="/akatsuki" element={<Akatsuki />} />
      <Route path="/kekkai" element={<Kekkai />} />

      </Routes>
    </BrowserRouter>

  )
}
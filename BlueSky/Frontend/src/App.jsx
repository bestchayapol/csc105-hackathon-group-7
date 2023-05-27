
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home"
import Welcome from "./pages/Welcome"
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import PostcardContent from "./pages/PostcardContent";
function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route  exact path="/Welcome" element={<Welcome/>}/>
      <Route  exact path="/Login" element={<Login/>}/>
      <Route  exact path="/Register" element={<Signup/>}/>
      <Route exact path = "/PostcardContent/:PostcardID" element={<PostcardContent/>}/>
      <Route  exact path="/Home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

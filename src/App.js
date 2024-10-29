import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Signup/Signup";
import HomeSignUp from "./Pages/Home/HomeSignUp";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="" element={<Home />}/>
          <Route path="/homesignup" element={<HomeSignUp />}/>
          <Route path="/signup" element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home"
import Template from "./components/pages/Template";
import Tabulio from "./components/pages/Tabulio";
import About from "./components/pages/About";
// import {useUser} from "@clerk/clerk-react"
import SignInPage from "../src/components/auth/sign-in/Index";
import Dashboard from "./components/dashboard";
// import { useState } from 'react'


const App = () => {
  // const [count, setCount] = useState(0)
  // const {user, isLoaded, isSignedIn}= useUser();
  // if(!isSignedIn&&isLoaded)
  //   {
  //     return <Navigate to={'/auth/sign-in'} />

  //   }
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="template" element={<Template />} />
        <Route path="join" element={<Tabulio />} />
        <Route path="about" element={<About />} />
        <Route path="/auth/sign-in" element={<SignInPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;

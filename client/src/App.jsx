import { BrowserRouter,Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
export default function App() {
  // console.log(import.meta.env.VITE_FIREBASE_API_KEY)
  return <BrowserRouter>
  {/* header*/}
  <Header />
     <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/sign-in" element={<Signin />} />
    <Route path="/sign-up" element={<Signup />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>

   

  
  </BrowserRouter>
    
}

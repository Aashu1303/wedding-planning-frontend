import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Hall from "./pages/hall/Hall";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import ListFeatured from "./pages/listfeatured/ListFeatured.jsx";


import 'bootstrap/dist/css/bootstrap.min.css';

import Signup from "./signup/Signup";
import Login from "./login/Login";
import About from "./about/About";


import Services from "./services/Services";
import MailList from "./components/mailList/MailList";
import Forgot from "./forgot/Forgot";
import Forgotid from "./forgotid/Forgotid";
import Listcity from "./pages/listcity/Listcity1";
import Listcity1 from "./pages/listcity/Listcity1";
import Listcity2 from "./pages/listcity/Listcity2";
import Listcity3 from "./pages/listcity/Listcity3";
import Slider from "./pages/slider/Slider";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/halls" element={<List/>}/>
      <Route path="/halls/:id" element={<Hall/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Signup />} />
      <Route path="halls/register" element={<Signup />} />
      <Route path="/about" element={< About/>} />
      <Route path="halls/login" element={<Login/>}/>
      <Route path="halls/hyderabad" element={<Listcity1/>}/>
      <Route path="halls/mumbai" element={<Listcity2/>}/>
      <Route path="halls/delhi" element={<Listcity3/>}/>
      <Route path="/services" element={<Services />} />
      <Route path="/fhalls/:id" element={<ListFeatured />} />
      <Route path="/contact" element={<MailList />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/forgotid" element={<Forgotid/>}/>
      <Route path="/slider" element={<Slider/>}/>
    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;

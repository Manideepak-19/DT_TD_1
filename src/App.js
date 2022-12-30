import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home';
import CookingNext from './components/CookingNext';
import PackingNext from './components/PackingNext';
import HouseCleaningNext from './components/HouseCleaningNext';
import PaintingNext from './components/PaintingNext';
import SalonAndSpa from './components/SalonAndSpa';
import CarpentoryNext from './components/CarpentoryNext';
import PlumbingNext from './components/PlumbingNext';
import ElectricNext from './components/ElectricNext';
import FormReg from './components/FormReg';
import {Link,Routes,Route} from "react-router-dom"
import Filters from './components/Filters';

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="cooking" element={<CookingNext/>} />
      <Route path="packing" element={<PackingNext/>} />
      <Route path="cleaning" element={<HouseCleaningNext/>} />
      <Route path="painting" element={<PaintingNext/>} />
      <Route path="salon" element={<SalonAndSpa/>} />
      <Route path="carpentory" element={<CarpentoryNext/>} />
      <Route path="plumbing" element={<PlumbingNext/>} />
      <Route path="electric" element={<ElectricNext/>} />
      <Route path="form" element={<FormReg/>} />
      <Route path='filters' element={<Filters/>}/>
    </Routes>
   </>
  );
}

export default App;

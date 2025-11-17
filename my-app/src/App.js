import { BrowserRouter , Form, Route, Routes } from "react-router"
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contect from './Components/Contect';
import Home from './Components/Home';
import Flavors from'./Components/flavors';
import Mango from './Components/Mango';
import Blueberry from"./Components/Blueberry";
import Vanilla from './Components/Vanilla';
import Chocolate from './Components/Chocolate';
import Strawberry from './Components/Strawberry';
import Butterscotch from './Components/butterscotch';   
import Kulfi from "./Components/Kulfi";
import Card from './Components/card';
import Pistachio from "./Components/pistachio";
import TenderCoconut from"./Components/TenderCoconut";
import AlmondFudge from"./Components/AlmondFudge";
import Banana from"./Components/Banana";
import BlackCurrant from"./Components/BlackCurrant";
import Caramel from"./Components/Caramel";
import Coffee from"./Components/Coffee";
import CookiesandCream from"./Components/CookiesandCream";
import FigandHoney from"./Components/FigandHoney";
import Lychee from"./Components/Lychee";
import MintChocolateChip from"./Components/MintChocolateChip";
import PanMasala from"./Components/PanMasala";
import Peach from"./Components/Peach";
import RaspberryRipple from"./Components/RaspberryRipple";


function App() {
  return (<>

    <BrowserRouter>
      <Navbar />        
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contect />} />
              <Route path="/flavors" element={<Flavors />} />
              <Route path="/Mango" element={<Mango />} />
              <Route path="/vanilla" element={<Vanilla />} />
              <Route path="/Chocolate" element={<Chocolate />} />
              <Route path="/Butterscotch" element={<Butterscotch />} />
              <Route path="/strawberry" element={<Strawberry />} />
              <Route path="/kulfi" element={<Kulfi />} />
              <Route path="/pistachio" element={<Pistachio/>} />
              <Route path="/TenderCoconut" element={<TenderCoconut/>} />
              <Route path="/AlmondFudge" element={<AlmondFudge/>} />
              <Route path="/Banana" element={<Banana/>} />
              <Route path="/BlackCurrant" element={<BlackCurrant/>} />
              <Route path="/Caramel" element={<Caramel/>} />
              <Route path="/Coffee" element={<Coffee />} />
              <Route path="/CookiesandCream" element={<CookiesandCream />} />
              <Route path="/FigandHoney" element={<FigandHoney />} />
              <Route path="/Lychee" element={<Lychee />} />
              <Route path="/MintChocolateChip" element={<MintChocolateChip />} />
              <Route path="/PanMasala" element={<PanMasala />} />
              <Route path="/Peach" element={<Peach />} />
              <Route path="/RaspberryRipple" element={<RaspberryRipple />} />
              <Route path="/Blueberry" element={<Blueberry />} />
              <Route path="/cards" element={<Card />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

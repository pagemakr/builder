import NavBar from "./components/Navbar";
import Landing from "./components/Landing";
import Cards from "./components/Cards";
import Form from "./components/Form";
import { useState } from "react";

const App = () =>{
  
  // useStates for each card
  const [hero1,setHero1] = useState(false);  const [hero2,setHero2] = useState(false);
  const [about1,setAbout1] = useState(false); const [about2,setAbout2] = useState(false);
  const [grid1,setGrid1] = useState(false);  const [grid2,setGrid2] = useState(false);

  return (
    <div className="App bg-gray-900 overflow-y-auto selection:bg-yellow-300 selection:text-gray-900">
       <NavBar/>
       <Landing/>
       <Cards hero1={hero1} setHero1={setHero1}
              hero2={hero2} setHero2={setHero2}
              about1={about1} setAbout1={setAbout1}
              about2={about2} setAbout2={setAbout2}
              grid1={grid1} setGrid1={setGrid1}
              grid2={grid2} setGrid2={setGrid2}
       />
       <Form 
              hero1={hero1} setHero1={setHero1}
              hero2={hero2} setHero2={setHero2}
              about1={about1} setAbout1={setAbout1}
              about2={about2} setAbout2={setAbout2}
              grid1={grid1} setGrid1={setGrid1}
              grid2={grid2} setGrid2={setGrid2}
       />
    </div>
  );
}

export default App;

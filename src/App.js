import NavBar from "./components/Navbar";
import Landing from "./components/Landing";
import Cards from "./components/Cards";

const App = () =>{
  return (
    <div className="App bg-gray-900 overflow-y-auto selection:bg-pink-300">
       <NavBar/>
       <Landing/>
       <Cards/>
    </div>
  );
}

export default App;

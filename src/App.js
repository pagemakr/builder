import NavBar from "./components/Navbar";
import Landing from "./components/Landing";
import Cards from "./components/Cards";
import Form from "./components/Form";

const App = () =>{
  return (
    <div className="App bg-gray-900 overflow-y-auto selection:bg-pink-300">
       <NavBar/>
       <Landing/>
       <Cards/>
       <Form/>
    </div>
  );
}

export default App;

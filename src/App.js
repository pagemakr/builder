import NavBar from "./components/Navbar";
import Landing from "./components/Landing";
import Cards from "./components/Cards";
import Form from "./components/Form";

const App = () =>{
  return (
    <div className="App bg-gray-900 overflow-y-auto selection:bg-yellow-300 selection:text-gray-900">
       <NavBar/>
       <Landing/>
       <Cards/>
       <Form/>
    </div>
  );
}

export default App;

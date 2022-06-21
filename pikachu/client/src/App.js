import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom" 
import LandingPage from "./componentes/LandingPage.jsx";
import Home from "../src/componentes/Home.jsx"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/home" component={Home}/>
      </Switch>
     
    </div>
    </BrowserRouter>
  );
}

export default App;

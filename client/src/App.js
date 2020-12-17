import './App.css';

import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/"> 
            <Header/>
            <Home/>
          </Route>
        </Switch>


      </Router>
        
    </div>
  );
};

export default App;

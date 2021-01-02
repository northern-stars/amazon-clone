import './App.css';

import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import profilePage from "./pages/profilePage";
import SignIn from './components/signIn/SignIn';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact> 
            <Header/>
            <Home/>
          </Route>
          <Route path="/profile" component={profilePage} />
          <Route path="/sign" component= {SignIn} />
        </Switch>


      </Router>
        
    </div>
  );
};

export default App;

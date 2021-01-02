import './App.css';

import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import profilePage from "./pages/profilePage";
import SignIn from './components/sign/signIn/SignIn';
import SignUp from './components/sign/signUp/SignUp';


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
          <Route path="/signin" component= {SignIn} />
          <Route path="/signup" component= {SignUp} />
        </Switch>


      </Router>
        
    </div>
  );
};

export default App;

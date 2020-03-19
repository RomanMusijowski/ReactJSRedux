import React, {Component} from 'react';
import Navbar from "./components/layout/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn"
import Home from "./components/home/Home";
import history from "./shared/history";

class App extends Component{
  render() {
      return (
          <BrowserRouter history={history}>
              <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/signUp' component={SignUp}/>
                    <Route path='/signIn' component={SignIn}/>
                </Switch>
              </div>
          </BrowserRouter>
      );
  }
}

export default App;

import React, {Component} from 'react';
import Navbar from "./components/layout/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn"
import Home from "./components/home/Home";
import requireAuth from "./shared/requireAuth";
import noRequireAuth from "./shared/noRequireAuth";


class App extends Component{
  render() {
      return (
          <BrowserRouter >
              <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={requireAuth(Home)}/>
                    <Route path='/signUp' component={noRequireAuth(SignUp)}/>
                    <Route path='/signIn' component={noRequireAuth(SignIn)}/>
                </Switch>
              </div>
          </BrowserRouter>
      );
  }
}

export default App;

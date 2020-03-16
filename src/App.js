import React, {Component} from 'react';
import Navbar from "./components/layout/Navbar";
import {BrowserRouter} from "react-router-dom";

class App extends Component{
  render() {
      return (
          <BrowserRouter>
              <div className="App">
              <Navbar/>
              </div>
          </BrowserRouter>
  );
  }
}

export default App;

// Import the React and ReactDOM libraries
import React, { Component } from "react";

import NavBar from "./components/nav/NavBar";
import Home from "./components/home/Home";
import ContactMe from "./components/about/ContactMe";

import { BrowserRouter, Route } from "react-router-dom";
import { Button, Divider, Image, Transition } from "semantic-ui-react";

import { default as SarcasmApp } from "./sarcasm/App";
import "./index.css";

// Technically this will be the main app sooon...
const App = () => {
  return (
    <div className="ui vertical masthead center aligned segment">
      <BrowserRouter>
        <div>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/Sarcasm" exact component={SarcasmApp} />
        </div>
      </BrowserRouter>
      <div className="ui footer segment">
        <div className="footer">
          <ContactMe />
        </div>
      </div>
    </div>
  );
};

export default App;

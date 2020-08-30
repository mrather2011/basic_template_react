import React from "react";
import Navbar from "./components/navigation/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Mainscroll from "./containers/mainscroll/Mainscroll";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Mainscroll} />

        <Route exact path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;

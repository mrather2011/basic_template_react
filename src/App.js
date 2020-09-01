import React, { useState, useEffect } from "react";
import Navbar from "./components/navigation/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Mainscroll from "./containers/mainscroll/Mainscroll";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import "./App.css";

function App() {
  const [currPos, setCurrPos] = useState(0);
  useScrollPosition(({ prevPos, currPos }) => {
    setCurrPos(currPos);
  });

  return (
    <div className="App">
      <Router>
        <Navbar currScreenPos={currPos} />
        <Route exact path="/" component={Mainscroll} />

        <Route exact path="/about" component={About} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

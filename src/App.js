import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import Restautrants from "./components/Restaurants";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/restautrants" component={Restautrants} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


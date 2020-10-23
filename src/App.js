import React from "react";

import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/PortFolio";


const App = () => {
  return (
    <section className=" ">
      <Router>
        
        <Switch>
          <Route exact path="/" component={Home} />
          
          <Route exact path="/portfolio" component={Portfolio} />

          <Route exact path="/contact" component ={Contact} />
          {/* <Route component={NoMatchPage} /> */}
        </Switch>
      </Router>
    </section>
  );
};

export default App;
import React from "react";

import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Portfolio from "./pages/PortFolio";


const App = () => {
  return (
    <section className="App">
      <Router>
        
        <Switch>
          <Route exact path="/" component={Home} />
          
          <Route exact path="/portfolio" component={Portfolio} />
          {/* <Route component={NoMatchPage} /> */}
        </Switch>
      </Router>
    </section>
  );
};

export default App;
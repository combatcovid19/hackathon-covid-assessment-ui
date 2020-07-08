import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";

import InnerHeader from "./Components/organisms/InnerHeader/InnerHeader.js";
import Assessment from "./Components/Pages/Assessment/Assessment.js";
import Providers from "./Components/Pages/Providers/Providers.js";

const NavRoute = ({exact, path, component: Component}) => (
  <Route exact={exact} path={path} render={(props) => (
    <main id="inner-content">
      <InnerHeader />
      <Component {...props}/>
    </main>
  )}/>
)
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <NavRoute exact component={Assessment} exact path="/" />
          <NavRoute exact component={Providers} exact path="/provider" />
        </Switch>
      </Router>
      {/* <Footer/> */}
    </div>
  );
}

export default App;

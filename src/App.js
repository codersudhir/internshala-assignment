import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import Navbar from "./components/Navbar";

import HomePage from "./components/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WorkContainer from "./components/WorkContainer";
import Profile from "./components/LivePortal";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" component={WorkContainer} />
           <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

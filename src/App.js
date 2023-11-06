import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import Navbar from "./components/Navbar";
import LivePortal from "./components/LivePortal";
import WorkContainer from "./components/WorkContainer";
import HomePage from "./components/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
        
         
          <Route path="/" component={WorkContainer} />
        </Switch>
      </div>
    </Router>
  );
}

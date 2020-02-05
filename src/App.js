import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// Components
import Navbar from "./components/Navbar";
// pages
import home from "./pages/home";
import login from "./pages/login";
import register from "./pages/register";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={home} />
            <Route path="/login" component={login} />
            <Route path="/register" component={register} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

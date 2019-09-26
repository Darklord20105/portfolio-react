import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// gneral layout
import NavigationBar from "./components/shared/Nav";
// pages
import Home from "./containers/Home";
import Work from "./containers/Work";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Project from "./components/work/project";
// footer
import Footer from "./components/shared/Footer";
// styling
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Work" component={Work} />
          <Route path="/Work/:project_id" component={Project} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

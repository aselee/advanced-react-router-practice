import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Dash from "./components/Dashboard";
import Chart from "./components/Charts";
import Table from "./components/Tables";
import Setting from "./components/Settings";
import Wall from "./components/Walls";
import Profiles from "./components/Profiles";
import Marquee from "./components/Marquee";
import Profile from "./components/Profile";
import {
  BrowserRouter,
  Route,
  Switch
 } from "react-router-dom";


function App() {
  return (
    // could add div tag here if you want to wrap the whole thing but not necessary
    <BrowserRouter>
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <TopNav />
          <SideNav />
        </nav>
        <div style={{backgroundColor: "white"}}>
        {/* PUT YOUR ROUTES HERE */}
        {/* if the string "/" is in the address bar show the Dash components*/}
      <Switch> 
        <Route path="/charts" component={Chart} />
        <Route path="/tables" component={Table} />
        <Route path="/settings" component={Setting} />
        <Route path="/wall" component={Wall} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/marquee/:text" component={Marquee} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/" component={Dash} />
      </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;

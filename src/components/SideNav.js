import React from "react";
import {Link} from "react-router-dom";

function SideNav() {
  return (
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        <li className="active">

          <Link to="/"> <i className="fa fa-fw fa-dashboard" />
            Dashboard 
          </Link>

        </li>
        <li>
          <Link to="/charts">
            <i className="fa fa-fw fa-bar-chart-o" /> Charts
          </Link>
        </li>
        <li>
          <Link to="/tables">
            <i className="fa fa-fw fa-table" /> Tables
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <i className="fa fa-fw fa-table" /> Settings
          </Link>
        </li>
        <li>
          <Link to="/walls">
            <i className="fa fa-fw fa-table" /> Walls
          </Link>
        </li>
        <li>
          <Link to="/profiles">
            <i className="fa fa-fw fa-table" /> Profiles
          </Link>
        </li>
        <li>
          <Link to="/marquee/:text">
            <i className="fa fa-fw fa-table" /> Marquee
          </Link>
        </li>
        <li>
          <Link to="/marquee/iloveroutes">
            <i className="fa fa-fw fa-table" /> iloveroutes
          </Link>
        </li>
        <li>
          <Link to="/marquee/reactrouterrules">
            <i className="fa fa-fw fa-table" /> reactrouterrules
          </Link>
        </li>
        <li>
          <Link to="/marquee/Andrew Rocks">
            <i className="fa fa-fw fa-table" /> Who Rocks?
          </Link>
        </li>
        <li>
          <Link to="/marquee/MARRRRRRQQQQQQUUEEEEEEEEEEEE!!!!!!">
            <i className="fa fa-fw fa-table" /> Click Here
          </Link>
        </li>
      </ul>
    </div>);  
}

export default SideNav;

import React from "react";
import { NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/Home" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/Contacts">Contacts</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

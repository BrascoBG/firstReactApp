import React from "react";

function NavBar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <p className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </p>
    </nav>
  );
}
export default NavBar;

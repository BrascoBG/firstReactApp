import React, { useContext } from "react";
import { CounterContext } from "../CounterContext";

function NavBar() {
  const [counters] = useContext(CounterContext);
  return (
    <nav className="navbar navbar-light bg-light">
      <p className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {counters.filter((c) => c.value > 0).length}
        </span>
      </p>
    </nav>
  );
}
export default NavBar;

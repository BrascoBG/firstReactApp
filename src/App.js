import React from "react";
import NavBar from "./components/Navbar";
import "./App.css";
import Counters from "./components/Counters";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;

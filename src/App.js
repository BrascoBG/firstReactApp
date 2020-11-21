import React, { useState } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  const handleIncrement = (counter) => {
    const updatedCounters = [...counters];
    for (const count of updatedCounters) {
      if (count.id === counter.id) {
        count.value++;
      }
    }
    setCounters(updatedCounters);
  };

  const handleReset = () => {
    const updatedCounters = [...counters];
    for (const count of updatedCounters) {
      count.value = 0;
    }
    setCounters(updatedCounters);
  };

  const handleDelete = (counterId) => {
    const updatedCounters = counters.filter((count) => count.id !== counterId);
    setCounters(updatedCounters);
  };

  return (
    <React.Fragment>
      <NavBar totalCounters={counters.filter((c) => c.value > 0).length} />
      <main className="container">
        <Counters
          counters={counters}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDelete={handleDelete}
        />
      </main>
    </React.Fragment>
  );
}

export default App;

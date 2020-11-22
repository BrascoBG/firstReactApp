import React, { useContext } from "react";
import Counter from "./Counter";
import { CounterContext } from "../CounterContext";

function Counters() {
  const [counters, setCounters] = useContext(CounterContext);

  const handleIncrement = (counter) => {
    const updatedCounters = [...counters];
    for (const count of updatedCounters) {
      if (count.id === counter.id) {
        count.value++;
      }
    }
    setCounters(updatedCounters);
  };

  const handleDecrement = (counter) => {
    const updatedCounters = [...counters];
    for (const count of updatedCounters) {
      if (count.id === counter.id) {
        count.value--;
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
    <div>
      <button onClick={handleReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          counter={counter}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
    </div>
  );
}
export default Counters;

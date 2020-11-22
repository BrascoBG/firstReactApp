import React, { useState, createContext } from "react";

export const CounterContext = createContext();

export const CounterProvider = (props) => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  return (
    <CounterContext.Provider value={[counters, setCounters]}>
      {props.children}
    </CounterContext.Provider>
  );
};

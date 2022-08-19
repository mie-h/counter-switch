import { useState, useEffect } from "react";
import Counter from "./Counter";

const LOCAL_STORAGE_KEY = "counter_storage";

const Counters = () => {
  /*
  const [counters, setCounters] = useState(0);
  This part is fine, but if Child state is initialized by its parent state:
  const [counters, setCounters] = useState(props.counter);
  you should avoid initilalizing this here in the child class.
  best practice in next project: flip-card-proj 
  */
  const [counters, setCounters] = useState(0);
  function handleIncrement() {
    /*
    callback function is ideal for  updating state value.
    this function can be simplified as below.
    setCounters(function(prevCounters) {
        return prevCounters
    })
    */
    setCounters((prevCount) => prevCount + 1);
  }

  function handleDecrement() {
    setCounters((prevCount) => prevCount - 1);
  }

  useEffect(() => {
    const storedCounters = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedCounters) setCounters(storedCounters);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(counters));
  }, [counters]);

  return (
    <div>
      <Counter
        counters={counters}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};

export default Counters;

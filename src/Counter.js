const Counter = ({ counters, handleIncrement, handleDecrement }) => {
  return (
    <div>
      <p>{counters}</p>
      <button onClick={() => handleIncrement()}>Increment</button>
      <button onClick={() => handleDecrement()}>Decrement</button>
    </div>
  );
};

export default Counter;

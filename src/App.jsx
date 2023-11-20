import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {count: state.count+action.payload};
    case "decrement":
      return {count: state.count-action.payload};
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });


  function increment() {
    dispatch({type: 'increment', payload:1})
  }
  function decrement() {
    dispatch({type: 'decrement', payload:1})
  }
  // const inp = useRef()
  // const btn = useRef()
  // function Show() {
  //   console.log(inp.current.value);
  //   console.log(btn.current.textContent);
  // }
  return (
    <div>
      <button onClick={increment}>+</button>
      <div>value: {state.count}</div>
      <button onClick={decrement}>-</button>

      {/* <input type="text" ref={inp} />
      <button onClick={Show} ref={btn}>Show</button> */}
    </div>
  );
};

export default App;

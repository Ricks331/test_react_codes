import { Fragment, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <span data-testid="span">{count}</span>
      <input type="text" />
      <button onClick={() => setCount((prev) => prev + 1)}>Submit</button>
    </Fragment>
  );
}

export default App;

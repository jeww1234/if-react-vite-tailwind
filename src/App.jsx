import { useState } from "react";
import "./App.css";

import Example1 from "./component/Example1";
import Example2 from "./component/Example2";
import Example3 from "./component/Example3";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex h-[650px] mb-[50px]">
        <Example1 />
        <Example2 />
        <Example3 />
      </div>
    </div>
  );
}

export default App;

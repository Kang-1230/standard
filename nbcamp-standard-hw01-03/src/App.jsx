import React, { useState } from "react";
import Header from "./component/Header";
import Counter from "./component/Counter";
import Footer from "./component/Footer";
import Content from "./component/Content";
import Status from "./component/Status";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header title="Counter App" />
      <Content />
      <Counter count={count} setCount={setCount} />
      <Status count={count} />
      <Footer year="2024" />
    </div>
  );
}

export default App;

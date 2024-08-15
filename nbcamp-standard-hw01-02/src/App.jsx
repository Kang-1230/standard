import React from "react";
import Header from "./component/Header";
import Content from "./component/Content";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Header title="My Website" />
      <Content />
      <Footer title="My Website" year="2024" />
    </div>
  );
}

export default App;

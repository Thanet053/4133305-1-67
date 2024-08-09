import React from "react";
import Basic from "@/componebts/Basic";
import Hook from "../componebts/Hook";

const App: React.FC = () => {
  return (
    <>
      <h1>Wellcome to IT.BRU</h1>
      <p>Hello Typcript</p>

      <Basic initVal="1" />

      <Hook initHook="5"/>
    </>
  );
};

export default App;

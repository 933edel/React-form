import { useState } from "react";
import Navbar from "./components/Navbars/Navbar";

import "./App.css";
import Contact from "./components/Contact/Contact";

import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <Navbar />
      <Contact />
      <Form />
    </>
  );
}

export default App;

import React from "react";
import Header from "./components/Header/index";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" exact component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;

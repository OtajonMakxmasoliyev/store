import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/form";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import "./style/style.scss"

class App extends React.Component {


  render() {

    return (
      <div className="app">

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Form />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route index path="navbar" element={<Navbar />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}


export default App
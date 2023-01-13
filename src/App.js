import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/form";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Shop from "./pages/shop"
import "./style/style.scss"

class App extends React.Component {


  render() {

    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route index path="/store" element={<Form />} />
            <Route path="/home" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}


export default App
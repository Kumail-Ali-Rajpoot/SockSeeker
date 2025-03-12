import React from "react";
import Header from "./components/Header";
import HomeSlide from "./components/HomeSlide";
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  console.log(URL);
  if(URL === "/home") {
    console.log("hello world this is a home slide")
  }
  return (
    <div className="App w-[100%] relative flex justify-center flex-col">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeSlide/>}/>
          <Route path="/Kid" element={<HomeSlide/>}/>
          <Route path="/Men" element={<HomeSlide/>}/>
          <Route path="/Lady" element={<HomeSlide/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

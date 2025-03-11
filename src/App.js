import React from "react";
import Header from "./components/Header";
import HomeSlide from "./components/HomeSlide";
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App w-[100%] relative flex justify-center flex-col">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeSlide/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

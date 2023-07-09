import "./App.css";
import About from "./components/About";
import Events from "./components/Events";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Events />} />
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

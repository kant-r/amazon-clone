import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<h2>I am checkout</h2>} />
          <Route path="/login" element={<h2>I am Login</h2>} />
          <Route path="/" element={<><Header/> <Home/></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

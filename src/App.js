import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Layouts/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

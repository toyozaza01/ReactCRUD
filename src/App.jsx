import "./App.css";
import Home from "./components/StdPhone";
import Edit from "./components/Edite";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <h1 className="text-center bg-light text-info py-3">Student Phone</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

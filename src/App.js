import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';

import Home from "./pages/home";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Stock from "./pages/stock";
import Navbar from "./components/navbar";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/stocks" element={<Dashboard/>} />
          <Route path="/stocks/:symbol" element={<Stock/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

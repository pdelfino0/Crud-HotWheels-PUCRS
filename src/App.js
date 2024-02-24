import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Carros from "./pages/Carros";
import AddCarro from "./pages/AddCarro";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/carros" element={<Carros />} />
                    <Route path="/add-carro" element={<AddCarro />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Carros from "./pages/Carros";
import AddCarro from "./pages/AddCarro";
import {useState} from "react";
import Footer from "./components/Footer";

function App() {
    const [carros, setCarros] = useState([]);

    const handleSubmit = (newCar) => {
        setCarros([...carros, newCar]);
    };


    return (<div
        className="bg-gradient-to-tl from-red-600 to-yellow-600 min-h-screen h-full pt-10 mb-autautautautautautautautautauto">
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/carros" element={<Carros carCollection={carros} setCarCollection={setCarros}/>}/>
                <Route path="/add-carro" element={<AddCarro onChange={handleSubmit}/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
        <Footer/>
    </div>);
}

export default App;

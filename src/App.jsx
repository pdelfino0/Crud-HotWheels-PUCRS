import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Carros from "./pages/Carros";
import NotFound from "./pages/NotFound";
import AddCarro from "./pages/AddCarro";
import Footer from "./components/footer/Footer";

function App() {


    return (<div
        className="bg-gradient-to-tl from-red-800 to-yellow-800 z-0 min-h-screen h-full pt-10 mb-auto">
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/carros" element={<Carros/>}/>
                <Route path="/add-carro" element={<AddCarro/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
        <Footer/>
    </div>);
}

export default App;

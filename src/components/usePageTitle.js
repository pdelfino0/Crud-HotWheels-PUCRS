import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export default function usePageTitle() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            document.title = "Home - Crud de HotWheels";
        } else if (location.pathname === "/sobre") {
            document.title = "Sobre - Crud de HotWheels";
        } else if (location.pathname === "/carros") {
            document.title = "Carros - Crud de HotWheels";
        } else if (location.pathname === "/add-carro") {
            document.title = "Adicionar Carro - Crud de HotWheels";
        }
    }, [location]);
}
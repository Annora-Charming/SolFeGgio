import './genStyles.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <NavBar/>
            <Outlet />
            <Footer/>
        </div>
    );
}

export default App;

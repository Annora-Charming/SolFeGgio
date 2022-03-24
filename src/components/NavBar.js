import {Link} from "react-router-dom";

function NavBar() {
    return(
        <nav>
            <Link to="/theory">Учебник</Link>
            <Link to="/exercises">Задачник</Link>
            <Link to="/auth">Войти/Зарегестрироваться</Link>
        </nav>
    );
}

export default NavBar
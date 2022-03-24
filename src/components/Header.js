import {Link} from "react-router-dom";

function Header() {
    return(
      <header>
          <img src="../../public/notes.png" alt="Декоративное изображение нот"/>
          <Link to="/">
              <h1>SolFeGgio</h1>
          </Link>
      </header>
    );
}

export default Header
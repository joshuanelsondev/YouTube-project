import { Link } from 'react-router-dom';
import Home from '../SearchBar/SearchBar';

import './Nav.css';

export default function Nav({ children }) {
  return (
    <header className="nav-wrapper">
      <h1>
        <Link className="nav-link" to="/videos">
          YouTube
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="search-li">{children}</li>
        </ul>
      </nav>
    </header>
  );
}

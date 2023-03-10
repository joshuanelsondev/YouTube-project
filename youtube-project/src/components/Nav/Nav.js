import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <header class="nav-wrapper">
      <h1>
        <Link to="/">YouTube</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

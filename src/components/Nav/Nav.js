import { Link } from 'react-router-dom';
import Home from '../Home/Home';

import './Nav.css';

export default function Nav({ videos, setVideos }) {
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
          <li className="search-li">
            <Home videos={videos} setVideos={setVideos} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

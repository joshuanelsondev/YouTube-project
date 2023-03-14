import { Link } from 'react-router-dom';
import Home from '../Home/Home'

import './Nav.css';

export default function Nav({ videos, setVideos }) {


  return (
    <header className="nav-wrapper">
      <h1>
        <Link className='navLink' to="/videos">YouTube</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link className='navLink' to="/">Home</Link>
          </li>
          <li>
            <Link className='navLink' to="/about">About</Link>
          </li>
          <li className='searchLi'>
            <Home videos={videos} setVideos={setVideos} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

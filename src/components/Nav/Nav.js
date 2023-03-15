import { Link } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './Nav.css';

export default function Nav({ setError, error, children, videos }) {

  return (
    <>
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
      {error && <ErrorMessage setError={setError} />}
    </>
  );
}

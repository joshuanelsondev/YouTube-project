import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <header class="nav-wrapper">
          <article>
            <h1>
              <Link to="/">YouTube</Link>
            </h1>
          </article>
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
};
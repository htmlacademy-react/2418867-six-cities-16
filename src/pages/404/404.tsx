import { Link } from 'react-router-dom';
import './style.css';

function NotFound() {
  return (
    <body className='body'>
      <header className="header">
        <div className="head-text">
          <p>404 Not Found</p>
        </div>
      </header>
      <main>
        <div className="main-wrapper">
          <picture className="scarecrow-img">
            <img
              src="https://raw.githubusercontent.com/nat-oku/devchallenges/main/Scarecrow.png"
              alt="scarecrow"
            />
          </picture>
          <div className="error-text">
            <h2>I have bad news for you</h2>
            <p>
              The page you are looking for might be removed or is temporarily
              unvailable.
            </p>
            <span className="input-group-btn">
              <Link to="/">
                <button className="btn" type="button">
                  Back to homepage
                </button>
              </Link>
            </span>
          </div>
        </div>
      </main>
    </body>
  );
}

export { NotFound };

import "./MyNav.css";
import { Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNav = () => {
  return (
    <>
      <Nav className="navbar navbar-expand-lg nav-center">
        <Link to="/" className="navbar-brand">
          <img
            src="public\netflix_logo.png"
            className="nav-logo-img"
            alt="netflix logo"
          />
        </Link>
        <Button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link nav-link-active" >
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <Link to="/TvShows" className="nav-item">
              <div className="nav-link" >
                TV Shows
              </div>
            </Link>

            <li className="nav-item">
              <a className="nav-link" >
                Movies
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" >
                Recently Added
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" >
                My List
              </a>
            </li>
          </ul>

          <i className="fas fa-search"></i>
          <a className="nav-link" >
            Admin
          </a>
          <i className="fas fa-bell"></i>
          <img src="avatar.png" className="nav-avatar" alt="nav-avatar" />
          <i className="fas fa-caret-down"></i>
        </div>
      </Nav>

      <header className="header">
        <div
          className="banner"
          style={{ backgroundImage: `url("squid-game.jpg")` }}
        >
          <div className="banner-info">
            <h1 className="banner-title">SQUID GAMES</h1>
            <div className="banner-icons">
              <Button className="banner-btn">Play</Button>
              <Button className="banner-btn">My List</Button>
            </div>
            <div className="banner-description">
              Hundreds of cash-strapped players accept a strange invitation to
              compete in children's games. Inside, a tempting prize awaits —
              with deadly high stakes.
            </div>
          </div>
          <div className="banner-fade"></div>
        </div>
      </header>
    </>
  );
};
export default MyNav;

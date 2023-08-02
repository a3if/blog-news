import React from "react";
import "./Header.css";
import { Link, useLocation,useParams } from "react-router-dom";
import { useAuth } from "../../context/authenticationContext";

const Header = () => {
  let location = useLocation();
  const { user, logout } = useAuth();
  const { isLoggedIn } = useAuth();
   const pathId = location.pathname.split("/")[2];

  return (
    <div className="header">
      <header>
        <div className="logo">
          <a href="/">
            <img src="/assets/blog1.png" alt="not found" />
            Blog
          </a>
        </div>

        {location.pathname === "/" ? (
          <Link to="/login" className="link">
            Login
          </Link>
          
        ) : (
          ""
        )}

        {location.pathname === "/login" || location.pathname === "/" || location.pathname===`/postDetail/${pathId}` ? (
          ""
        ) : (
          <nav>
            <ul>
              <li>
                <Link to="/users">User</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
              <li>
                <Link to="/blogs">Blog</Link>
              </li>

              {isLoggedIn ? (
                <li className="login-user">{user.username}</li>
              ) : (
                ""
              )}
              <button onClick={logout}>Logout</button>
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Header;

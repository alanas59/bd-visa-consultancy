import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleLogOut = () =>{
     signOut(auth);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3 px-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            BD Visa
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
              {  !user?
                <Link className="nav-link" aria-current="page" to="/login">
                  Login
                </Link>
                :
                <button 
                onClick={handleLogOut}
                className="btn btn-info text-white mx-2"
                >Signout</button>
              }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

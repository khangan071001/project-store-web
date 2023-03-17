import React from "react";
import { useSelector } from "react-redux";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <div className="navbar-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4 navbar-logo-img" to="/">
            KA Store
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
            <ul className="navbar-nav mx-auto fw-bold mb-2 mb-lg-0">
              <li className="nav-item navbar-item-link-button">
                <Link className="nav-link active" aria-current="page" to="/">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item ms-5 navbar-item-link-button">
                <Link className="nav-link" to="/products">
                  Sản phẩm
                </Link>
              </li>
              <li className="nav-item ms-5 navbar-item-link-button">
                <Link className="nav-link" to="/about">
                  about
                </Link>
              </li>
              <li className="nav-item ms-5 navbar-item-link-button">
                <Link className="nav-link" to="/contact">
                  Liên hệ
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to="/cart" className="btn navbar-icon-cart">
                <i className="fa fa-shopping-cart me-1"></i>
                <p className="small-so-cart">({state.length})</p>
              </Link>
              <Link to="/register" className="btn ms-4 btn-register">
                Register
                <i className="fa fa-user-plus ms-1 "></i>
              </Link>
              <Link to="/login" className="btn ms-1 btn-login">
                Login
                <i className="fa fa-sign-in ms-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import Products from "../products/products";
import imgCart from "../../img/anhcart.png"
import slide1 from "../../img/slide1.jpg"
import "./home.css";
export default function Home() {

  // const state = useSelector((state) => state.handleCart)


  let mybutton = document.querySelector("#myBtn");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  return (
    <div className="hero">
      <div className="card text-bg-dark text-white border-0">
        <img
          src={slide1}
          className="card-img"
          alt="back-ground"
          height="630px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <h5 className="card-title-h5 display-2 fw-bold">
            {/* Wellcome to KA-Store */}
          </h5>
          <p className="card-text lead fs-2">
            {/* Please shopping follow the call of your heart */}
          </p>
        </div>
      </div>
      <div className="cart-products-soluonhg">
        <Link className="cart-fix" id="myBtn">
          <img className="img-cart-button-add" src={imgCart} alt="tesst"/>
          {/* <div className="cart-products-soluonhg-small">{state.length}</div> */}
        </Link>
      </div>
      <Products />
    </div>
  );
}

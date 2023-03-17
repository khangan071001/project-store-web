import React from "react";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux"
import {addCart} from "../../redux/action"
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "./product.css";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) =>{
    dispatch(addCart(product));
  }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const ShowProduct = () => {
    return (
      <div className="form-cart">
        <div className="form-sign-cart">
          <div className="">
            <img
              src={product.image}
              alt={product.title}
              height="350px"
              width="350px"
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-6">{product.title}</h1>
            <h4 className="text-black-50 category-h4-cart">{product.category}</h4>
            <p className="lead">
              Xếp hạng {product.rating && product.rating.rate}
              <i className="fa fa-star icon-sign-cart-star" />
            </p>
            <h3 className="display-6 fw-bold my-4">{product.price} VND</h3>
            <p className="lead description-cart-sign"> {product.description}</p>
            <button className="btn btn-sign-cart btn-left-sign-cart" onClick={() => addProduct(product)}>
              Thêm vào
              <i class="fa-solid fa-cart-shopping cart-icon-sign-product"></i>
            </button>
            <Link to="/cart" className="btn btn-sign-cart">
              Đến 
              <i class="fa-solid fa-cart-shopping cart-icon-sign-product"></i>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  const Loading = () => {
    return <>
        <div className="col-md-6">
            <Skeleton height={400} />
        </div>
        <div className="col-md-6">
            <Skeleton height={400} />
        </div>
    </>;
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}

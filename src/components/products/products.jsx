import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "./products.css";
import donam from "../../img/donam.png";
import donu from "../../img/donu.png";
import trangsucs from "../../img/trangsuc.jpg";
import thietbi from "../../img/thietbi.png";
import { Link } from "react-router-dom";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const reponse = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await reponse.clone().json());
        setFilter(await reponse.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="button d-flex mb-5 pd-5 products-button-select">
          <button className="btn me-4" onClick={() => setFilter(data)}>
            tất cả SP
          </button>
          <button
            className="btn me-4 btn-icon-pro"
            onClick={() => filterProduct("men's clothing")}
          >
            <img src={donam} alt="" className="products-icon-button" />
            <div>Đồ nam</div>
          </button>
          <button
            className="btn me-4 btn-icon-pro"
            onClick={() => filterProduct("women's clothing")}
          >
            <img src={donu} alt="" className="products-icon-button" />
            <div>Đồ nữ</div>
          </button>
          <button
            className="btn me-4 btn-icon-pro"
            onClick={() => filterProduct("jewelery")}
          >
            <img src={trangsucs} alt="" className="products-icon-button" />
            <div>Trang sức</div>
          </button>
          <button
            className="btn btn-icon-pro"
            onClick={() => filterProduct("electronics")}
          >
            <img src={thietbi} alt="" className="products-icon-button" />
            <div>Thiết bị</div>
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4 container-products">
                <div
                  class="card h-100 text-center p-4  card-border-box-shadown"
                  key={product.id}
                >
                  <img
                    src={product.image}
                    class="card-img-top product-card-img"
                    alt={product.title}
                    height="200px"
                  />
                  <div class="products-content">
                    <h5 class="card-title product-card-title">
                      {product.title}
                    </h5>
                    <p class="card-text card-text-font">{product.price} VNĐ</p>
                    <Link to={`/products/${product.id}`} className="btn-link">
                      <button className="btn-add-card">
                        <i class="fa-solid fa-cart-shopping display-i"></i>
                        <p className="btn-p display-p"></p>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-4 py-4">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

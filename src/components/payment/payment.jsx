import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./payment.css"
const Payment = () =>{
  const state = useSelector((state) => state.handleCart);

  var total = 0;
  var harga = 0;

  const itemList = (product) => {
    total = total + product.price;

    harga = product.qty + product.price;
    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0"> {product.title}</h6>
          <span className="text-muted">
            {product.qty} x {product.price}
          </span>
        </div>
        <span className="text-dark fst-normal">${harga}</span>
      </li>
    );
  };
  return (
    <div>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <br></br>
            <br></br>
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="display-6">Danh sách hóa đơn</span>
              <span className="badge rounded-pill">{state.length}</span>
            </h4>
            <ul className="list-group ">
              {state.map(itemList)}
              <li className="list-group-item d-flex justify-content-between">
                <span>Tổng</span>${total}
              </li>
            </ul>
            <br></br>
            <Link
              to="/paysuccess"
              className="btn btn-lg w-100 payment-button"
              type="submit"
            >
              Thanh toán
            </Link>
            <br></br>
            <Link
              to="/products"
              className="btn btn-back-products  btn-lg w-100"
              type="submit"
            >
              Quay lại trang sản phẩm
            </Link>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="display-5">Nhập chi tiết thanh toán của bạn</h4>
            <br></br>
            <form className="needs-validation" novalidate="">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label for="firstName" className="form-label">
                    Tên
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Tên"
                    value=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Vui lòng nhập tên hợp lệ
                  </div>
                </div>

                <div className="col-sm-6">
                  <label for="lastName" className="form-label">
                    Họ
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Họ"
                    value=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Vui lòng nhập họ hợp lệ
                  </div>
                </div>

                <div className="col-12">
                  <label for="email" className="form-label">
                    Email <span className="text-muted"></span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                  vui lòng nhập email hợp lệ
                  </div>
                </div>

                <div className="col-12">
                  <label for="address" className="form-label">
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="123 cầu giấy, hà nội"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Làm ơn nhập địa chỉ hợp lệ
                  </div>
                </div>
              </div>
              <br></br>

              <div className="row gy-3">
                <div className="col-md-12">
                  <label for="cc-number" className="form-label">
                    Số thẻ
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder="0000-0000-0000-0000"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Bắt buộc phải nhập số thẻ
                  </div>
                </div>

                <div className="col-md-4">
                  <label for="cc-expiration" className="form-label">
                    Ngày hết hạn
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder="00-00"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Ngaỳ hết hạn không hợp lệ
                  </div>
                </div>

                <div className="col-md-4">
                  <label for="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Bắt buộc mã bảo mật CVV</div>
                </div>

                <div className="col-md-4">
                  <label for="zip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

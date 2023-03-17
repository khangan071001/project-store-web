import React from "react";
import { Link } from "react-router-dom";
import anh from "../../img/anh-mua.png"
import './paySuccess.css'
export default function PaySuccess() {
  return (
    <div>
      <div className="home-paysuccess">
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img src={anh} className="payment" width={500} alt="anh loi"></img>
          </div>
          <div className="col-md-4">
            <br></br>
            <br></br>
            <p>Bạn đã thanh toán thành công</p>
            <p className="lead">
              Cảm ơn bạn đã mua hàng, thông tin sản phẩm và mua hàng của bạn sẽ
              được gửi đến email của bạn.
            </p>
            <p className="lead">Xin chân thành cảm ơn!</p>
            <Link
              to="/products"
              className="btn btn-back-product-success btn-lg w-100"
              type="submit"
            >
              Tiếp tục mua đồ
              <i class="fa-solid fa-arrow-right icon-back-success"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

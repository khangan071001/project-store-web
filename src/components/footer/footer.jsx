import React from "react";
import "./footer.css";
import anh from "../../img/3.png"
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="footer-top-column-1">
              <div className="footer-column-1">
                <img
                  src={anh}
                  alt="img-footer"
                  className="footer-img"
                ></img>
                <div className="footer-contact footer-phone">
                  <i class="fa-solid fa-phone"></i>
                  <p>085-9250925</p>
                </div>
                <div className="footer-contact footer-email">
                  <i class="fa-solid fa-envelope"></i>
                  <p>khangan071001221001@gmail.com</p>
                </div>
                <div className="footer-link">
                  <div className="link-item">
                    <i class="fa-brands fa-facebook"></i>
                  </div>
                  <div className="link-item">
                    <i class="fa-brands fa-twitter"></i>
                  </div>
                  <div className="link-item">
                    <i class="fa-brands fa-tiktok"></i>
                  </div>
                  <div className="link-item">
                    <i class="fa-brands fa-google"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-top-right">
            <div className="footer-top-column-2">
              <div className="footer-item-h5">
                <h5>Chăm sóc khách hàng</h5>
              </div>
              <div>
                <ul className="footer-ul">
                  <li className="li-a">Trung tâm hỗ trợ</li>
                  <li className="li-a">Thanh toán</li>
                  <li className="li-a">Vận chuyển</li>
                  <li className="li-a">Trả hàng & Hoàn tiền</li>
                  <li className="li-a">Hướng dẫn mua hàng</li>
                </ul>
              </div>
            </div>
            <div className="footer-top-column-3">
              <div className="footer-item-h5">
                <h5>Thanh toán</h5>
              </div>
              <div className="footer-item-img">
                <div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="footer-img-1" alt=""/>
                </div>
                <div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="footer-img-2" alt=""/>
                </div>
              </div>
            </div>
            <div className="footer-top-column-4">
              <div className="footer-item-h5">
                <h5>GIới thiệu</h5>
              </div>
              <div>
                <ul className="footer-ul">
                  <li className="li-a">Thông tin tuyển dụng</li>
                  <li className="li-a">Chính sách</li>
                  <li className="li-a">Kênh người bán</li>
                  <li className="li-a">Điều khoản</li>
                  <li className="li-a">Liên hệ với truyền thông</li>
                </ul>
              </div>
            </div>
            <div className="footer-top-column-5">
              <div className="footer-item-h5">
                <h5>Tải ứng dụng</h5>
              </div>
              <div>
                  <img src="qr-code.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom"></div>
      </div>
      <div>
        <p className="footer-div-email">khangan071001221001@gmail.com</p>
      </div>
    </div>
    
  );
}

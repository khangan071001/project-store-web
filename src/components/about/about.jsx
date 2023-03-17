import React from "react";
import { Link } from "react-router-dom";
import './about.css'
export default function About() {
  return (
    <div className="section">
      <div className="about-container">
        <div className="about-container-section">
          <div className="about-title">
            <h1>Giới thiệu về tôi</h1>
          </div>
          <div className="about-content">
            <h4>Tên tôi: Khang An</h4>
          </div>
          <div className="about-btn-description">
            <button className="about-btn">Đọc chi tiết</button>
          </div>
          <div>
            <Link>facebook</Link>
            <Link className="about-link">twitter</Link>
            <Link>instagram</Link>
          </div>
        </div>
        <div className="about-img">
          <img  src="http://bold.vn/wp-content/uploads/2019/05/bold-academy-5.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

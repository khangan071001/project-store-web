import React, { useRef } from "react";
import './contact.css'
export default function Contact() {
  let initialValue;
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      fullName: initialValue,
      email: initialValue,
      message: initialValue,
    };
    alert("Cảm ơn đã liên hệ!");
  };

  return (
    <div className="home">
      <p>khangan071001221001@gmail.com</p>
      <p className="lead">0859250925</p>
      <hr></hr>
      <p>Địa chỉ</p>
      <p className="lead">Viet Nam</p>
      <hr></hr>
      <br></br>
      <br></br>

      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} method="POST">
            <div class="mb-3">
              <label for="exampleForm" class="form-label">
                Họ và tên
              </label>
              <input
                type="text"
                name="fullName"
                className="fullName"
                class="form-control"
                id="exampleForm"
                placeholder="Họ và tên"
              />
            </div>
            <div class="mb-3">
              <label for="exampleForm" class="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="email"
                class="form-control"
                // id="exampleFormControlInput1"
                placeholder="youremail@gmail.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                name="message"
                rows="3"
                placeholder="nhập........"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-dark btn-lg">
              Gửi
            </button>
          </form>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <a className="contact contact-link" href="#">
        Instagram{" "}
      </a>
      <a className="contact contact-link" href="#">
        Facebook{" "}
      </a>
      <a className="contact contact-link" href="#">
        Behance{" "}
      </a>
      <a className="contact contact-link" href="#">
        Twitter{" "}
      </a>
    </div>
  );
}

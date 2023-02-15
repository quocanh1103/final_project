import React from "react";
import "./index.css";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row-footer">
          <div>
            <div className="footer-item">
              <img
                src="https://noithattvp.vn/image/cache/catalog/icon-footer/cam-ket-chat-luong-DQ454H-cr-300x300.png"
                alt=""
              />
              <h5>
                Bảo hành đến 14 tháng, cam kết 1 đổi 1 nếu bị lỗi về sản phẩm
              </h5>
            </div>
          </div>
          <div>
            <div className="footer-item">
              <img
                src="https://noithattvp.vn/image/cache/catalog/icon-footer/giao-hang-trong-24h-7yr83A-cr-300x300.png"
                alt=""
              />
              <h5>Giao hàng tận nơi toàn quốc</h5>
            </div>
          </div>
          <div>
            <div className="footer-item">
              <img
                src="https://noithattvp.vn/image/cache/catalog/icon-footer/mau-ma-thoi-thuong-ExUi5h-cr-300x300.png"
                alt=""
              />
              <h5>Mẫu mã thời thượng, cập nhật mới theo xu hướng nội thất</h5>
            </div>
          </div>
          <div>
            <div className="footer-item">
              <img
                src="https://noithattvp.vn/image/cache/catalog/icon-footer/bao-hanh-den-15-nam-NEH9Cd-cr-300x300.png"
                alt=""
              />
              <h5>Cam kết chất lượng, được kiểm tra hàng rồi thanh toán</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container ft2">
        <div className="">
          <h5>SIÊU THỊ NỘI THẤT TVP® </h5>
          <div className="name-footer">
            <ul>
              <li>
                CÔNG TY CP XD TM DV THÀNH VẠN PHÁT
                <br />
                SIÊU THỊ NỘI THẤT TVP®
                <br />
                Địa chỉ showroom: 439/13 Lê Văn Quới, P. Bình Trị Đông A, Q.
                Bình Tân, Tp. HCM
                <br />
                Điện thoại: 0934782024 - 0902 359 377
                <br />
                Tổng đài: 1900 234 535
              </li>
              <li>
                <b>Điện thoại:</b>0934782024 - 0934782024
              </li>
              <li>
                <b>Email:</b>sieuthinoithat.tvp@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h5>Thông tin</h5>
          <ul>
            <li>
              <a href="">Hướng dẫn thanh toán</a>
            </li>
            <li>
              <a href="">Chính sách bảo mật</a>
            </li>
            <li>
              <a href="">Chính sách đổi trả</a>
            </li>
            <li>
              <a href="">Quy định giao hàng</a>
            </li>
            <li>
              <a href="">
                <img
                  src="https://noithattvp.vn/image/catalog/bocongthuong.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Tài khoản</h5>
          <ul>
            <li>
              <a href="">Tài khoản</a>
            </li>
            <li>
              <a href="">Lịch sử đặt hàng</a>
            </li>
            <li>
              <a href="">Danh sách yêu thích</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

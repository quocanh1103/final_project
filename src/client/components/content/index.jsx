import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import HeaderList from "../header/header_list";
import ScrollToTop from "react-scroll-to-top";
import "./index.css";
import Carditem from "../carditem";
import { useState, useEffect } from "react";

function Content(props) {
  return (
    <>
      <ScrollToTop smooth />
      <HeaderList />
      <div className="container">
        <div className="sort"></div>
        <div className="module-title-2">
          <h2>SẢN PHẨM MỚI VỀ</h2>
          <div className="bot"></div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <Carditem type={"sanphammoive"} />
        </div>
      </div>

      <div className="container">
        <div className="module-title-2">
          <h2>BỘ SƯU TẬP MỚI</h2>
          <div className="bot"></div>
        </div>
        <div className="row">
          <Carditem type={"new_collection"} />
        </div>
        <Link to="/more-new-collection" className="btn-ct">
          <span>
            <i class="fa-sharp fa-solid fa-arrow-right"></i>
          </span>
          xem tất cả
        </Link>
      </div>

      <div className="container">
        <div className="module-title-2">
          <h2>SÂN VƯỜN, NGOÀI TRỜI</h2>
          <div className="bot"></div>
        </div>
        <div className="row">
          <Carditem type={"sanvuonngoaitroi"} />
        </div>
        <Link to="/more-san-vuon" className="btn-ct">
          <span>
            <i class="fa-sharp fa-solid fa-arrow-right"></i>
          </span>
          xem tất cả
        </Link>
      </div>

      <div className="container">
        <div className="module-title-2">
          <h2>VĂN PHÒNG</h2>
          <div className="bot"></div>
        </div>
        <div className="row">
          <Carditem type={"vanphong"} />
        </div>
        <Link to="/more-van-phong" className="btn-ct">
          <span>
            <i class="fa-sharp fa-solid fa-arrow-right"></i>
          </span>
          xem tất cả
        </Link>
      </div>

      <div className="container">
        <div className="module-title-2">
          <h2>BÀN GHẾ CAFE</h2>
          <div className="bot"></div>
        </div>
        <div className="row">
          <Carditem type={"banghecafe"} />
        </div>
        <Link to="/more-ban-ghe-cafe" className="btn-ct">
          <span>
            <i class="fa-sharp fa-solid fa-arrow-right"></i>
          </span>
          xem tất cả
        </Link>
      </div>

      <div className="container">
        <div className="module-title-2">
          <h2>GHẾ QUẦY BAR</h2>
          <div className="bot"></div>
        </div>
        <div className="row">
          <Carditem type={"ghequaybar"} />
        </div>
        <Link to="/more-ghe-quay-bar" className="btn-ct">
          <span>
            <i class="fa-sharp fa-solid fa-arrow-right"></i>
          </span>
          xem tất cả
        </Link>
      </div>

      <div className="container">
        <div className="module-title-2">
          <h2>SOFA</h2>
          <div className="bot"></div>
        </div>
        <div className="row">
          <Carditem type={"sofa"} />
        </div>
        <Link to="/more-sofa" className="btn-ct">
          <span>
            <i class="fa-sharp fa-solid fa-arrow-right"></i>
          </span>
          xem tất cả
        </Link>
      </div>

      <div className="container">
        <div className="module-title-2">
          <h2>BÀN TRÀ, BÀN SOFA</h2>
          <div className="bot"></div>
        </div>
        <div className="row">
          <Carditem type={"bantrabansofa"} />
        </div>
        <Link to="/more-ban-tra-ban-sofa" className="btn-ct">
          <span>
            <i class="fa-sharp fa-solid fa-arrow-right"></i>
          </span>
          xem tất cả
        </Link>
      </div>

      <div className="container">
        <div className="module-title-2">
          <h2>GHẾ THƯ GIÃN</h2>
          <div className="bot"></div>
        </div>
        <div className="row">
          <Carditem type={"ghethugian"} />
        </div>
        <Link to="/more-ghe-thu-gian" className="btn-ct">
          <span>
            <i class="fa-sharp fa-solid fa-arrow-right"></i>
          </span>
          xem tất cả
        </Link>
      </div>

      <div className="container">
        <div className="row row-bottom">
          <div className="item">
            <div className="image">
              <img
                src="https://noithattvp.vn/image/cache/catalog/banner/fuCHkWBazDSFtUDjbsPNJ2OCgJJFceGXGLpVLLoV-cr-600x160.jpeg"
                alt=""
              />
            </div>
            <div className="content">
              <div className="content-text">
                <h3>không gian đẹp</h3>
                <div>
                  <span> Bộ sưu tập các mẫu thiết kế đẹp</span>
                </div>
                <div className="btn">
                  <a to="">Xem thêm</a>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image">
              <img
                src="https://noithattvp.vn/image/cache/catalog/banner/sC3IjLLzoVVmD3bWBOCcm2iig0of7GJdYFuGn2Rh-cr-600x160.jpeg"
                alt=""
              />
            </div>
            <div className="content">
              <div className="content-text">
                <h3>Ý tưởng mới</h3>
                <div>
                  <span>Không gian sáng tạo ý tưởng</span>
                </div>
                <div className="btn">
                  <a href="">Xem thêm</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;

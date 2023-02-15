import React from "react";
import "./index.css";
import NewCollection from "./nav_head/new_collecttions";
import MainSlide from "../slideshow/main_slide";
import { NavDropdown } from "react-bootstrap";
import Kitchen from "./nav_head/kitchen";
import Lounge from "./nav_head/lounge";
import Bedroom from "./nav_head/bedroom";
import Cafeshop from "./nav_head/shopcafe";
import Office from "./nav_head/office";
import Promotion from "./nav_head/promotion";

function Header() {
  return (
    <div>
      <div className="header-main">
        <div className="row-items">
          <div>
            <a href="/">
              <img src="https://noithattvp.vn/image/cache/catalog/1-san-pham-line-moi/logo-noi-that-moi-t10-mau-tron-01-450x140.jpg" />
            </a>
          </div>
          <div>
            <form className="search-form">
              <input
                type="search"
                placeholder="Tìm kiếm..."
                className="search-field"
                autoComplete="off"
              ></input>

              <input
                type="submit"
                className="search-submit"
                placeholder=""
                value="tìm kiếm"
              ></input>
            </form>
          </div>
          <div className="header-content">
            <div>
              <img
                src="https://noithattvp.vn/image/cache/catalog/hotline-noithattvp-290x120.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="header-action">
            <ul>
              <li>
                <a href="" title="Đăng nhập">
                  <i className="fa-solid fa-key"></i>
                  <span>Đăng nhập</span>
                </a>
              </li>
              <li>
                <a href="" title="Đăng ký">
                  <i class="fa-solid fa-user"></i>
                  <span>Đăng ký</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="cart">
            <a href="">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="count">0</span>
            </a>
          </div>
        </div>
        <div className="nav-head">
          <div className="topnav">
            <NavDropdown
              title="New Collection"
              id="nothing"
              renderMenuOnMount={true}
            >
              <div className="drop">
                <NewCollection />
              </div>
            </NavDropdown>
            <NavDropdown
              title="PHÒNG BẾP"
              id="nothing"
              renderMenuOnMount={true}
            >
              <Kitchen />
            </NavDropdown>
            <NavDropdown
              title="PHÒNG KHÁCH"
              id="nothing"
              renderMenuOnMount={true}
            >
              <Lounge />
            </NavDropdown>
            <NavDropdown
              title="PHÒNG NGỦ"
              id="nothing"
              renderMenuOnMount={true}
            >
              <Bedroom />
            </NavDropdown>
            <NavDropdown
              title="SHOP CAFE VÀ BAR"
              id="nothing"
              renderMenuOnMount={true}
            >
              <Cafeshop />
            </NavDropdown>
            <NavDropdown
              title="SÂN VƯỜN, NGOÀI TRỜI"
              id="nothing"
              renderMenuOnMount={true}
            ></NavDropdown>
            <NavDropdown
              title="VĂN PHÒNG"
              id="nothing"
              renderMenuOnMount={true}
            >
              <Office />
            </NavDropdown>
            <NavDropdown
              title="KHUYẾN MÃI"
              id="nothing"
              renderMenuOnMount={true}
            >
              <Promotion />
            </NavDropdown>
            <NavDropdown
              title="TIN TỨC"
              id="nothing"
              renderMenuOnMount={true}
            ></NavDropdown>
          </div>
        </div>
        <div>
          <MainSlide />
        </div>
      </div>
    </div>
  );
}

export default Header;
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LoginLink = (props) => {
  return (
    <>
      <div className="header-action">
        <ul>
          <li>
            <Link to="/dangnhap" title="Đăng nhập">
              <i className="fa-solid fa-key"></i>
              <span>Đăng nhập</span>
            </Link>
          </li>
          <li>
            <Link to="/dangky" title="Đăng ký">
              <i class="fa-solid fa-user"></i>
              <span>Đăng ký</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LoginLink;

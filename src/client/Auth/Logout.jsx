import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CheckLoginSlice } from "../components/Reducer/checklogin/CheckLogin";
import "./index.css";

const Logout = (props) => {
  const dispatch = useDispatch();
  const HandleSignout = () => {
    sessionStorage.setItem("id_user", "");
    dispatch(
      CheckLoginSlice.actions.deleteId(sessionStorage.getItem("id_user"))
    );
  };
  return (
    <div>
      <Link to="/dangnhap" onClick={HandleSignout}>
        <span className="logout-btn">Đăng xuất</span>
      </Link>
    </div>
  );
};

export default Logout;

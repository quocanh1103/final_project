import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./logIn.css";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import UserApis from "../../../apis/Users/userApis";
import NotificationLogIn from "../modal/ModalLogIn";
import { useDispatch } from "react-redux";
import { CheckLoginSlice } from "../Reducer/checklogin/CheckLogin";

function Login(props) {
  const [account, setAccount] = useState([]);
  const Post = useNavigate();
  const [user, setUser] = useState([]);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response = await UserApis.getAll();

      setUser(response.data);
    };

    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Yêu cầu điền thông tin")
        .matches(
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Lỗi cú pháp"
        ),
      password: Yup.string()
        .required("Yêu cầu điền thông tin")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
          "Tối thiểu sáu ký tự, ít nhất một chữ cái và một số"
        ),
    }),
    onSubmit: (values) => {
      // e.preventDefault;
      const getUser = values;

      console.log("gia tri", getUser);

      const findUser = user.find((value) => {
        return value.email === getUser.email;
      });

      // user.map((account) => {
      if (findUser && findUser.password == getUser.password) {
        sessionStorage.setItem("id_user", findUser.id);

        sessionStorage.setItem("name_user", findUser.name);

        dispatch(
          CheckLoginSlice.actions.addId(sessionStorage.getItem("id_user"))
        );

        setSuccess(true);
      } else {
        toast.error(
          " Đăng nhập thất bại vui lòng kiểm tra lại email hoặc mật khẩu !",
          {
            position: "top-right",
            autoClose: 1400,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
      }
      // });
    },
  });

  return (
    <div className="loginpage">
      {success && <NotificationLogIn />}
      <div className="login">
        <h1 className="H1_login">ĐĂNG NHẬP HỆ THỐNG</h1>
        <form onSubmit={formik.handleSubmit} className="infoform">
          <label htmlFor="">Nhập địa chỉ Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Điền email"
            className="iplogin"
          />
          {formik.errors.email && (
            <p className="errorMsg">{formik.errors.email}</p>
          )}
          <label htmlFor="">Điền mật khẩu</label>

          <input
            autocomplete="off"
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Điền mật khẩu"
            className="iplogin"
          />
          {formik.errors.password && (
            <p className="errorMsg">{formik.errors.password}</p>
          )}

          <div>
            <button className="btnlogin" type="submit">
              Đăng Nhập
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;

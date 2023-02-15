import React, { useState } from "react";
import "./signup.css";
import { useForm } from "react-hook-form";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import UserApis from "../../../apis/Users/userApis";
import NotificationSignUp from "../modal/modal";

function Signup(props) {
  const { reset } = useForm();

  const [success, setSuccess] = useState(false);
  var isSignUp = false;
  const Post = useNavigate();

  let fetchData = async (params) => {
    try {
      const response = await UserApis.getUserEmail(params.email);

      if (response.status == 200 && response.data.length == 0) {
        console.log("res", response.data);
        isSignUp = true;
      }
    } catch (error) {}
  };

  const formik = useFormik({
    initialValues: {
      // idUser: v4(),
      name: "",
      email: "",
      password: "",
      confirmedPassword: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Yêu cầu điền thông tin")
        .min(4, "Yêu cầu tên trên 4 kí tự"),
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
      confirmedPassword: Yup.string()
        .required("Yêu cầu điền thông tin")
        .oneOf([Yup.ref("password"), null], "Yêu cầu nhập đúng mật mã"),
      phoneNumber: Yup.string()
        .required("Yêu cầu điền thông tin")
        .matches(/^[0-9\-\+]{9,11}$/, "Số điện thoại không hợp lệ "),
    }),
    onSubmit: async (values) => {
      // e.preventDefault();

      reset();

      fetchData(values);
      await new Promise((res) => setTimeout(res, 1100));
      console.log(isSignUp);
      if (isSignUp) {
        const params = {
          idUser: values.idUser,
          name: values.name,
          email: values.email,
          password: values.password,
          phone: values.phoneNumber,
          address: values.address,
        };
        const addUser = UserApis.add(params);
        setSuccess(true);
      } else {
        toast.error(" Email đã tồn tại !", {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    },
  });

  return (
    <div className="signuppage">
      {success && <NotificationSignUp />}
      <div className="signup ">
        <h1>ĐĂNG KÝ</h1>
        <form onSubmit={formik.handleSubmit} className="infoform">
          <label htmlFor="">Điền họ và tên</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Điền họ và tên"
            className="iplogin"
          />
          {formik.errors.name && (
            <p className="errorMsg">{formik.errors.name}</p>
          )}
          <label htmlFor="">Nhập địa chỉ Email</label>
          <input
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
            autoComplete="off"
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
          <label htmlFor="">Xác nhận lại mật khẩu</label>

          <input
            autocomplete="off"
            type="password"
            id="confirmedPassword"
            name="confirmedPassword"
            value={formik.values.confirmedPassword}
            onChange={formik.handleChange}
            placeholder="Điền mật khẩu"
            className="iplogin"
          />
          {formik.errors.confirmedPassword && (
            <p className="errorMsg">{formik.errors.confirmedPassword}</p>
          )}
          <label htmlFor="">Nhập số điện thoại</label>

          <input
            autocomplete="off"
            type="phoneNumber"
            id="phoneNumber"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            placeholder="Điền số điện thoại"
            className="iplogin"
          />
          {formik.errors.phoneNumber && (
            <p className="errorMsg">{formik.errors.phoneNumber}</p>
          )}
          {formik.errors.address && (
            <p className="errorMsg">{formik.errors.address}</p>
          )}

          <div>
            <button className="btnsignup" type="submit">
              Đăng ký
            </button>
            <button
              type="button"
              className="btnreset"
              onClick={(e) => formik.resetForm()}
            >
              Reset
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;

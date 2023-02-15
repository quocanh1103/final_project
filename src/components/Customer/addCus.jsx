import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import productApis from "../../apis/products/ProductsAPI";

function AddCus(props) {
  const [user, setUser] = useState([]);

  const getDataUser = async () => {
    try {
      const res = await productApis.getUsers();
      return setUser(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <div>
      <div className="table_order">
        <h3 className="text_table_order">KHÁCH HÀNG CHỜ DUYỆT</h3>
        <p id="line">
          ______________________________________________________________________________
        </p>
        <table className="table col-11">
          <thead className="thead-dark">
            <tr>
              <th>Tên khách hàng</th>
              <th>Điện thoại</th>
              <th>Email</th>
              <th>Địa chỉ</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item) => {
              return (
                <tr>
                  <td scope="col">{item.name}</td>
                  <td scope="col">{item.phone}</td>
                  <td scope="col">{item.email}</td>
                  <td scope="col">{item.address}</td>
                  <td>
                    <Link to="/admin/Customer">
                      <button className="btn btn-success">Xác Nhận</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddCus;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import productApis from "../../apis/products/ProductsAPI";
import "./index.css";

function AddOrder(props) {
  const [order, setOrder] = useState([]);
  // let name = useSelector((state) => state.donHangReducer.name);
  useEffect(() => {
    const getDataOrderAdd = async () => {
      try {
        const res = await productApis.getOrders();
        return setOrder(res.data);
      } catch (error) {}
    };

    getDataOrderAdd();
  }, []);

  const updateData = (id) => {
    const updateOrderData = async () => {
      try {
        // const task = await productApis.getOrders(id);
        const updateForm = {
          ...order,
          status: "Đã xác nhận",
          deliver: "Đang giao",
        };
        const res = await productApis.patchData(id);
        return updateForm.data;
        console.log("id : ", id);
      } catch (error) {}
    };
    updateOrderData();
  };

  // const handleSubmit = (values) => {
  // 	const postDataOrderAdd = async () => {
  // 		try {
  // 			const res = await productApis.postOrders(values);
  // 			console.log(res.data);
  // 			return res.data;
  // 		} catch (error) {}
  // 	};
  // 	postDataOrderAdd();
  // };

  return (
    <div>
      <div className="table_order">
        <h3 className="text_table_order">ĐƠN HÀNG CHỜ DUYỆT</h3>
        <p id="line">
          ______________________________________________________________________________
        </p>
        <table class="table col-9">
          <thead className="thead-dark">
            <tr>
              <th>Tên khách hàng</th>
              <th>Đơn hàng</th>
              <th>Số lượng</th>
              <th>Địa chỉ</th>
              <th>Tổng tiền</th>
              <th>Vận chuyển</th>
              <th>Trạng thái</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {order.map((item) => {
              if (
                item.status === "Chưa được xác nhận" &&
                item.deliver === "Chưa được vận chuyển"
              ) {
                return (
                  <tr>
                    <td className="align-middle">{item.nameUser}</td>
                    <td className="align-middle">{item.nameProduct}</td>
                    <td className="align-middle">{item.count}</td>
                    <td className="align-middle">{item.address}</td>
                    <td className="align-middle">{item.total} </td>
                    <td className="align-middle">{item.deliver}</td>
                    <td className="align-middle">{item.status}</td>

                    <td className="align-middle">
                      {/* <Link to="/admin/order"> */}
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          updateData(item.id);
                        }}
                      >
                        Xác Nhận
                      </button>
                      {/* </Link> */}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddOrder;

import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "./cart.css";
import CardApis from "../../../apis/cards/cardApis";
import queryString from "query-string";

function History(props) {
  const [historyData, setHistoryData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const params = {
        idUser: sessionStorage.getItem("id_user"),
      };
      const query = queryString.stringify(params);
      const response = await CardApis.GetCartOder(query);
      setHistoryData(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="history">
        <h1>LỊCH SỬ MUA HÀNG</h1>
        {historyData.length > 0 ? (
          <Table>
            <thead>
              <tr>
                <th className="th1">
                  <strong>ID ORDER</strong>
                </th>
                <th className="th2">
                  <strong>ID USER</strong>
                </th>
                <th className="th3">
                  <strong>TÊN KHÁCH HÀNG</strong>
                </th>
                <th className="th4">
                  <strong>TÊN SẢN PHẨM</strong>
                </th>
                <th className="th5">
                  <strong>SỐ ĐIỆN THOẠI</strong>
                </th>
                <th className="th6">
                  <strong>TỔNG</strong>
                </th>
                <th className="th7">
                  <strong>VẬN CHUYỂN</strong>
                </th>
                <th className="th8">
                  <strong>TÌNH TRẠNG</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              {historyData &&
                historyData.map((value, index) => (
                  <tr key={index}>
                    <td>{value.id}</td>
                    <td>{value.idUser}</td>
                    <td>{value.nameUser}</td>
                    <td>{value.nameProduct}</td>
                    <td>{value.phone}</td>
                    <td>{value.total?.toLocaleString("en-US")}đ</td>
                    <td>{value.deliver}</td>
                    <td>{value.status}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        ) : (
          <>
            <h2>Bạn chưa mua sản phẩm nào cả</h2>
          </>
        )}
      </div>
    </>
  );
}

export default History;

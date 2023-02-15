import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productApis from "../../../../apis/products/productApis";

import "./index.css";

function Newcollection2() {
  const [products, setProducts] = useState([]);

  var category = "banghecafe";
  const fetchData = async () => {
    try {
      const response = await productApis.getProductByCateAll(category);
      setProducts(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="newcollection1">
      <div className="container">
        <div>
          <h1>BỘ BÀN ĂN TVP-LV</h1>
          <div className="body">
            <div>
              <h4>NEW COLLECTION BÀN ĂN MẶT ĐÁ TVP-LV</h4>
            </div>

            <span>
              <em>
                <strong>Bộ sưu tập mang phong thái thượng lưu, bền bỉ</strong>
              </em>
            </span>
            <ul>
              <li>
                - Được tuyển chọn kỹ lưỡng từ những mẫu bàn và ghế với chất liệu
                và kiểu Dáng mới nhất 2022
              </li>
              <li>
                - Điều làm nên sự đặc biệt chính là sự cầu kì, tinh tế trong
                từng chi tiết nhằm mang đến khách hàng những sản phẩm có chất
                lượng tốt nhất.
              </li>
              <li>
                - Điều làm nên sự đặc biệt chính là sự cầu kì, tinh tế trong
                từng chi tiết nhằm mang đến khách hàng những sản phẩm có chất
                lượng tốt nhất.
              </li>
              <li>
                - Chân bàn LV bằng khung bàn thép mạ Carbon màu xám bóng, đế bọc
                inox mạ titan màu gold đắt giá, bóng bẩy với thiết kế thời
                thượng, đậm chất nghệ thuật Hay bàn thông minh tiện lợi 1,4m kéo
                dài 2m
              </li>
              <li>
                - Bộ bàn ăn tại NỘI THẤT TVP là sự lựa chọn hoàn hảo để tô điểm
                và nâng tầm vị thế sang trọng của gia chủ.
              </li>
            </ul>

            <p className="info">
              <span>
                Liên hệ ngay để được tư vấn và báo giá với mức Sale cực kỳ hấp
                dẫn:
              </span>
              <span>Fanpage: https://www.facebook.com/sieuthinoithatTVP</span>
              <span>Website: https://noithattvp.vn</span>
              <span>Zalo/ Hotline: 0934782024</span>
              <span>Điện thoại: 02866 810 415</span>
              <span>Tổng đài: 1900 235 535</span>
              <span>
                Showroom: 439/13 Lê Văn Quới, P. Bình Trị Đông A, Q. Bình Tân,
                Tp. HCM
              </span>
            </p>
          </div>
        </div>
        <div className="newcollection2_content">
          <div className="row">
            {products.map((value) => (
              <div className="row-img" id={value.id} key={value.id}>
                <div className="image">
                  <Link to={"/cardbuy/" + value.id}>
                    <img src={value.image} alt="" />
                  </Link>
                </div>
                <div className="caption">
                  <Link to={"/cardbuy/" + value.id}>
                    <h5>{value.name}</h5>
                  </Link>
                  <p className="price">
                    <span className="price-new">
                      {value.pricenew.toLocaleString("en-US")}
                      <span className="">đ</span>
                    </span>
                    <span className="price-old">
                      {value.priceold.toLocaleString("en-US")}
                      <span className="">đ</span>
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newcollection2;

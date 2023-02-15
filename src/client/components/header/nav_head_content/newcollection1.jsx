import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productApis from "../../../../apis/products/productApis";
import "./index.css";
function Newcollection1() {
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
          <h1>BÀN ĂN MẶT ĐÁ TVP-2022 THIẾT KẾ TRÊN NỀN CHẤT LIỆU VÀNG</h1>
          <div className="body">
            <div>
              <h4>
                BÀN ĂN MẶT ĐÁ TVP-2022 - THIẾT KẾ SANG TRỌNG ĐẦY THẨM MỸ TRÊN
                NỀN CHẤT LIỆU VÀNG
              </h4>
            </div>

            <span>
              <em>
                <strong>
                  Quý khách hàng vui lòng Inbox Fanpage duy nhất của NỘI THẤT
                  TVP hoặc liên hệ qua Zalo/ Hotline: 0934 060 067 - 0934 782
                  024 để được tư vấn đúng mẫu mã và chất lượng
                </strong>
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
                - Từ mặt đá phủ Ceramic với những đường vân chìm vô cùng đẹp mắt
                đến khung bàn inox mạ titan màu gold đắt giá, bóng bẩy với thiết
                kế thời thượng, đậm chất nghệ thuật
              </li>
              <li>
                - Bộ bàn ăn tại NỘI THẤT TVP là sự lựa chọn hoàn hảo để tô điểm
                và nâng tầm vị thế sang trọng của gia chủ.
              </li>
              <li>
                - Kế thừa sự phát triển đa dạng từ xu hướng nội thất thông minh.
                Các mẫu bàn ăn mặt đá thông minh tròn xoay 360 độ hay bàn ăn kéo
                dài- thu gọn mang đến trải nghiệm tuyệt vời cho quý khách trong
                bữa ăn gia đình
              </li>
            </ul>
            <span>
              <strong>
                CÙNG NỘI THẤT TVP THAM KHẢO VÀ CHỌN MUA NGAY BỘ BÀN ĂN MẶT ĐÁ BỘ
                SƯU TẬP TVP-2022 THIẾT KẾ TRÊN NỀN TẢNG VÀNG
              </strong>
            </span>
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
        <div className="newcollection1_content">
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

export default Newcollection1;

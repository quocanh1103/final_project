import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productApis from "../../../../apis/products/productApis";

function SofaBang(props) {
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
    <div className="container">
      <div className="sofa_bang">
        <p>
          <h1>SOFA BĂNG</h1>
        </p>
        <p>
          CÔNG TY CP XD TM DV THÀNH VẠN PHÁT VỚI THƯƠNG HIỆU NỘI THẤT TVP đã và
          đang trở nên quen thuộc với tổ ẩm của nhiều gia đình tại Tp. Hồ Chí
          Minh nói riêng và các tỉnh thành phía Nam nói chúng <br />
          Mỗi sản phẩm Sofa, Sofa băng của nội thất TVP đều là những mẫu thiết
          kế mang tới nguồn cảm hứng tươi sáng, ấm áp cho không gian đầy sáng
          tạo và độc đáo. NỘI THẤT TVP chuyên sản xuất và phân phối các sản phẩm
          sofa, sofa băng chất lượng, cao cấp phù hợp tới từng nhu cầu của khách
          hàng và kiến trúc riêng của công trình. Các bộ sofa băng được thiết kế
          đa dạng, mang đến nét đặc trưng riêng cho mỗi không gian nội thất
        </p>
      </div>
      <div className="sofa_bang_product">
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
  );
}

export default SofaBang;

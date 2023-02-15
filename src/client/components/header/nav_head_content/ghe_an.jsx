import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productApis from "../../../../apis/products/productApis";
function GheAn(props) {
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
      <div className="ghe_an">
        <p>
          <h1>GHẾ ĂN</h1>
        </p>

        <p>
          <strong>1. Ghế ăn hiện đại</strong>
        </p>
        <img
          src="https://noithattvp.vn/image/catalog/2022-ghe-an/ghe-cami-mau-cam-da-bo-04.jpg"
          alt=""
        />

        <p>
          Sự gắn liền với nhau của các thành viên trong gia đình thường xuất
          hiện trong các bữa ăn gia đình. Những khoảnh khắc quây quần như thế
          thường có sự chứng kiến của những chiếc ghế ăn. Trải qua thời gian và
          sự phát triển của xã hội, ghế ăn không còn đơn thuần chỉ là những
          chiếc ghế đẩu bằng gỗ đơn giản. Chúng được thiết kế với những kiểu
          dáng đa dạng hơn, vừa đảm bảo chức năng cơ bản vừa có thể mang lại cảm
          giác thoải mái và yêu cầu thẩm mỹ ngày càng cao của các hộ gia đình.
        </p>
        <p>
          Các chất liệu tham gia vào thành phần của một chiếc ghế ăn hiện đại
          ngày càng đa dạng hơn, từ gỗ, nhựa, inox cho đến các chất liệu phủ cao
          cấp như vả tổng hợp, da... khiến cho chiếc ghế ăn trở thành một vật
          phẩm trang trí trong mỗi bộ bàn ăn gia đình. Mỗi một loại hình căn hộ
          hay nhà ở, chủ nhà cần những thiết kế, màu sắc và sự phù hợp phong
          thủy khác nhau, do đó nhu cầu và thị trường ghế ăn hiện nay vô cùng đa
          dạng, đáp ứng được những thị hiếu khác nhau của khách hàng.
        </p>
        <p>
          <strong>2. Những lưu ý khi lựa chọn ghế ăn</strong>
        </p>

        <p>
          Nếu là việc lựa chọn bàn ghế ăn theo bộ thì thường chủ nhà chỉ cần
          quan tâm tới diện tích nhỏ có đặt được hay không, còn lại kiểu dáng,
          màu sắc và số lượng ghế đã được gợi ý theo set tại showroom nội thất.
          Tuy nhiên, nếu khách hàng chọn mua ghế ăn rời thì sẽ cần lưu ý những
          đặc điểm sau:
        </p>

        <p>
          <strong>2.1. Số lượng ghế ngồi</strong>
        </p>
        <img
          src="https://noithattvp.vn/image/catalog/2022/ban-ceramic-trang-van-xam-khoi-va-ghe-sky-03.jpg"
          alt=""
        />

        <p>
          Số lượng ghế ngồi phụ thuộc vào 2 yếu tố: diện tích bàn ăn và số lượng
          người ngồi. Thông thường người ta sẽ tính số lượng thành viên trong
          gia đình và khả năng khách đến chơi để tính toán số lượng ghế vừa đủ
          với nhu cầu. Nếu số lượng ghế ít hơn nhu cầu phát sinh sẽ gây bất
          tiện, ngược lại số lượng ghế nhiều sẽ không thể kê ghế vào sát bàn gây
          chiếm dụng diện tích và mất thẩm mỹ.
        </p>

        <p>
          <strong>2.2. Chiều cao giữa bàn và ghế</strong>
        </p>
        <p>
          Sự hòa hợp về chiều cao giữa bàn và ghế ăn giúp người ngồi cảm thấy
          thoải mái nhất. Nếu khách hàng mua bàn ghế ăn theo set thì điều này
          không cần lo lắng, tuy nhiên trong trường hợp mua ghế ăn riêng lẻ, cần
          ngồi thử và tham khảo chiều cao ghế có phụ hợp với chiều cao bàn hay
          không. Quý khách có thể ngồi tham khảo với các loại bàn ăn có chiều
          cao tương tự ngay tại showroom trong trường hợp loại bàn ở nhà quý
          khách không được trưng bày.
        </p>

        <p>
          <strong>2.3. Chất liệu và màu sắc</strong>
        </p>
        <img
          src="https://noithattvp.vn/image/catalog/2021/da-microfiber-01.jpg"
          alt=""
        />
        <p>
          Chất liệu ghế hiện nay khá đa dạng, bao gồm: gỗ, kim loại, kết hợp gỗ
          và đệm da hoặc kim loại và đệm da, vải tổng hợp… Khách hàng khi mua
          ghế cần xem xét các yếu tố như sự hài hòa với nội thất trong nhà, sự
          kết hợp màu sắc, mức độ bền, các vấn đề liên quan đến trẻ em…
        </p>

        <p>
          Chất liệu và màu sắc ghế cũng được nhiều khách hàng quan tâm về phong
          thủy cân nhắc kỹ lưỡng trong quá trình mua sản phẩm. Việc hòa hợp
          phong thủy của bộ bàn ghế ăn và chủ nhà sẽ tạo cảm giác thoải mái hơn
          trong các hoạt động bữa ăn.
        </p>
        <p>
          <strong>3. Mua ghế ăn ở đâu tốt</strong>
        </p>
        <p>
          Khách hàng thường áp dụng 2 cách mua ghế ăn như sau: đến showroom xem
          trực tiếp và mua hàng, mua online thông qua website hoặc các trang
          thương mại điện tử và mạng xã hội. Đối với bất kỳ hình thức nào cũng
          cần sự đảm bảo về chất lượng hàng hóa và dịch vụ. Với nội thất TVP,
          chúng tôi luôn lắng nghe khách hàng nhằm mang lại những sản phẩm và
          dịch vụ tốt nhất. Khách hàng đến với nội thất TVP sẽ được trải nghiệm
          những dịch vụ tốt nhất.
        </p>
        <ul>
          <li>- Sản phẩm thực tế đúng với hình ảnh.</li>
          <li>- Giao hàng đúng giờ, tận nơi.</li>
          <li>- Hàng mới 100%, đổi trả miễn phí nếu phát hiện hàng lỗi.</li>
          <li>- Bảo hành 1 năm toàn bộ sản phẩm.</li>
          <li>
            - Khách hàng kiểm tra hàng hóa đúng với đơn đặt hàng trước khi thanh
            toán.
          </li>
          <li>
            - Vận chuyển tận nơi cho khách hàng tại thành phố Hồ Chí Minh và các
            tỉnh lân cận (Bình Dương, Đồng Nai, Vũng Tàu, Long An, Tiền Giang,
            Tây Ninh...) hoặc giao bằng hình thức giao hàng tiết kiệm đến tay
            khách hàng.
          </li>
          <li>
            - Khách hàng có thể thanh toán linh hoạt bằng tiền mặt hoặc chuyển
            khoản.
          </li>
        </ul>
        <p>Nội thất TVP rất hân hạnh được đồng hành cùng quý khách!</p>
      </div>
      <div className="ghe_an_product">
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

export default GheAn;

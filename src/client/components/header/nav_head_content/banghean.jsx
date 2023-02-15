import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productApis from "../../../../apis/products/productApis";
function DingingTable(props) {
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
      <div className="dining_table">
        <p>
          <h1>BÀN GHẾ ĂN</h1>
        </p>

        <p>
          Bàn ghế ăn là một món đồ nội thất không thể thiếu trong gian bếp của
          mỗi gia đình Việt. Bữa cơm gia đình chính là biểu hiện của sum vầy, sự
          yêu thương và là nơi nuôi dưỡng tình cảm giữa các thành viên trong
          nhà. Những giây phút cùng nhau tận hưởng, chìm đắm trong tình yêu
          thương, niềm hạnh phúc gia đình bộc lộ ngay tại bộ bàn ăn gia đình.
        </p>
        <p>
          Chọn nội thất TVP: chuyên cung cấp bàn ghế ăn nhập khẩu, đẹp hiện đại
          để chọn ngay sự sum vầy, ấm cúng.
        </p>
        <p>
          Không chỉ tạo nên không gian phòng bếp, phòng ăn đầm ấm, bàn ghế ăn
          còn thể hiện được phong cách riêng của mỗi gia chủ qua việc chọn lựa
          chất liệu và mẫu thiết kế.
        </p>
        <p>Các điểm lưu ý để chọn bàn ghế ăn đẹp và ưng ý nhất.</p>
        <strong>1. Xu hướng thiết kế và kiểu dáng bàn ăn hiện nay</strong>
        <p>
          Ngày nay, bàn ghế ăn không đơn thuần chỉ là nơi ăn uống của cả gia
          đình. Mà còn là món đồ trang trí nội thất thể hiện cá tính và thẩm mỹ
          của gia chủ
        </p>
        <p>
          Đặc biệt là các căn hộ cao cấp, các trung cư hay nhà phố hiện đại. Thì
          bộ bàn ghế ăn chính là món đồ trang trí nội thất không thể thiếu.
          Chính vì vậy, bạn cần tìm hiểu xu hướng, các mẫu bàn ghế ăn hợp xu thế
          hiện nay
        </p>
        <p>
          Bàn ăn hiện đại với thiết kế giản dị, tinh tế nhưng không kém phần
          sang trọng đang là một trong những lựa chọn hàng đầu của các gia đình.
        </p>
        <p>Các mẫu bàn ghế ăn hiện nay bao gồm:</p>
        <p>
          <strong>1.1 Bàn ghế ăn hiện đại</strong>
        </p>

        <img
          src="https://noithattvp.vn/image/catalog/2021/bo-moi-1.jpg"
          alt=""
        />
        <p>
          Nhắc đến bàn ăn hiện đại khiến người ta liên tưởng đến những mẫu bàn
          ghế ăn với kiểu dáng phong phú, hiện đại mang tính đa nhiệm vô cùng
          cao. Vượt qua khuôn khổ những chiếc bàn ghế ăn truyền thống chỉ phục
          vụ mục đích bữa ăn cơ bản. Các loại bàn ghế hiện đại không chỉ mang
          tính năng chuyên biệt mà nó còn là vật dụng trang trí trong căn phòng
          bếp. Do đó, bàn ghế ăn hiện đại không chỉ phong phú về kiểu dáng, màu
          sắc mà còn được cấu tạo từ các vật liệu phong phú như gỗ, kim loại,
          đá, kính, da, vải tổng hợp... <br />
          Các loại bàn ghế ăn hiện nay được thiết kế theo kiểu dáng phong phú
          nhằm phù hợp với các phong cách nội thất nhà khác nhau. Ngoài kiểu
          dáng, sự thoải mái trong quá trình sử dụng cũng được đặt lên hàng đầu
          nhằm đáp ứng sự ứng dụng không chỉ trong các bữa ăn gia đình thường
          ngày mà còn phù hợp cho các bữa tiệc với thời gian dùng bữa khá lâu.
        </p>

        <p>
          <strong>1.2 Bàn ăn thông minh</strong>
        </p>

        <img
          src="https://noithattvp.vn/image/catalog/ban-an-thong-minh/ban-an-thong-minh-1m2-1m7-04.jpg"
          alt=""
        />
        <p>
          Bàn ăn thông minh là xu hướng mới của những năm gần đây được nhiều gia
          đình thành phố hoặc các gia đình có diện tích phòng bếp khiêm tốn lựa
          chọn khá nhiều. Với thiết kế linh hoạt giúp gấp gọn hay mở rộng dễ
          dàng, tiết kiệm không gian sống cho những ngôi nhà có diện tích sử
          dụng nhỏ hẹp hoặc các căn hộ chung cư. Một số bàn ăn hiện đại hơn còn
          có các ngăn kéo đựng dụng cụ ăn uống, giúp không những tiết kiệm không
          gian mà còn tiết kiệm thời gian trong quá trình chuẩn bị bữa ăn. Đi
          cùng với xu hướng hiện đại, bàn ăn thông minh chắc chắn sẽ còn bùng
          nổ, thâm nhập vào mọi ngóc ngách của từng gia đình.
        </p>
        <p>
          <strong>1.3 Bàn ăn mặt đá</strong>
        </p>

        <img
          src="https://noithattvp.vn/image/catalog/2022/ban-ceramic-trang-van-xam-khoi-va-ghe-sky-03.jpg"
          alt=""
        />
        <p>
          Các loại đá tự nhiên và nhân tạo như đá cẩm thạch và đá ceramic hiện
          nay được ứng dụng rất nhiều trong các loại bàn ăn hiện đại và tân cổ
          điển. Với đặc tính độ bền cao, khả năng chống va đập và chịu nhiệt
          tốt, các loại đá này được sử dụng làm mặt bàn cho các loại bàn ăn chân
          gỗ hoặc chân kim loại. Độ đa dạng và vân đá và khả năng dễ lau chùi
          cũng là điểm ưu tiên cao giúp bàn ăn mặt đá được lựa chọn nhiều trong
          các gia đình hiện nay.
        </p>
        <strong>1.4 Bàn ăn gỗ</strong>
        <p>
          Xu hướng xử dụng những bộ bàn ăn từ gỗ cao su tự nhiên, gỗ ash, gỗ sồi
          hay gỗ me tây là xu hướng bạn không thể bỏ qua.
        </p>
        <p>
          Hòa mình vào thiên nhiên, những bộ bàn ăn gỗ với kiểu dáng hiện đại,
          đơn giản giúp cho bạn cảm thấy thư giãn và vô cùng nhẹ nhàng khi
          thưởng thức bữa ăn
        </p>
        <p>
          <strong>2. Làm thế để chọn được một bộ bàn ăn phù hợp</strong>
        </p>

        <img
          src="https://noithattvp.vn/image/catalog/1-feedback/fb-rvp-03.jpg"
          alt=""
        />
        <p>
          Vậy giữa hàng trăm bộ bàn ăn với nhiều kiểu dáng và mẫu mã khác nhau.
          Làm sao chọn được bộ bàn ăn phù hợp và đẹp nhất cho không gian nhà bạn
          ?
        </p>
        <p>
          Trước tiên, bạn cần phải chọn lựa được kiểu dáng mà mình mong muốn,
          liệu đó sẽ là kiểu bàn ăn hiện đại với thiết kế sang trọng, hay bàn ăn
          thông minh nhỏ gọn, tối ưu diện tích, hay một mẫu bàn ăn hấp dẫn, thể
          hiện gu thẩm mỹ của người dùng như bàn ăn mặt đá, hay gần gũi, thân
          thiện như bàn ăn gỗ.
        </p>
        <p>
          Tiếp đến là xem lại không gian nhà mình xem phù hợp với hình dạng bàn
          nào và kích thước bàn bao nhiêu. Nếu là không gian nhỏ hẹp nên lựa
          những mẫu bàn ăn mặt đá có kích thước 1,2m hay 1,4m hoặc bàn ăn thông
          minh, giúp tiết kiệm diện tích và tối ưu được nhu cầu sử dụng. Còn nếu
          là nhà mặt phố với không gian bếp rộng rãi, hãy chọn ngay một bộ bàn
          ăn hình chữ nhật, bàn ăn tròn để cân bằng.
        </p>
        <p>
          Cuối cùng, số lượng người trong gia đình chính là yếu tố để quyết định
          kích thước bàn ăn. Với những gia đình trẻ, ít thành viên, lựa chọn bàn
          ăn 4 ghế là sự lựa chọn hoàn hảo. Ngược lại với những thành viên đông
          người, bàn ăn 6 ghế luôn được ưu tiên, có thể kết hợp thêm 1 - 2 ghế
          để trở thành bàn ăn cho đại gia đình.
        </p>
        <p>
          <strong>3. Nên mua bàn ăn với mức giá bao nhiêu ?</strong>
        </p>
        <span>
          Hiện nay thị trường bàn ghế ăn chia thành 2 phân khúc giá chính:
        </span>
        <p>
          <strong>3.1. Bàn ghế ăn giá rẻ</strong>
        </p>
        <img
          src="https://noithattvp.vn/image/catalog/ban-an/bo-ban-an-ghe-rio-mau-go-tu-nhien/2-02.jpg"
          alt=""
        />
        <p>
          Chúng ta thường nghĩ rằng: bàn ăn giá rẻ là những bộ bàn ăn thanh lý
          hoặc đã qua sử dụng. Nhưng sự thật không hẳn là như vây. Bởi với công
          nghệ hiện đại, những bộ bằn ăn được làm từ gỗ cao su thiên nhiên hoặc
          bằng gỗ công nghiệp trong quá trình sản xuất đã được xử lý chống mối
          mọt và cong vênh nên chất lượng vô cùng tốt. Mặc dù không được cầu kỳ
          như những bộ bàn ăn được làm bằng gỗ tự nhiên, nhưng bàn ăn gỗ công
          nghiệp lại được thiết kế vô cùng hấp dẫn. Vì thế hãy thay đổi suy nghĩ
          bàn ghế ăn giá rẻ là bàn ghế không chất lượng đi bạn nhé.
        </p>
        <p>
          <strong>3.2. Bàn ghế ăn cao cấp</strong>
        </p>
        <img
          src="https://noithattvp.vn/image/catalog/ban-an-mat-da/bo-ban-an-mat-da-ceramic-khung-inox-ma-vang-04.jpg"
          alt=""
        />
        <p>
          <span>
            Phân khúc này thường là những bộ bàn ăn nhập khẩu, bàn ăn mặt đá,
            bàn ăn thông minh, hay bàn ăn gỗ sồi, gỗ me tây
          </span>
        </p>

        <p>
          Giá mỗi bộ bàn ăn tùy thuộc vào kích thước, kiểu dáng, và bao nhiêu
          ghế thì sẽ có giá khác nhau. Tại nội thất TVP các bộ bàn ăn cao cấp
          thường giao động từ 8,000,000 đến 35,000,000 đ tùy theo mẫu
        </p>
        <p>
          <span>
            Các sản phẩm tại Nội thất TVP rất đa dạng về kiểu dáng, kích thước
            từ 4 chỗ đến 6 chỗ, 8 chỗ, bàn tròn…giúp bạn thoải mái lựa chọn mẫu
            mã.
          </span>
        </p>
        <p>
          <strong>
            4. Vì sao nên chọn mua sản phẩm bàn ghế ăn tại nội thất TVP (Thành
            Vạn Phát)
          </strong>
        </p>
        <p>
          Là người tiêu dùng, điều bạn quan tâm nhất khi chọn mua sản phẩm chính
          là giá thành, chất lượng và sự đa dạng về mẫu mã. Tại nội thất TVP
          chúng tôi đáp ứng đầy đủ những điều mà bạn đang cần:
        </p>
        <p>
          - Giá bán tại kho không qua trung gian nên đảm bảo rẻ nhất thị trường.
        </p>
        <p>
          - Hơn +1000 mẫu bàn ghế ăn đa dạng về chất liệu, kiểu dáng cho bạn tha
          hồ lựa chọn.
        </p>
        <p>- Giảm giá cho những dự án lớn hay khi bạn mua với số lượng lớn.</p>
        <p>
          - Cam kết chất lượng sản phẩm tốt nhất, luôn được kiểm định trước khi
          trưng bày và trao đến khách hàng.
        </p>
        <p>- Bàn ghế ăn đa dạng về mẫu mã:</p>
        <p>
          Với nhiều năm kinh nghiệm thiết kế đồ dùng nội thất, tại nội thất TVP
          đã cung cấp hàng nghìn mẫu bộ bàn ghế phòng ăn không chỉ đa dạng về
          chất liệu mà còn đa dạng về kiểu dáng:
        </p>
        <ul>
          <li>- Bàn ăn 4 ghế/ 6 ghế, 8 ghế.</li>
          <li>
            - Bàn ghế ăn gỗ/ bàn ghế ăn gỗ cao su thiên nhiên/ bàn ghế ăn inox.
          </li>
          <li>- Bàn ghế ăn xếp gọn thông minh.</li>
          <li>- Bộ bàn ăn ghế chữ A cao cấp.</li>
          <li>- Bộ bàn ăn chữ X, bộ bàn ăn dạng 4 chân.</li>
          <li>- Bộ bàn ăn tròn...</li>
        </ul>
        <p>
          Và rất nhiều mẫu bộ bàn ăn khác, bạn có thể tham khảo đầy đủ các sản
          phẩm bên dưới.
        </p>
        <p>
          Sản phẩm có nhiều màu sắc đa dạng cho bạn nhiều sự lựa chọn. Kiểu dáng
          bàn có nhiều hình dạng chữ nhật, vuông, oval, tròn. Ghế đa số được
          thiết kế bọc đệm, bọc da cao cấp và phần tựa lưng bo cong vừa vặn tạo
          sự thoải mái cho người ngồi.
        </p>
        <p>
          Các sản phẩm bộ bàn ghế ăn bằng gỗ đều được gia công chống mối mọt cẩn
          thận trước khi trưng bày và bán ra thị trường, nên về chất lượng và độ
          bền bạn có thể hoàn toàn tin tưởng và yên tâm.
        </p>
        <p>
          Đối với các mẫu bàn ăn hiện đại, bàn ăn mặt đá, bàn ăn nhập khẩu, bàn
          ăn thông minh …Các chi tiết trên bàn ghế đều được kiểm tra cẩn thận
          đảm bảo về sự đồng điệu từ màu sắc đến kích thước.
        </p>
        <p>
          Thời gian bảo hành sản phẩm lên đến 12 tháng. Thời gian bảo hành lâu
          hơn so với các cửa hàng nội thất trung gian.
        </p>
        <p>Liên hệ ngay đến Nội thất TVP để được tư vấn.</p>
      </div>
      <div className="banghean_product">
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

export default DingingTable;

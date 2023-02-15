import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import productApis from "../../../apis/products/productApis";
import CardApis from "../../../apis/cards/cardApis";
import { ToastContainer, toast } from "react-toastify";
import "./cardbuy.css";
import ScrollToTop from "react-scroll-to-top";
import { CartSlice } from "../Reducer/ReducerCart";
import UserApis from "../../../apis/Users/userApis";
import ComentApis from "../../../apis/comment/CommentApis";
import queryString from "query-string";

function Cardbuyitem() {
  const id_user = useSelector((state) => state.reducercart.id_User);
  console.log("user", id_user);
  const listcart = useSelector((state) => state.reducercart.listcart);

  const [product, setProduct] = useState(null);
  const [list_comment, set_list_comment] = useState([]);
  const [load_comment, set_load_comment] = useState(false);

  const [star, setStar] = useState(1);

  const [historyData, setHistoryData] = useState([]);

  const [comment, setComment] = useState("");

  const { id } = useParams();

  const [text, setText] = useState(1);

  const dispatch = useDispatch();

  // Hàm thay đổi sao đánh giá
  const onChangeStar = (e) => {
    setStar(e.target.value);
  };

  // Hàm thay đổi comment
  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  const onChangeText = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      const params = {
        idUser: sessionStorage.getItem("id_user"),
      };
      const sutu = {
        idProduct: id,
      };
      const query = queryString.stringify(params);
      const querry = queryString.stringify(sutu) + "%20";
      const res = querry + "&" + query;
      console.log(res);
      const response = await CardApis.GetCartOder(res);
      setHistoryData(response.data);
    };
    fetchData();
  }, []);

  // Hàm này dùng để bình luận
  const handlerComment = () => {
    if (!sessionStorage.getItem("id_user")) {
      toast.error(" Bạn cần phải đăng nhập để bình luận !", {
        position: "bottom-left",
        autoClose: 1100,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    if (historyData.length < 1) {
      toast.error(" Bạn cần phải mua hàng để bình luận !", {
        position: "bottom-left",
        autoClose: 1100,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    const fetchSendComment = async () => {
      const params = {
        idProduct: id,
        idUser: sessionStorage.getItem("id_user"),
        fullname: sessionStorage.getItem("name_user"),
        content: comment,
        star: star,
      };

      const response = await ComentApis.postCommentProduct(params);
      toast.success("Bình luận thành công !", {
        position: "bottom-left",
        autoClose: 1100,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      set_load_comment(true);
    };

    fetchSendComment();

    setComment("");
  };
  const upText = () => {
    const value = parseInt(text) + 1;

    setText(value);
  };

  const downText = () => {
    const value = parseInt(text) - 1;

    if (value === 0) return;

    setText(value);
  };

  console.log("Params: " + id);
  const fetchData = async () => {
    try {
      const response = await productApis.getDetail(id);
      setProduct(response.data);
    } catch (error) {}
  };
  console.log("sp", product);

  useEffect(() => {
    fetchData();
  }, []);
  // hiện cmt
  useEffect(() => {
    const fetchData = async () => {
      const params = {
        idProduct: id,
      };

      const query = "?" + queryString.stringify(params);

      const response = await ComentApis.getCommentProduct(query);
      console.log(response);

      set_list_comment(response.data);
    };

    fetchData();
  }, [id]);
  console.log("list comment", list_comment);
  // Phụ thuộc vào state load_comment
  useEffect(() => {
    if (load_comment) {
      const fetchData = async () => {
        const params = {
          idProduct: id,
        };

        const query = "?" + queryString.stringify(params);

        const response = await ComentApis.getCommentProduct(query);

        set_list_comment(response.data);
      };

      fetchData();

      set_load_comment(false);
    }
  }, [load_comment]);

  if (product == null) {
    return <div className="err">Không tồn tài sản phẩm</div>;
  }

  const addToCart = () => {
    // let id_user_cart = "";
    if (sessionStorage.getItem("id_user")) {
      var id_user_cart = sessionStorage.getItem("id_user");
    } else {
      id_user_cart = id_user;
    }
    console.log("id_user_cart", id_user_cart);

    const data = {
      idUser: id_user_cart,
      idProduct: product.id,
      nameProduct: product.name,
      priceProduct: product.pricenew,
      count: text,
      img: product.image,
    };

    if (sessionStorage.getItem("id_user")) {
      console.log("Bạn Đã Đăng Nhập!");

      const fetchPost = async () => {
        const params = {
          idUser: id_user_cart,
          idProduct: product.id,
          count: text,
          img: product.image,
          nameProduct: product.name,
          priceProduct: product.pricenew,
          // nameUser: user.name,
        };

        const response = await CardApis.postAddToCart(params);
        toast.success(" Đặt hàng thành công !", {
          position: "bottom-left",
          autoClose: 1400,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        console.log("kết quả", response.data);
      };
      fetchPost();
    } else {
      dispatch(CartSlice.actions.addCard(data));
      toast.success(" Đặt hàng thành công !", {
        position: "bottom-left",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <ScrollToTop smooth />

      {product === null ? (
        <>
          <p>Không tồn tài sản phẩm</p>
        </>
      ) : (
        <div className="container" id={product.id} key={product.id}>
          <div className="cardbuy">
            <div className="card-image">
              <img src={product.image} alt="" />
            </div>
            <div className="card-text">
              <h1>{product.name}</h1>
              <div className="description">
                <label htmlFor="">Giá:</label>
                <span className="price-new">
                  {product.pricenew?.toLocaleString("en-US")}đ
                </span>
              </div>
              <div className="description">
                <label htmlFor="">Thương hiệu: </label>
                <span>TVP</span>
              </div>
              <div className="description">
                <label htmlFor="">Danh mục: </label>
                <span>{product.category}</span>
              </div>
              <div className="description">
                <label htmlFor="">Trạng thái: </label>
                <span>
                  {product.quantity > 0 ? (
                    <>
                      <span>Còn hàng</span>
                    </>
                  ) : (
                    <>Hết hàng</>
                  )}
                </span>
              </div>
              <div className="input-group">
                <button className="input-text" type="button" onClick={downText}>
                  -
                </button>
                <div className="text-center">
                  <input
                    className="text-number"
                    type="text"
                    value={text}
                    onChange={onChangeText}
                  />
                </div>
                <button className="input-text" type="button" onClick={upText}>
                  +
                </button>
              </div>

              <button type="button" onClick={addToCart} className="buttton-add">
                Đặt Hàng
              </button>
            </div>
          </div>
          <div className="detail">
            <h3>MÔ TẢ</h3>
            <em>
              <strong>
                <span>{product.name}</span>
              </strong>
            </em>
            <br /> <br />
            <p>
              Nâng tầm vị thế gia chủ với Bộ bàn ghế ăn mặt đá tròn xoay Inox
              TVP-LUXTX380: Bộ bàn ăn bao gồm bàn ăn mặt đá trắng vân mây chân
              Inox và 6 ghế ăn nhập khẩu Luxury Crown <br />
              Được chất lọc từ các chất liệu chất lượng và kiểu dáng sang trọng
              hiện đại, Bộ bàn ăn mang đến cho gia chủ một phong cách nội thất
              hoàn hảo, đẩng cấp. và vô cùng thoải mái khi tận hưởng bữa ăn gia
              đình
            </p>
            <p>
              <strong>1. Hình ảnh thực tế sản phẩm</strong>
              <div className="img-detail">
                <img src={product.image1} alt="" />
              </div>
              <div className="img-detail">
                <img src={product.image2} alt="" />
              </div>
              <div className="img-detail">
                <img src={product.image3} alt="" />
              </div>
            </p>
            <p>
              <strong>2. Giao hàng tận nơi</strong>
            </p>
            <p>
              Nội thất TVP hỗ trợ giao hàng tận nơi đến quý khách tại khu vực
              thành phố Hồ Chí Minh và các tỉnh lân cận (Bình Dương, Long An,
              Vũng Tàu, Tây Ninh) qua hệ thống vận chuyển nội bộ của chúng tôi.
              <br />
              Những khách hàng ở các khu vực khác, nội thất TVP hỗ trợ giao đến
              cho quý khách thông qua các hệ thống giao nhận toàn quốc hoặc các
              chành xe với mức phí được báo trước cho quý khách. <br />
              Liên hệ ngay để được tư vấn cụ thể và nhận nhiều chương trình
              khuyến mãi hấp dẫn khác đến từ Nội thất TVP. <br /> RẤT HÂN HẠNH
              ĐƯỢC ĐỒNG HÀNH CÙNG QUÝ KHÁCH
            </p>
            <span>
              <strong>
                CÔNG TY CP XD TM DV THÀNH VẠN PHÁT <br />
                SIÊU THỊ NỘI THẤT TVP
              </strong>
            </span>
            <p>
              CN Bình Tân: 439/13 Lê Văn Quới, P. Bình Trị Đông A, Q. Bình Tân,
              TP. Hồ Chí Minh <br />
              Website: noithattvp.vn <br />
              Tổng đài: 1900 234 535 <br />
              Hotline: 0934 060 067. Điện thoại: 02866 810 415 <br />
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Bình luận:</label>
            <textarea
              className="form-control"
              rows="3"
              onChange={onChangeComment}
              value={comment}
            ></textarea>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex w-25">
              <span className="mt-2">Đánh giá: </span>
              &nbsp; &nbsp;
              <input
                className="form-control w-25"
                style={{ "margin-top": "3px" }}
                type="number"
                min="1"
                max="5"
                value={star}
                onChange={onChangeStar}
              />
              &nbsp; &nbsp;
              <span className="mt-2">Sao</span>
            </div>
          </div>
          <div>
            <a
              className="btn btn-dark btn-sm btn-block px-0 text-white"
              style={{ width: "10rem" }}
              onClick={handlerComment}
            >
              Gửi
            </a>
          </div>
          <div className="tab-pane fade show active">
            <div className="p-4 p-lg-5 bg-white">
              <div className="row">
                <div className="col-lg-8">
                  {list_comment.length > 0 &&
                    list_comment.map((value) => (
                      <div className="media mb-3" key={value._id}>
                        <img
                          className="rounded-circle"
                          src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v937-aew-111_3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=8ce2cd03f94f2baddcb332cfb50f78b9"
                          alt=""
                          width="50"
                        />
                        <div className="media-body ml-3">
                          <h6 className="mb-0 text-uppercase">
                            {value.fullname}
                          </h6>
                          <ul className="list-inline mb-1 text-xs">
                            <li className="list-inline-item m-0">
                              {value.star == "1" ? (
                                <img
                                  className="star"
                                  src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Star_rating_1_of_5.png"
                                  alt=""
                                />
                              ) : (
                                <></>
                              )}
                              {value.star == "2" ? (
                                <img
                                  className="star"
                                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Star_rating_2_of_5.png"
                                  alt=""
                                />
                              ) : (
                                <></>
                              )}
                              {value.star == "3" ? (
                                <img
                                  className="star"
                                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Star_rating_3_of_5.png"
                                  alt=""
                                />
                              ) : (
                                <></>
                              )}
                              {value.star == "4" ? (
                                <img
                                  className="star"
                                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Star_rating_4_of_5.png"
                                  alt=""
                                />
                              ) : (
                                <></>
                              )}
                              {value.star == "5" ? (
                                <img
                                  className="star"
                                  src="https://upload.wikimedia.org/wikipedia/commons/1/17/Star_rating_5_of_5.png"
                                  alt=""
                                />
                              ) : (
                                <></>
                              )}
                            </li>
                          </ul>
                          <p className="text-small mb-0 text-muted">
                            {value.content}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default Cardbuyitem;

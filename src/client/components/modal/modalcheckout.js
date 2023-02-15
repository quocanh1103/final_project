import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./modal.css";

function ModalCheckout(props) {
  return (
    <div className="modal_signup">
      <div className="wapper-modal">
        <div className="group-modal">
          <h3>Thông Báo</h3>
          <p>Bạn Đã mua hàng Thành Công</p>
          <div className="btn-modal">
            <Link to="/" className="btnTiepTuc">
              Tiếp Tục
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCheckout;

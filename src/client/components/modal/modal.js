import PropTypes from "prop-types";
import "./modal.css";

NotificationSignUp.propTypes = {
  onChangeSuccess: PropTypes.func,
};

NotificationSignUp.defaultProps = {
  onChangeSuccess: null,
};

function NotificationSignUp(props) {
  return (
    <div className="modal_signup">
      <div className="wapper-modal">
        <div className="group-modal">
          <h3>Thông Báo</h3>
          <p>Bạn Đã Đăng Ký Thành Công</p>
          <div className="btn-modal">
            <a className="btnTiepTuc" href="/dangnhap">
              Tiếp Tục
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationSignUp;

import PropTypes from "prop-types";
import "./modal.css";

NotificationLogIn.propTypes = {
  onChangeSuccess: PropTypes.func,
};

NotificationLogIn.defaultProps = {
  onChangeSuccess: null,
};

function NotificationLogIn(props) {
  return (
    <div className="modal_signup">
      <div className="wapper-modal">
        <div className="group-modal">
          <h3>Thông Báo</h3>
          <p>Bạn Đã Đăng Nhập Thành Công</p>
          <div className="btn-modal">
            <a className="btnTiepTuc" href="/">
              Tiếp Tục
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationLogIn;

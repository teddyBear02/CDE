import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useRef } from "react";
import Users from "../API/apiLogin";

let Login = () => {
  const inputNameElem = useRef<HTMLInputElement>(null);
  const inputPassElem = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  let isAuthorized = false;

  const handleLog = () => {
    for (let user of Users) {
      if (
        inputNameElem.current?.value === user.accName &&
        inputPassElem.current?.value === user.password
      ) {
        isAuthorized = true;
        break;
      }
    }

    if (isAuthorized) {
      navigate("/home");
      console.log("User đã được xác thực");
    } else {
      alert("Sai thông tin đăng nhập");
    }
  };
  return (
    <>
      <div className="bgImg">
        <div className="formLog">
          <h3>Đăng nhập</h3>
          <div className="form-floating m>b-3" id="">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              ref={inputNameElem}
            />
            <label form="floatingInput">Tên đăng nhập</label>
          </div>
          <div className="form-floating" id="">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              ref={inputPassElem}
            />
            <label form="floatingPassword">Mật khẩu</label>
          </div>

          <div className="d-flex justify-content-between">
            <p>
              <Link to={"/Register"} className="link-opacity-100">
                Đăng kí nhanh
              </Link>
            </p>
            <p>
              <Link to={"/ForgotPass"} className="link-opacity-100">
                Quên mật khẩu
              </Link>
            </p>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto" id="btn-log">
            <Button title="Đăng nhập" myEvent={handleLog} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

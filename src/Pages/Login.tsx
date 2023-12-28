import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";

let Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful");
        localStorage.setItem("userData", data.metadata.token);
        navigate("/home");
        // Thực hiện các hành động sau khi đăng nhập thành công (chuyển hướng, lưu token, v.v.).
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData);
        alert("Thông tin đăng nhập không chính xác");
        // Xử lý lỗi (hiển thị thông báo lỗi, v.v.).
      }
    } catch (error) {
      console.error("Error during login:", error);
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
              name="email"
              onChange={handleInputChange}
            />
            <label form="floatingInput">Tên đăng nhập</label>
          </div>
          <div className="form-floating" id="">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
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
            <Button title="Đăng nhập" myEvent={handleLogin} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

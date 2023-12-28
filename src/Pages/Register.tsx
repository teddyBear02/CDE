import Button from "../components/Button";
import { useState } from "react";

let Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    NumberPhone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Khi hàm callback được gọi, formData sẽ được cập nhật
  };

  const handleRegister = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful:", data);
        // Thực hiện các hành động sau khi đăng ký thành công (chuyển hướng, hiển thị thông báo, v.v.).
      } else {
        const errorData = await response.json();
        console.error("Registration failed:", errorData);
        // Xử lý lỗi (hiển thị thông báo lỗi, v.v.).
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  return (
    <>
      <div className="bgImg">
        <div id="wrapValid">
          <h2>Đăng kí</h2>
          <div id="validation">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Nguyễn Văn A"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <label htmlFor="floatingInput">Tên người dùng</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingPassword"
                placeholder="Email"
                value={formData.email}
                name="email"
                onChange={handleInputChange}
              />
              <label htmlFor="floatingPassword">Nhập email của bạn</label>
            </div>

            <div className="form-floating mb-4">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <label htmlFor="floatingPassword">Nhập mật khẩu</label>
            </div>

            <div className="form-floating mb-4">
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                className="form-control"
                id="floatingPassword"
                maxLength={12}
                placeholder="Số điện thoại"
                name="NumberPhone"
                value={formData.NumberPhone}
                onChange={handleInputChange}
              />
              <label htmlFor="floatingPassword">Nhập số điện thoại</label>
            </div>

            <div id="btnValid" className="mb-4">
              <Button
                title="Đăng kí"
                subClass={"regisBtn"}
                myEvent={handleRegister}
              />
            </div>

            <div id="otherValid">
              <p>Bạn có thể đăng kí qua:</p>
              <div id="icon">
                <i className="bi bi-google"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-github"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

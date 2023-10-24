import Button from "./Button";
let Validation = () => {
  return (
    <>
      <div id="validation">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email hoặc số điện thoại</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Nhập mật khẩu</label>
        </div>

        <div className="form-floating mb-4">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Nhập lại mật khẩu</label>
        </div>
        <div id="btnValid" className="mb-4">
          <Button title="Đăng kí" subClass={"regisBtn"} />
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
    </>
  );
};

export default Validation;

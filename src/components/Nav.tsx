let Nav = () => {
  return (
    <>
      <nav id="myNav" className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CDE - Quản lý dự án
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="d-flex flex-row-reverse">
            <i className="bi bi-person" id="userIcon"></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

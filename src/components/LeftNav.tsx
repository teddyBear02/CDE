let LeftNav = () => {
  return (
    <>
      <div id="leftNav">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <i className="bi bi-folder"></i> Files
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-clock-history"></i> Hoạt động
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-clipboard-check-fill"></i> Việc cần làm
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LeftNav;

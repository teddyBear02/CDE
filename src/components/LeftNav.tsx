let LeftNav = () => {
  return (
    <>
      <div id="leftNav">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Files
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Hoạt động
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Việc cần làm
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LeftNav;

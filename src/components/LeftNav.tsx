let LeftNav = () => {
  return (
    <>
      <ul className="nav flex-column" id="leftNav">
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
    </>
  );
};

export default LeftNav;

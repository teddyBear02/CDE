import { useState } from "react";
import { Link } from "react-router-dom";

let LeftNav = () => {
  return (
    <>
      <div id="leftNav">
        <ul className="nav flex-column">
          <li className="nav-item">
            <i className="bi bi-folder-fill"></i> Dữ liệu
          </li>
          <li className="nav-item">
            <i className="bi bi-clock-history"></i> Hoạt động
          </li>
          <li className="nav-item">
            <i className="bi bi-clipboard-check-fill"></i> Việc cần làm
          </li>
          <li className="nav-item">
            <i className="bi bi-people-fill"></i> Đội nhóm
          </li>
          <li className="nav-item" id="setting">
            <i className="bi bi-gear-fill"></i> {"Cài đặt"}
            <i className="bi bi-caret-down-fill"></i>
            <ul className="subSetting">
              <li>
                <i className="bi bi-body-text"></i>
                Chi tiết dự án
              </li>
              <li>
                <i className="bi bi-tags-fill"></i>
                Thẻ
              </li>
              <li>
                <i className="bi bi-key-fill"></i>
                Quyền cấp phép
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LeftNav;

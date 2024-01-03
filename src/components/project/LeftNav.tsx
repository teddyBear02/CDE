import { useState } from "react";
import { Link } from "react-router-dom";

let LeftNav = () => {
  let nav = [
    {
      icon: "bi bi-folder-fill",
      title: "Dữ liệu",
      link: "",
    },

    {
      icon: "bi bi-clock-history",
      title: "Hoạt động",
      link: "activity",
    },

    {
      icon: "bi bi-clipboard-check-fill",
      title: "Việc cần làm",
      link: "todo",
    },

    {
      icon: "bi bi-people-fill",
      title: "Đội nhóm",
      link: "team",
    },

    {
      icon: "bi bi-gear-fill",
      subIcon: "bi bi-caret-down-fill",
      id: "setting",
      title: "Cài đặt",
      hasSubNav: true,
      link: "sei",
      subNav: [
        {
          icon: "bi bi-body-text",
          title: "Chi tiết dự án",
          link: "setting/project-detail",
        },

        {
          icon: "bi bi-tags-fill",
          title: "Thẻ",
          link: "setting/tags",
        },

        {
          icon: "bi bi-key-fill",
          title: "Quyền cấp phép",
          link: "setting/privacy",
        },
      ],
    },
  ];
  let projectId = localStorage.getItem("projectId");
  return (
    <>
      <div id="leftNav">
        <ul className="nav flex-column">
          {nav.map((nav, index) => (
            <Link to={`/project/:${projectId}/${nav.link}`}>
              <li className="nav-item" id={`${nav.id}`}>
                <i className={`${nav.icon}`}></i> {nav.title}
                <i className={`${nav.subIcon}`}></i>
                {nav.hasSubNav && (
                  <ul className="subSetting" key={index}>
                    {nav.subNav.map((subnav) => (
                      <Link to={subnav.link}>
                        <li key={nav.id}>
                          <i className={subnav.icon}></i>
                          {subnav.title}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LeftNav;

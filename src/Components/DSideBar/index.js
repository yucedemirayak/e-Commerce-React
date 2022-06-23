import React from "react";
import Styles from "./DSideBar.module.scss";
import { RiListUnordered } from "react-icons/ri";

const DSideBar = () => {
  return (
    <aside
      className={`${Styles.side_menu} ant-layout-sider ant-layoutsider-dark`}
    >
      <div className="ant-layout-sider-children">
        <ul className="ant-menu menu ant-menu-light ant-menu-root ant-menu-inline">
          <li
            className="ant-menu-submenu ant-menu-submenu-inline parent-menu ant-menu-submenu"
            role="menuitem"
          >
            <div
              class="ant-menu-submenu-title"
              aria-expanded="false"
              aria-haspopup="true"
              aria-owns="sub1$Menu"
            >
              <RiListUnordered className={Styles.li_icon} />
              <span className="li_span">Admins</span>
              <i className="ant-menu-submenu-arrow"></i>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default DSideBar;

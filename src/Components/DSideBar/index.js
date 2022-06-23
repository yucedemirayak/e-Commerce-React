import React from "react";
import Styles from "./DSideBar.module.scss";
import { RiAddCircleLine, RiAdminFill, RiCheckFill, RiListUnordered, RiStore2Line, RiUser3Line } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
import "antd/dist/antd.css";
import { Menu } from "antd";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Admins', 'sub1', <RiAdminFill/>, [
    getItem('Create Admin', 'createAdmin' , <RiAddCircleLine/>),
    getItem('Admin List', 'adminList' , <RiListUnordered/>),
  ]),
  getItem('ShopOwners', 'sub2', <RiStore2Line />, [
    getItem('ShopOwner List', 'shopOwnerList', <RiListUnordered/>),
    getItem('Validate ShopOwner', '51', <RiCheckFill/>),
  ]),
  getItem('Users', 'sub3', <RiUser3Line />, [
    getItem('User List', '9' , <RiListUnordered/>),
  ]),
  getItem('Categories', 'sub4', <BiCategoryAlt />, [
    getItem('Category List', '10' , <RiListUnordered/>),
    getItem('Create Category', '11' , <RiAddCircleLine/>),
    getItem('Add Sub Category', '121' , <RiAddCircleLine/>),
  ]),
];

const DSideBar = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <aside
      className={`${Styles.side_menu} ant-layout-sider ant-layout-sider-dark`}
    >
      <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['']}
      defaultOpenKeys={['']}
      mode="inline"
      items={items}
    />
    </aside>
  );
};

export default DSideBar;
import { HomeOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { FaChartBar, FaUserAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { RiListSettingsFill } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";
const { Sider } = Layout;

function Sidebar() {
  const location = useLocation();

  return (
    <>
      <Sider trigger={null} className="navbar">
        <NavLink exact to="/" className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3627/3627275.png"
            alt="logo-img"
            className="logo-img"
          />
        </NavLink>
        <Menu
          className="navbar-menu"
          mode="inline"
          defaultSelectedKeys={["/"]}
          selectedKeys={[location.pathname]}
          items={[
            {
              className: "sidebar-item",
              key: "/",
              icon: <AiFillHome />,
              label: (
                <NavLink activeClassName="" to="/">
                  Home
                </NavLink>
              ),
            },
            {
              className: "sidebar-item",
              key: "/management",
              icon: <RiListSettingsFill />,
              label: (
                <NavLink activeClassName="" to="/management">
                  Management
                </NavLink>
              ),
            },
            {
              className: "sidebar-item",
              key: "/account",
              icon: <FaUserAlt />,
              label: (
                <NavLink activeClassName="" to="/account">
                  User
                </NavLink>
              ),
            },
          ]}
        />
      </Sider>
    </>
  );
}

export default Sidebar;

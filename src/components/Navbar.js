import { AppstoreOutlined, DownOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import "antd/dist/antd.css";
import React from "react";
import "../assets/navbar.css";
import { logout } from "../helper-methods";
const { SubMenu } = Menu;

class Navbar extends React.Component {
  _extractActiveRoute = () => {
    const {
      location: { pathname },
    } = this.props;
    return pathname;
  };

  _navigateTo = (route) => {
    this.props.history.push(route);
  };

  render() {
    const activeRoute = this._extractActiveRoute();
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={activeRoute}
        mode="horizontal"
      >
        <Menu.Item
          key="/dashboard"
          onClick={(e) => this._navigateTo("/dashboard")}
        >
          <AppstoreOutlined />
          Recipes
        </Menu.Item>
        <Menu.Item
          key="/favorites"
          onClick={(e) => this._navigateTo("/favorites")}
        >
          <AppstoreOutlined />
          Favorites
        </Menu.Item>
        <Menu.Item key="/planner" onClick={(e) => this._navigateTo("/planner")}>
          <AppstoreOutlined />
          Planner
        </Menu.Item>

        <SubMenu
          style={{ float: "right" }}
          className="accountStyle"
          title={
            <>
              Account
              <DownOutlined />
            </>
          }
        >
        
          <Menu.Item
            key="setting:4"
            onClick={(e) => logout(this.props.history)}
          >
            Logout
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
export default Navbar;

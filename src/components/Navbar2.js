
import {Link} from "react-router-dom";
import React, {Component} from "react";
import { AppstoreOutlined, DownOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import "antd/dist/antd.css";
import "../assets/navbar.css";
import { logout } from "../helper-methods";
const { SubMenu } = Menu;


class Navbar2 extends React.Component {
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

		<header id="header">
		<div className="container">
			<div className="three columns">
				<div id="logo">
					<h1>
						<a href="/#"
							onClick={
								e => e.preventDefault()
						}>
							<img src="../assets/images/logo.png" alt="Stove & Oven"/>
						</a>
					</h1>
				</div>
			</div>
			<div className="thirteen columns navigation">
				<nav id="navigation" className="menu nav-collapse" data-component="NavBar">
					<ul>
						<li>
							<Link to="/dashboard">My Recipes</Link>
						</li>
						<li>
							<Link to="/favorites">Favorites</Link>
						</li>
					   
						<li>
							<Link to="/planner">Meal Planner</Link>
						</li>
						<li>
						  <a className="login-btn" onClick={(e) => logout(this.props.history)}>Logout</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
    //   <Menu id="header" onClick={this.handleClick} selectedKeys={activeRoute} mode="horizontal">
    //     <Menu.Item key="/dashboard" onClick={(e) => this._navigateTo("/dashboard")}>
          
	// 	<AppstoreOutlined />
	// 	Recipes
    //     </Menu.Item>

    //     <Menu.Item key="/favorites" onClick={(e) => this._navigateTo("/favorites")} >
    //       <AppstoreOutlined />
    //       Favorites
    //     </Menu.Item>

    //     <Menu.Item key="/planner" onClick={(e) => this._navigateTo("/planner")}>
    //       <AppstoreOutlined />
    //       Planner
    //     </Menu.Item>

    //     <SubMenu
    //       style={{ float: "right" }}
    //       className="accountStyle"
    //       title={
    //         <>
    //           Account
    //           <DownOutlined />
    //         </>
    //       }
    //     >
        
    //       <Menu.Item
    //         key="setting:4"
    //         onClick={(e) => logout(this.props.history)}
    //       >
    //         Logout
    //       </Menu.Item>
    //     </SubMenu>
    //   </Menu>
    );
  }
}
export default Navbar2;

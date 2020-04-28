import {AppstoreOutlined, DownOutlined} from "@ant-design/icons";
import {Menu} from "antd";
import "antd/dist/antd.css";
import React from "react";
import "../assets/navbar.css";
import {logout} from "../helper-methods";
const {SubMenu} = Menu;

class Navbar2 extends React.Component {
    _extractActiveRoute = () => {
        const {location: {
                pathname
            }} = this.props;
        return pathname;
    };

    _navigateTo = (route) => {
        this.props.history.push(route);
    };

    render() {
            const activeRoute = this._extractActiveRoute();
            return (

                <header id="HEADER_26">
	<nav id="NAV_1">
		<div id="DIV_2">
			<div id="DIV_3">

				<ul id="UL_4">
					<li id="LI_5">
						<a href="/menu?nav=healthy-all-day" id="A_6">On the menu</a>
					</li>
					<li id="LI_7">
					</li>
				</ul>
				<div id="DIV_8">
					 
					<button type="button" id="BUTTON_9">
						 <span id="SPAN_10">Toggle navigation</span><span id="SPAN_11"></span><span id="SPAN_12"></span><span id="SPAN_13"></span>
					</button> <a href="#" id="A_14">Sun Basket</a>
				</div>
				<div id="DIV_15">
					<ul id="UL_16">
						<li id="LI_17">
							<a href="/menu?nav=healthy-all-day" id="A_18">On the menu</a>
						</li>
						<li id="LI_19">
						</li>
					</ul>
					<ul id="UL_20">
						<li id="LI_21">
							<a id="A_22" href="/login">Sign In</a>
						</li>
					</ul>
				</div>

				<ul id="UL_23">
					<li id="LI_24">
						<a id="A_25" href="/login">Sign In</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>
        );
    }
}
export default Navbar2;

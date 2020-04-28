import React from "react";
import { Card } from "antd";
import "../assets/imagecard.css";
import { Space } from "antd";

import { MinusCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

class FoodCard extends React.Component {
  render() {
    return (
        <Card
        style={{ margin: 10 }}
        actions={[
          <Space>
            <div onClick={this.props.removePlanner}>
              Remove from Planner &nbsp; &nbsp;
              <MinusCircleOutlined />
            </div>
          </Space>,
        ]}
        hoverable
        cover={<img alt="example" src={this.props.image} />}
      >
        <Link to={this.props.recipeLink} className="rrd-links">
        <div className="card-title">{this.props.title}</div>
        <div className="card-description">{this.props.description}</div>
        </Link>
      </Card>
    );
  }
}
export default FoodCard;

import React from "react";
import { Card } from "antd";
import { Space } from "antd";
import { Rate } from "antd";
import { CalendarFilled, HeartFilled } from "@ant-design/icons";
import "../assets/imagecard.css";
import { Link } from "react-router-dom";

class ImageCard extends React.Component {
  render() {
    return (
      <Card
        actions={[
          <Space>
            <div onClick={this.props.addToPlanner}>
              Add to Planner &nbsp; &nbsp;
              <CalendarFilled key="Planner" />
            </div>
          </Space>,
          <Space>
            {this.props.isFavourite ? (
              <div
                className="remove-favourite-wrappaer"
                onClick={this.props.removeFromFavourites}
              >
                Remove from Favorites &nbsp;
                <HeartFilled key="Favorites" />
              </div>
            ) : (
              <div
                className="add-favourite-wrappaer"
                onClick={this.props.addToFavourites}
              >
                Add to Favorites &nbsp;
                <HeartFilled key="Favorites" />
              </div>
            )}
          </Space>,
        ]}
        hoverable
        cover={<img alt="example" src={this.props.image} />}
      >
        <Link to={this.props.recipeLink} className="rrd-links">
          <div className="card-title">{this.props.title}</div>
          <div className="card-description">{this.props.description}</div>
          <Space size={20}>
            {this.props.time}
            <Rate />
          </Space>
        </Link>
      </Card>
    );
  }
}
export default ImageCard;

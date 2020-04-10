import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";

class FullPageLoader extends Component {
  state = {};
  render() {
    const { loaderData } = this.props;
    if (loaderData && loaderData.isVisible) {
      return (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            zIndex: 9999999,
            opacity: 0.99,
            backgroundColor: "white"
          }}
        >
          <div
            style={{
              width: 200,
              height: 150,
              textAlign: "center"
            }}
          >
            <Loader type="Watch" color="#2F475B" />
            {loaderData && loaderData.loaderText ? (
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 17,
                  marginTop: 10,
                  color: "#2F475B",
                  fontWeight: 600
                }}
              >
                {loaderData.loaderText}
              </p>
            ) : (
              <div />
            )}
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = state => {
  return {
    loaderData: state.loaderData
  };
};

export default connect(
  mapStateToProps,
  null
)(FullPageLoader);

import React from "react";

export default class Post extends React.Component {
  render() {
    return (
      <div className="card card-body">
        <h3 className="card-title">{this.props.title}</h3>
        <div className="card-text">Home content</div>
      </div>
    );
  }
}

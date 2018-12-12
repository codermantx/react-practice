import React from "react";

export default class Post extends React.Component {
  componentDidMount() {
    console.log("Post component mounted");
  }

  componentWillMount() {
    console.log("Post component unmounted");
  }

  render() {
    return (
      <>
        <h3>{this.props.title}</h3>
        <div>Home content</div>
      </>
    );
  }
}

import React from "react";

class HeaderLabel extends React.Component {
  render() {
    return (
      <h1 className="header-label">{this.props.title}</h1>
    )
  }
}

export default HeaderLabel
import React from "react";

class NextButton extends React.Component {
  render() {
    return (
      <button className="next-button">{this.props.title}</button>
    )
  }
}

export default NextButton
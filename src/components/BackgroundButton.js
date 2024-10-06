import React from "react";

class BackgroundButton extends React.Component {
  render() {
    const buttonClassName = this.props.shouldBeOutlined ? "background-button--outlined" : "background-button--filled"
    const rotationAngle = this.props.rotationAngle
    const horizontalPadding = this.props.horizontalPadding
    const verticalPadding = this.props.verticalPadding

    const style = {
      transform: `rotate(${rotationAngle}deg)`,
      padding: `${horizontalPadding}vw ${verticalPadding}vh`

    }

    return (
      <button className={buttonClassName} style={style}>
        {this.props.title}
      </button>
    )
  }
}

export default BackgroundButton
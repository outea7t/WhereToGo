import React from "react";

class OptionButton extends React.Component {
  constructor(props, id) {
    super(props)
    this.id = id
    this.state = {
      isChoosed: false
    }
  }
  
  toggleButton = () => {
    this.setState((prevState) => {
      const newIsChoosed = !prevState.isChoosed
      
      console.log("fuck option button")
      if (this.props.onStateChange) {
        this.props.onStateChange(this.props.id, newIsChoosed)
      }
      this.props.onStateChange(this.props.id, newIsChoosed)

      return {isChoosed: newIsChoosed}
    })
  }

  render() {
    const buttonClass = this.state.isChoosed ? "option-button choosed" : "option-button"
    return (
      <button className={buttonClass} onClick={this.toggleButton}>{this.props.title}</button>
    )
  }
}

export default OptionButton
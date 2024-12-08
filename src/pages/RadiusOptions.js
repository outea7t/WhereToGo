import React from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

import RoutePagePaths from "../model/RoutePagePaths";

import HeaderLabel from "../components/HeaderLabel";
import OptionButton from "../components/OptionButton";
import Background from "../components/Background";
import NextButton from "../components/NextButton";
import FadeInSection from "../components/FadeInSection";

class RadiusOptions extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      buttons: {
        [3]: false,
        [5]: false,
        [10]: false,
        [20]: false,
        [25]: false,
        [30]: false,
        [40]: false,
        [70]: false,
        [140]: false
      },
      isAnyButtonSelected: 0
    }
  }

  optionButtonStateChanged = (id, isChoosed) => {
    const constant = isChoosed ? 1 : -1
    const selectedButtonsCount = this.state.isAnyButtonSelected + constant
    console.log(selectedButtonsCount)
    this.setState(prevState => ({
      buttons: {
        ...prevState.buttons,
        [id]: isChoosed
      },
      isAnyButtonSelected: selectedButtonsCount
    }))
  }

  handleClick = () => {
    let selectedOptions = []
    const buttons = this.state.buttons

    Object.keys(buttons).forEach(key => {
      if (buttons[key]) {
        selectedOptions.push(key)
      }
    })

    selectedOptions.sort()
    localStorage.setItem('radiusOptions', JSON.stringify(selectedOptions))
  }

  render() {
    return (
      <div>
        <FadeInSection delay={"0s"}>
          <HeaderLabel title="Радиус" />
        </FadeInSection>
        <div className="option-buttons-container">
          <div>
            <FadeInSection delay={"0.1s"}>
              <OptionButton title="3км" id={3} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
            <FadeInSection delay={"0.17s"}>
              <OptionButton title="5км" id={5} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
            <FadeInSection delay={"0.24s"}>
              <OptionButton title="10км" id={10} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
          </div>
          <div>
            <FadeInSection delay={"0.31s"}>
              <OptionButton title="20км" id={20} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
            <FadeInSection delay={"0.38s"}>
              <OptionButton title="25км" id={25} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
            <FadeInSection delay={"0.45s"}>
              <OptionButton title="30км" id={30} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
          </div>
          <div>
            <FadeInSection delay={"0.52s"}>
              <OptionButton title="40км" id={40} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
            <FadeInSection delay={"0.59s"}>
              <OptionButton title="70км" id={70} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
          </div>
          <div>
            <FadeInSection delay={"0.66s"}>
              <OptionButton title="70км+" id={140} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
          </div>

          <CSSTransition 
          in={this.state.isAnyButtonSelected} 
          timeout={250} 
          classNames="next-button" 
          unmountOnExit>
            <Link to={RoutePagePaths.SUGGESTS}>
              <NextButton title="Следующий шаг" handleClick={this.handleClick}/>
            </Link>
          </CSSTransition>
        </div>
        <FadeInSection delay={"0.73s"}>
          <Background />
        </FadeInSection>
      </div>
    )
  }
}

export default RadiusOptions
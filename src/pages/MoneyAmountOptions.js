import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import RoutePagePaths from "../model/RoutePagePaths";
import FadeInSection from "../components/FadeInSection";

import HeaderLabel from "../components/HeaderLabel";
import OptionButton from "../components/OptionButton";
import Background from "../components/Background";
import NextButton from "../components/NextButton";


class MoneyAmountOptions extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      buttons: {
        [100]: false,
        [300]: false,
        [500]: false,
        [700]: false,
        [1000]: false,
        [1500]: false,
        [2000]: false,
        [3000]: false,
        [5000]: false,
        [20000]: false
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
    localStorage.setItem('moneyOptions', JSON.stringify(selectedOptions))
    console.log(`Picked options: ${selectedOptions}`)
  }

  render() {
    return (
      <div>
        <FadeInSection delay={"0s"}>
          <HeaderLabel title="Бюджет на одного человека" />
        </FadeInSection> 
        <div className="option-buttons-container">
          <div>
            <FadeInSection delay={"0.1s"}>
              <OptionButton title="100р" id={100} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection> 
            <FadeInSection delay={"0.17s"}>
              <OptionButton title="500р" id={500} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection> 
            <FadeInSection delay={"0.24s"}>
              <OptionButton title="300р" id={300} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection> 
          </div>
          <div>
            <FadeInSection delay={"0.31s"}>
              <OptionButton title="700р" id={700} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection> 
            <FadeInSection delay={"0.38s"}>
              <OptionButton title="1000р" id={1000} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection> 
            <FadeInSection delay={"0.45s"}>
              <OptionButton title="1500р" id={1500} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection> 
          </div>
          <div>
            <FadeInSection delay={"0.52s"}>
              <OptionButton title="2000р" id={2000} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection> 
            <FadeInSection delay={"0.59s"}>
              <OptionButton title="3000р" id={3000} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection> 
          </div>
          <div>
            <FadeInSection delay={"0.66s"}>
              <OptionButton title="5000р" id={5000} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection> 
            <FadeInSection delay={"0.73s"}>
              <OptionButton title="5000р+" id={20000} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection> 
          </div>

          <CSSTransition 
          in={this.state.isAnyButtonSelected} 
          timeout={250} 
          classNames="next-button" 
          unmountOnExit>
            <Link to={RoutePagePaths.RADIUS_OPTIONS}>
              <NextButton title="Следующий шаг" handleClick={this.handleClick}/>
            </Link>
          </CSSTransition>
        </div>
        <Background />
      </div>
    )
  }
}

export default MoneyAmountOptions
import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import HeaderLabel from "../components/HeaderLabel";
import OptionButton from "../components/OptionButton";
import Background from "../components/Background";
import NextButton from "../components/NextButton";

import EventType from "../model/EventData"
import RoutePagePaths from "../model/RoutePagePaths";
import FadeInSection from "../components/FadeInSection";

class EventTypeOptions extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      buttons: {
        [EventType.show]: false,
        [EventType.dancing]: false,
        [EventType.extreme]: false,
        [EventType.fun]: false,
        [EventType.concert]: false,
        [EventType.excursion]: false,
        [EventType.spectacle]: false
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
    localStorage.setItem('eventOptions', JSON.stringify(selectedOptions))
  }

  render() {
    return(
      <div>
        <FadeInSection delay={"0s"}>
          <HeaderLabel title="Хочу" />
        </FadeInSection>
        <div className="option-buttons-container">
          <div> 
            <FadeInSection delay={"0.1s"}> 
              <OptionButton title="Поесть" id={EventType.eat} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
            <FadeInSection delay={"0.17s"}>
              <OptionButton title="Зрелищ" id={EventType.show} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
          </div>
          <div>
            <FadeInSection delay={"0.24s"}>
              <OptionButton title="Танцев" id={EventType.dancing} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
            <FadeInSection delay={"0.31s"}>
              <OptionButton title="Экстрима" id={EventType.extreme} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
          </div>
          <div>
            <FadeInSection delay={"0.38s"}>
              <OptionButton title="Смеяться" id={EventType.fun} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
            <FadeInSection delay={"0.45s"}>
              <OptionButton title="Концерта" id={EventType.concert} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
          </div>
          <div>
            <FadeInSection delay={"0.52s"}>
              <OptionButton title="Экскурсию" id={EventType.excursion} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
          </div>
          <div>
            <FadeInSection delay={"0.59s"}>
              <OptionButton title="Спектакля" id={EventType.spectacle} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
          </div>
          
          <CSSTransition 
          in={this.state.isAnyButtonSelected} 
          timeout={250} 
          classNames="next-button" 
          unmountOnExit>
            <Link to={RoutePagePaths.MONEY_AMOUNT_OPTIONS}>
              <NextButton title="Следующий шаг" handleClick={this.handleClick}/>        
            </Link>
          </CSSTransition>
        </div>
        <FadeInSection delay={"0s"}>
          <Background />
        </FadeInSection>
    </div>
    )
  }
}

export default EventTypeOptions
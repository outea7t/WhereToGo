import React from "react";
import { CSSTransition } from "react-transition-group";

import RoutePagePaths from "../model/RoutePagePaths";

import HeaderLabel from "../components/HeaderLabel";
import OptionButton from "../components/OptionButton";
import Background from "../components/Background";
import NextButton from "../components/NextButton";

import Partner from "../model/EventData"
import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";

class PartnerOptions extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      buttons: {
        [Partner.single]: false,
        [Partner.date]: false,
        [Partner.friends]: false,
        [Partner.childrens]: false,
        [Partner.colleagues]: false,
        [Partner.parents]: false,
        [Partner.bigCompany]: false,
        [Partner.singleOutOfTown]: false
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

  render() {
    return (
      <div>
        <FadeInSection delay={"0s"}>
          <HeaderLabel title="C кем" />
        </FadeInSection>
        <div className="option-buttons-container">
          <div> 
            <FadeInSection delay={"0.1s"}>
              <OptionButton title="Иду один" id={Partner.single} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
            <FadeInSection delay={"0.17s"}>
              <OptionButton title="Свидание" id={Partner.date} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
          </div>
          <div>
            <FadeInSection delay={"0.24s"}>
              <OptionButton title="С друзьями" id={Partner.friends} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
            <FadeInSection delay={"0.31s"}>
              <OptionButton title="С детьми" id={Partner.childrens} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
          </div>
          <div>
            <FadeInSection delay={"0.38s"}>
              <OptionButton title="С коллегами" id={Partner.colleagues} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
            <FadeInSection delay={"0.45s"}>
              <OptionButton title="С родителями" id={Partner.parents} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
          </div>
          <div>
            <FadeInSection delay={"0.52s"}>
              <OptionButton title="С большой компанией" id={Partner.bigCompany} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
          </div>
          <div>
            <FadeInSection delay={"0.59s"}>
              <OptionButton title="Досуг в дали от города" id={Partner.singleOutOfTown} onStateChange={this.optionButtonStateChanged}/>
            </FadeInSection>
          </div>
          
          <CSSTransition 
          in={this.state.isAnyButtonSelected} 
          timeout={250} 
          classNames="next-button" 
          unmountOnExit>
            <Link to={RoutePagePaths.EVENT_TYPE_OPTIONS}>
              <NextButton title="Следующий шаг" />
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

export default PartnerOptions

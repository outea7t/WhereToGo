import React from "react";
import { CSSTransition } from "react-transition-group";

import HeaderLabel from "../components/HeaderLabel";
import OptionButton from "../components/OptionButton";
import Background from "../components/Background";
import NextButton from "../components/NextButton";

import Partner from "../model/EventData"

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
        <HeaderLabel title="C кем" />
        <div className="option-buttons-container">
          <div> 
            <OptionButton title="Иду один" id={Partner.single} onStateChange={this.optionButtonStateChanged}/>
            <OptionButton title="Свидание" id={Partner.date} onStateChange={this.optionButtonStateChanged}/>
          </div>
          <div>
            <OptionButton title="С друзьями" id={Partner.friends} onStateChange={this.optionButtonStateChanged}/>
            <OptionButton title="С детьми" id={Partner.childrens} onStateChange={this.optionButtonStateChanged}/>
          </div>
          <div>
            <OptionButton title="С коллегами" id={Partner.colleagues} onStateChange={this.optionButtonStateChanged}/>
            <OptionButton title="С родителями" id={Partner.parents} onStateChange={this.optionButtonStateChanged}/>
          </div>
          <div>
            <OptionButton title="С большой компанией" id={Partner.bigCompany} onStateChange={this.optionButtonStateChanged}/>
          </div>
          <div>
            <OptionButton title="Досуг в дали от города" id={Partner.singleOutOfTown} onStateChange={this.optionButtonStateChanged}/>
          </div>
          
          <CSSTransition 
          in={this.state.isAnyButtonSelected} 
          timeout={250} 
          classNames="next-button" 
          unmountOnExit>
              <NextButton title="Следующий шаг" />
          </CSSTransition>
        </div>
        <Background />
      </div>
    )
  }
}

export default PartnerOptions

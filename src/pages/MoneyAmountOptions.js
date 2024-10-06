import React from "react";
import HeaderLabel from "../components/HeaderLabel";
import OptionButton from "../components/OptionButton";
import Background from "../components/Background";
import NextButton from "../components/NextButton";


class MoneyAmountOptions extends React.Component {
  render() {
    return (
      <div>
        <HeaderLabel title="Бюджет на одного человека" />
        <div className="option-buttons-container">
          <div> 
            <OptionButton title="100р" id={100}/>
            <OptionButton title="500р" id={500}/>
            <OptionButton title="300р" id={300}/>
          </div>
          <div>
            <OptionButton title="700р" id={700}/>
            <OptionButton title="1000р" id={1000}/>
            <OptionButton title="1500р" id={1500}/>
          </div>
          <div>
            <OptionButton title="2000р" id={2000} />
            <OptionButton title="3000р" id={3000} />
          </div>
          <div>
            <OptionButton title="5000р" id={5000}/>
            <OptionButton title="5000р+" id={20000}/>
          </div>
          <NextButton title="Следующий шаг"/>
        </div>
        <Background />
      </div>
    )
  }
}

export default MoneyAmountOptions
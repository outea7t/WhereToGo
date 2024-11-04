import React from "react";
import { Link } from "react-router-dom";

import HeaderLabel from "../components/HeaderLabel";
import OptionButton from "../components/OptionButton";
import Background from "../components/Background";
import NextButton from "../components/NextButton";

import EventType from "../model/EventData"
import RoutePagePaths from "../model/RoutePagePaths";
import FadeInSection from "../components/FadeInSection";

class EventTypeOptions extends React.Component {
  render() {
    return(
      <div>
        <FadeInSection delay={"0s"}>
          <HeaderLabel title="Хочу" />
        </FadeInSection>
        <div className="option-buttons-container">
          <div> 
            <FadeInSection delay={"0.1s"}> 
              <OptionButton title="Поесть" id={EventType.eat}/>
            </FadeInSection>
            <FadeInSection delay={"0.17s"}>
              <OptionButton title="Зрелищ" id={EventType.show}/>
            </FadeInSection>
          </div>
          <div>
            <FadeInSection delay={"0.24s"}>
              <OptionButton title="Танцев" id={EventType.dancing}/>
            </FadeInSection>
            <FadeInSection delay={"0.31s"}>
              <OptionButton title="Экстрима" id={EventType.extreme}/>
            </FadeInSection>
          </div>
          <div>
            <FadeInSection delay={"0.38s"}>
              <OptionButton title="Смеяться" id={EventType.fun}/>
            </FadeInSection>
            <FadeInSection delay={"0.45s"}>
              <OptionButton title="Концерта" id={EventType.concert}/>
            </FadeInSection>
          </div>
          <div>
            <FadeInSection delay={"0.52s"}>
              <OptionButton title="Экскурсию" id={EventType.excursion} />
            </FadeInSection>
          </div>
          <div>
            <FadeInSection delay={"0.59s"}>
              <OptionButton title="Спектакля" id={EventType.spectacle}/>
            </FadeInSection>
          </div>
          
          <Link to={RoutePagePaths.MONEY_AMOUNT_OPTIONS}>
            <NextButton title="Следующий шаг"/>        
          </Link>
        </div>
        <FadeInSection delay={"0s"}>
          <Background />
        </FadeInSection>
    </div>
    )
  }
}

export default EventTypeOptions
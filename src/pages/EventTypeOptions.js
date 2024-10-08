import React from "react";
import { Link } from "react-router-dom";

import HeaderLabel from "../components/HeaderLabel";
import OptionButton from "../components/OptionButton";
import Background from "../components/Background";
import NextButton from "../components/NextButton";

import EventType from "../model/EventData"
import RoutePagePaths from "../model/RoutePagePaths";

class EventTypeOptions extends React.Component {
  render() {
    return(
      <div>
        <HeaderLabel title="Хочу" />
        <div className="option-buttons-container">
          <div> 
            <OptionButton title="Поесть" id={EventType.eat}/>
            <OptionButton title="Зрелищ" id={EventType.show}/>
          </div>
          <div>
            <OptionButton title="Танцев" id={EventType.dancing}/>
            <OptionButton title="Экстрима" id={EventType.extreme}/>
          </div>
          <div>
            <OptionButton title="Смеяться" id={EventType.fun}/>
            <OptionButton title="Концерта" id={EventType.concert}/>
          </div>
          <div>
            <OptionButton title="Экскурсию" id={EventType.excursion} />
          </div>
          <div>
            <OptionButton title="Спектакля" id={EventType.spectacle}/>
          </div>
          
          <Link to={RoutePagePaths.MONEY_AMOUNT_OPTIONS}>
            <NextButton title="Следующий шаг"/>        
          </Link>
        </div>
        <Background />
    </div>
    )
  }
}

export default EventTypeOptions
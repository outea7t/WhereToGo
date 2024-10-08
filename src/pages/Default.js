import React from "react";
import { Link } from "react-router-dom";

import RoutePagePaths from "../model/RoutePagePaths";

import NextButton from "../components/NextButton";
import BackgroundButton from "../components/BackgroundButton";

import backgroundLines_1 from "../img/default-page-lines-1.svg"
import backgroundLines_2 from "../img/default-page-lines-2.svg"
import note from "../img/note.svg"
import map from "../img/map.svg"

class DefaultPage extends React.Component {
  render() {
    return (
      <div>
        <img src={backgroundLines_1} className="default-page-lines-1" alt="default page lines 1"/>
        <h1 className="header-text">
          Тут ничего нет...
        </h1>

        <div className="text-block-container">
          <p className="description-text">
            Но отсюда вы можете перейти на начальную страницу и насладится всеми функциями приложения
          </p>
          <div className="text-block-icons-container">
            <img src={note} className="default-page-note" alt="note"/>
            <img src={map} className="default-page-map" alt="map"/>
            <div className="default-page-eat-button">
              <BackgroundButton title="Поесть" shouldBeOutlined={true} rotationAngle={-9}/>
            </div>
          </div>
        </div>
        <div className="default-page-next-button">
          <Link to={RoutePagePaths.START}>
            <NextButton title="Перейти" />
          </Link>
        </div>
        <img src={backgroundLines_2} className="default-page-lines-2" alt="default page lines 2"/>
      </div>
    )
  }
}

export default DefaultPage
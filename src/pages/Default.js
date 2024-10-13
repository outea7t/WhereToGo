import React from "react";
import { Link } from "react-router-dom";

import RoutePagePaths from "../model/RoutePagePaths";

import NextButton from "../components/NextButton";
import BackgroundButton from "../components/BackgroundButton";
import FadeInSection from "../components/FadeInSection";

import backgroundLines_1 from "../img/default-page-lines-1.svg"
import backgroundLines_2 from "../img/default-page-lines-2.svg"
import note from "../img/note.svg"
import map from "../img/map.svg"

class DefaultPage extends React.Component {
  render() {
    return (
      <div>
        <FadeInSection delay={"0s"}>
          <img src={backgroundLines_1} className="default-page-lines-1" alt="default page lines 1"/>
        </FadeInSection>
        <FadeInSection delay={"0.2s"}>
          <h1 className="header-text">
            Тут ничего нет...
          </h1>
        </FadeInSection>

        <div className="text-block-container">
          <FadeInSection delay={"0.3s"}>
            <p className="description-text">
              Но отсюда вы можете перейти на начальную страницу и насладится всеми функциями приложения
            </p>
          </FadeInSection>
          <div className="text-block-icons-container">
            <FadeInSection delay={"0.3s"}>
              <img src={note} className="default-page-note" alt="note"/>
            </FadeInSection>
            <FadeInSection delay={"0.45s"}>
              <img src={map} className="default-page-map" alt="map"/>
            </FadeInSection>
            <div className="default-page-eat-button">
              <FadeInSection delay={"0.6s"}>
                <BackgroundButton title="Поесть" shouldBeOutlined={true} rotationAngle={-9}/>
              </FadeInSection>
            </div>
          </div>
        </div>
        <div className="default-page-next-button">
          <Link to={RoutePagePaths.START}>
            <FadeInSection delay={"0.6s"}>
              <NextButton title="Перейти" />
            </FadeInSection>
          </Link>
        </div>
        <FadeInSection delay={"0.75s"}>
          <img src={backgroundLines_2} className="default-page-lines-2" alt="default page lines 2"/>
        </FadeInSection>
      </div>
    )
  }
}

export default DefaultPage
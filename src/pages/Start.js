import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";

import RoutePagePaths from "../model/RoutePagePaths.js";

import StartPageBackground from "../components/StartPageBackground"
import BackgroundButton from "../components/BackgroundButton.js";
import FadeInSection from "../components/FadeInSection.js";

import backgroundLines_1 from "../img/background-lines-1.svg"
import backgroundLines_2 from "../img/background-lines-2.svg"
import backgroundLines_3 from "../img/background-lines-3.svg"
import backgroundLines_4 from "../img/background-lines-4.svg"
import backgroundLines_5 from "../img/background-lines-5.svg"

import star from "../img/star.svg"
import cloud from "../img/cloud.svg"
import lightning from "../img/lightning.svg"
import kiss from "../img/kiss.svg"
import map from "../img/map.svg"
import mapPin from "../img/map-pin.svg"
import ruble from "../img/ruble.svg"
import { Link } from "react-router-dom";

class Start extends React.Component {
  render() {
    return (
      <div>
        <FadeInSection delay={"0s"}>
          <div className="top-background-lines-container">
            <img src={backgroundLines_1} className="background-lines-1" alt="background lines 1"/>
            <img src={backgroundLines_2} className="background-lines-2" alt="background lines 2"/>
          </div>
        </FadeInSection>
        <FadeInSection delay={"0.2s"}>
          <h1 className="first-header-text">WhereToGo<br />App</h1>
        </FadeInSection>
        <div className="first-text-block-container">
          <FadeInSection delay={"0.35s"}>
          <p className="description-text">
            Не знаешь, куда отправиться сегодня? Where To Go App — это твой персональный помощник в выборе идеального места для отдыха и развлечений.
          </p>
          </FadeInSection>
          <div className="first-text-block-icons-container">
            <FadeInSection delay={"0.35s"}>
              <img src={star} className="star-icon" alt="star icon"/>
            </FadeInSection>
            <FadeInSection delay={"0.45s"}>
              <img src={cloud} className="cloud-icon" alt="cloud icon"/>
            </FadeInSection>
            <FadeInSection delay={"0.55s"}>
              <img src={lightning} className="lightning-icon" alt="lightning icon"/>
            </FadeInSection>
          </div>
        </div>
        <FadeInSection delay={"0s"}>
          <img src={backgroundLines_3} className="background-lines-3" alt="background lines 3"/>
        </FadeInSection>
        <FadeInSection delay={"0s"}>
          <img src={kiss} className="kiss-icon" alt="kiss icon"/>
        </FadeInSection>
        <FadeInSection delay={"0.2s"}>
          <h1 className="second-header-text">
          Идеи на любой вкус и кошелек — всего в нескольких кликах!
          </h1>
        </FadeInSection>
        <div className="second-text-block-container">
          <FadeInSection delay={"0.35s"}>
            <p className="description-text">
            Выбери, что хочешь делать: от романтического ужина до экстремальных приключений.
            </p>
          </FadeInSection>  
          <div className="second-text-block-icons-container">
            <FadeInSection delay={"0.35s"}>
              <div className="eat-button">
                <BackgroundButton title="Поесть"
                shouldBeOutlined={true}
                rotationAngle={9}
                />
              </div>
            </FadeInSection>
            <FadeInSection delay={"0.45s"}>
              <div className="date-button">
                <BackgroundButton title="Свидание"
                shouldBeOutlined={true}
                rotationAngle={-19}
                />
              </div>
            </FadeInSection>
            <FadeInSection delay={"0.45"}>
              <div className="extreme-button">
              <BackgroundButton title="Экстрима"
              shouldBeOutlined={false}
              rotationAngle={15}
              />
              </div>
            </FadeInSection>
          </div>
        </div>
        <FadeInSection delay={"0s"}>
          <img src={backgroundLines_4} className="background-lines-4" alt="background lines 4"/>
        </FadeInSection>
        <FadeInSection delay={"0.2s"}>
          <h1 className="third-header-text">
            Это просто!
          </h1>
        </FadeInSection>
        <div className="third-text-block-container">
          <FadeInSection delay={"0.35s"}>
            <div className="third-text-list-container">
              <p className="description-text">
                Определи локацию: рядом с домом или в новом, неизведанном месте.
              </p>
              <p className="description-text">
                Укажи свой бюджет: мы подберем варианты, подходящие именно тебе.
              </p>
              <p className="description-text">
                Задай расстояние: готов к дальним поездкам или предпочитаешь что-то поблизости?
              </p>
            </div>
          </FadeInSection>
          <div className="third-text-block-icons-container-vertical">
            <FadeInSection delay={"0.45s"}>
              <img src={map} className="map-icon" alt="map icon" />
              <img src={mapPin} className="map-pin-icon" alt="map pin icon"/>
            </FadeInSection>
          </div>
        </div>
        <div className="third-text-block-icons-container-horizontal">
          <FadeInSection delay={"0s"}>
            <Link to={RoutePagePaths.PARTNER_OPTIONS}>
              <button className="next-button">
                Перейти к выбору мест
              </button>
            </Link>
          </FadeInSection>
          <div className="two-thousand-ruble-button">
            <FadeInSection delay={"0.2s"}>
              <BackgroundButton title="2000р" shouldBeOutlined={true} rotationAngle={-9}/>
            </FadeInSection>
          </div>
        </div>
        <FadeInSection delay={"0s"}>
          <img src={backgroundLines_5} className="background-lines-5" alt="background lines 5"/>
        </FadeInSection>
      </div>
    )
  }
}

export default Start
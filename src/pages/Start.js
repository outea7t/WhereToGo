import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";

import StartPageBackground from "../components/StartPageBackground"

import BackgroundButton from "../components/BackgroundButton.js";

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

class Start extends React.Component {
  render() {
    return (
      <div>
        <div className="top-background-lines-container">
          <img src={backgroundLines_1} className="background-lines-1" alt="background lines 1"/>
          <img src={backgroundLines_2} className="background-lines-2" alt="background lines 2"/>
        </div>
        <h1 className="first-header-text">WhereToGo<br />App</h1>
        <div className="first-text-block-container">
          <p className="description-text">
            Не знаешь, куда отправиться сегодня? Where To Go App — это твой персональный помощник в выборе идеального места для отдыха и развлечений.
          </p>
          <div className="first-text-block-icons-container">
            <img src={star} className="star-icon" alt="star icon"/>
            <img src={cloud} className="cloud-icon" alt="cloud icon"/>
            <img src={lightning} className="lightning-icon" alt="lightning icon"/>
          </div>
        </div>
        <img src={backgroundLines_3} className="background-lines-3" alt="background lines 3"/>
        <img src={kiss} className="kiss-icon" alt="kiss icon"/>
        <h1 className="second-header-text">
        Идеи на любой вкус и кошелек — всего в нескольких кликах!
        </h1>
        <div className="second-text-block-container">
          <p className="description-text">
          Выбери, что хочешь делать: от романтического ужина до экстремальных приключений.
          </p>
          <div className="second-text-block-icons-container">
            <div className="eat-button">
              <BackgroundButton title="Поесть"
               shouldBeOutlined={true}
               rotationAngle={9}
               />
            </div>
            <div className="date-button">
              <BackgroundButton title="Свидание"
              shouldBeOutlined={true}
              rotationAngle={-19}
              />
            </div>
            <div className="extreme-button">
            <BackgroundButton title="Экстрима"
            shouldBeOutlined={false}
            rotationAngle={15}
            />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Start
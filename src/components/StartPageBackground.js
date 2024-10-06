import React from "react";

import BackgroundButton from "./BackgroundButton.js";

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

class StartPageBackground extends React.Component {
  render() {
    return (
      <div className="start-page-background-container">
        
        

        <BackgroundButton title="Поесть" shouldBeOutlined={true} rotationAngle={-9}/>
        <BackgroundButton title="Свидание" shouldBeOutlined={true} rotationAngle={19}/>
        <BackgroundButton title="Экстрима" shouldBeOutlined={false} rotationAngle={-15}/>

        <img src={backgroundLines_4} className="background-lines-4" alt="background lines 4"/>

        <div className="">
          <img src={map} className="map-icon" alt="map icon" />
          <img src={mapPin} className="map-pin-icon" alt="map pin icon"/>
        </div>

        <div className="bottom-icons-container">
          <BackgroundButton title="2000р" shouldBeOutlined={true} rotationAngle={9}/>
          <BackgroundButton title="Досуг в дали от города" shouldBeOutlined={false} rotationAngle={21} />
          <img src={ruble} className="ruble-icon" alt="ruble-icon"/>
        </div>
      </div>
    )
  }
}

export default StartPageBackground
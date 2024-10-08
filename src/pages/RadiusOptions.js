import React from "react";
import { Link } from "react-router-dom";

import RoutePagePaths from "../model/RoutePagePaths";

import HeaderLabel from "../components/HeaderLabel";
import OptionButton from "../components/OptionButton";
import Background from "../components/Background";
import NextButton from "../components/NextButton";

class RadiusOptions extends React.Component {
  render() {
    return (
      <div>
        <HeaderLabel title="Радиус" />
        <div className="option-buttons-container">
          <div>
            <OptionButton title="3км" id={3} />
            <OptionButton title="5км" id={5} />
            <OptionButton title="10км" id={10} />
          </div>
          <div>
            <OptionButton title="20км" id={20} />
            <OptionButton title="30км" id={30} />
            <OptionButton title="25км" id={25} />
          </div>
          <div>
            <OptionButton title="40км" id={40} />
            <OptionButton title="70км" id={70} />
          </div>
          <div>
            <OptionButton title="70км+" id={140} />
          </div>
          <Link to={RoutePagePaths.SUGGESTS}>
            <NextButton title="Следующий шаг" />
          </Link>
        </div>
        <Background />
      </div>
    )
  }
}

export default RadiusOptions
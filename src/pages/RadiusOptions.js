import React from "react";
import { Link } from "react-router-dom";

import RoutePagePaths from "../model/RoutePagePaths";

import HeaderLabel from "../components/HeaderLabel";
import OptionButton from "../components/OptionButton";
import Background from "../components/Background";
import NextButton from "../components/NextButton";
import FadeInSection from "../components/FadeInSection";

class RadiusOptions extends React.Component {
  render() {
    return (
      <div>
        <FadeInSection delay={"0s"}>
          <HeaderLabel title="Радиус" />
        </FadeInSection>
        <div className="option-buttons-container">
          <div>
            <FadeInSection delay={"0.1s"}>
              <OptionButton title="3км" id={3} />
            </FadeInSection>
            <FadeInSection delay={"0.17s"}>
              <OptionButton title="5км" id={5} />
            </FadeInSection>
            <FadeInSection delay={"0.24s"}>
              <OptionButton title="10км" id={10} />
            </FadeInSection>
          </div>
          <div>
            <FadeInSection delay={"0.31s"}>
              <OptionButton title="20км" id={20} />
            </FadeInSection>
            <FadeInSection delay={"0.38s"}>
              <OptionButton title="30км" id={30} />
            </FadeInSection>
            <FadeInSection delay={"0.45s"}>
              <OptionButton title="25км" id={25} />
            </FadeInSection>
          </div>
          <div>
            <FadeInSection delay={"0.52s"}>
              <OptionButton title="40км" id={40} />
            </FadeInSection>
            <FadeInSection delay={"0.59s"}>
              <OptionButton title="70км" id={70} />
            </FadeInSection>
          </div>
          <div>
            <FadeInSection delay={"0.66s"}>
              <OptionButton title="70км+" id={140} />
            </FadeInSection>
          </div>
          <Link to={RoutePagePaths.SUGGESTS}>
            <NextButton title="Следующий шаг" />
          </Link>
        </div>
        <FadeInSection delay={"0.73s"}>
          <Background />
        </FadeInSection>
      </div>
    )
  }
}

export default RadiusOptions
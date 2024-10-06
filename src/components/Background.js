import React from "react";

import backgroundLines from "../img/background-lines.svg"
import baloon from "../img/baloon.svg"
import confetti from "../img/confetti.svg"
import note from "../img/note.svg"

class Background extends React.Component {
    render() {
        return (
            <div className="background-container">
                <img src={backgroundLines} className="background-lines-image" alt="backgroundLinesImage"/>
                <img src={confetti} className="confetti-image" alt="confetti"/>
                <img src={baloon} className="baloon-image" alt="baloonImage"/>
                <img src={note} className="note-image" alt="noteImage"/>
            </div>
        )
    }
}

export default Background
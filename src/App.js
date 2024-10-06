import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Start from "./pages/Start";
import PartnerOptions from "./pages/PartnerOptions";
import EventTypeOptions from "./pages/EventTypeOptions";
import MoneyAmountOptions from "./pages/MoneyAmountOptions";
import RadiusOptions from "./pages/RadiusOptions";
import Suggests from "./pages/Suggests";

class App extends React.Component {
  render() {
    const StartPage = <Route path="/" element={<Start />} />;
    const PartnerOptionPage = <Route path="/" element={<PartnerOptions />} />;
    const EventTypeOptionPage = <Route path="/" element={<EventTypeOptions />} />;
    const MoneyAmountOptionsPage = <Route path="/" element={<MoneyAmountOptions />} />;
    const RadiusOptionsPage = <Route path="/" element={<RadiusOptions />} />;

    return (
      <Router>
        <Routes>
          {StartPage}
        </Routes>
      </Router>
    )
  }
}

export default App
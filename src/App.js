import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import RoutePagePaths from "./model/RoutePagePaths";

import DefaultPage from "./pages/Default";
import Start from "./pages/Start";
import PartnerOptions from "./pages/PartnerOptions";
import EventTypeOptions from "./pages/EventTypeOptions";
import MoneyAmountOptions from "./pages/MoneyAmountOptions";
import RadiusOptions from "./pages/RadiusOptions";
import Suggests from "./pages/Suggests";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path={RoutePagePaths.DEFAULT} element={<DefaultPage />} />
        <Route path={RoutePagePaths.START} element={<Start />} />
        <Route path={RoutePagePaths.PARTNER_OPTIONS} element={<PartnerOptions />} />
        <Route path={RoutePagePaths.EVENT_TYPE_OPTIONS} element={<EventTypeOptions />} />
        <Route path={RoutePagePaths.MONEY_AMOUNT_OPTIONS} element={<MoneyAmountOptions />} />
        <Route path={RoutePagePaths.RADIUS_OPTIONS} element={<RadiusOptions />} />
        <Route path={RoutePagePaths.SUGGESTS} element={<Suggests />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
import React from "react"
import * as ReactDOMClient from "react-dom/client"
import App from "./App"
import "./css/main.css"
import "./css/index.css"
import "./css/background.css"
import "./css/start-page.css"
import "./css/animation.css"
import "./css/default-page.css"

const app = ReactDOMClient.createRoot(document.getElementById("root"))

app.render(<App />)
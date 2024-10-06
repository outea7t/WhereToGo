import React from "react"
import * as ReactDOMClient from "react-dom/client"
import App from './App'
import './css/main.css'
import './css/index.css'
import './css/background.css'
import './css/startPage.css'

const app = ReactDOMClient.createRoot(document.getElementById("root"))

app.render(<App />)
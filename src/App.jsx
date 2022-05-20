import React from "react"
import {Route, Routes} from "react-router-dom"

import {Home} from "./pages/home"
import {Statistics} from "./pages/statistics"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}> </Route>
        <Route exact path="/analysis" element={<Statistics/>}> </Route>
      </Routes>
    </div>
  )
}

export default App

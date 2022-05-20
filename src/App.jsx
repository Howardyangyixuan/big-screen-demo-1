import React from "react"
import {Route, Routes} from "react-router-dom"

import {Home} from "./pages/home"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
      </Routes>
    </div>
  )
}

export default App

import React from "react"
import "./statistics.scss"
import {Chart1} from "../components/chart1.jsx"
import {Chart2} from "../components/chart2"
import {Chart3} from "../components/chart3"
import {Chart4} from "../components/chart4"

export const Statistics = () => {
  return (
    <div className="statistics">
      <header><h1>Silvia & Howard's Travel Plan Statistics</h1></header>
      <main>
        <section className="section1">
          <Chart1/>
          <Chart2/>
        </section>
        <section className="section2">
          <Chart3/>
          <Chart4/>
        </section>
        <section className="section3">3</section>
        <section className="section4">4</section>
        <section className="section5">5</section>
      </main>
    </div>
  )
}

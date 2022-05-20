import React from "react"
import "./statistics.scss"
import {Chart1} from "../components/chart1.jsx"

export const Statistics = () => {
  return (
    <div className="statistics">
      <header><h1>Silvia & Howard's Travel Plan Statistics</h1></header>
      <main>
        <section className="section1">
          <div className="border category">
            <h2>浏览量按类别统计</h2>
            <Chart1 className="chart1"/>
          </div>
        </section>
        <section className="section2">2</section>
        <section className="section3">3</section>
        <section className="section4">4</section>
        <section className="section5">5</section>
      </main>
    </div>
  )
}

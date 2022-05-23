import React from "react"
import "./statistics.scss"
import {Chart1} from "../components/chart1.jsx"
import {Chart2} from "../components/chart2"
import {Chart3} from "../components/chart3"
import {Chart4} from "../components/chart4"
import {Chart5} from "../components/chart5"
import {Chart6} from "../components/chart6"
import {Chart7} from "../components/chart7"
import {Chart9} from "../components/chart9"
import {Chart10} from "../components/Chart10"

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
        <section className="section3">
          <Chart5/>
        </section>
        <section className="section4">
          <Chart6/>
        </section>
        <section className="section5">
          <div className="dynamic border chart-wrapper">
            <h2 className="title-border">发布10日内浏览量和点赞变化趋势</h2>
            <div className="chart-horizontal-wrapper">
              <Chart9 className="left" type={"comment"}/>
              <Chart9 position="right" className="right"/>
            </div>
          </div>
          <div className="user border chart-wrapper">
            <h2 className="title-border">用户分析</h2>
            <div className="chart-horizontal-wrapper">
              <Chart7 type="age"/>
              <Chart7/>
            </div>
          </div>
          <div className="subscribe border chart-wrapper">
            <h2 className="title-border">视频效果分析</h2>
            <Chart10/>
          </div>
        </section>
      </main>
    </div>
  )
}

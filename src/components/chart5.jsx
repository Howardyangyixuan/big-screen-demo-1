import {useEffect, useRef} from "react"
import * as echarts from "echarts"
import {px} from "../shared/fn"
import {createEchartsOptions} from "../shared/createEchartsOptions"

export const Chart5 = () => {
  const ref = useRef(null)
  useEffect(() => {
    function getVirtulData(year) {
      year = year || "2022"
      let date = +echarts.number.parseDate(year + "-01-01")
      let end = +echarts.number.parseDate(+year + "-06-01")
      let dayTime = 3600 * 24 * 1000
      let data = []
      for (let time = date; time < end; time += dayTime) {
        data.push([
          echarts.format.formatTime("yyyy-MM-dd", time),
          Math.floor(Math.random() * 10000)
        ])
      }
      return data
    }

    const data = getVirtulData("2022")
    const options = createEchartsOptions({
      title: {show: false},
      tooltip: {
        formatter: function (params) {
          return params.value[0] + "浏览量: " + params.value[1]
        }
      },
      legend: {
        top: px(250),
        data: ["浏览量", "发布日期"],
      },
      calendar: [
        {
          cellSize: px(30),
          top: px(40),
          left: "center",
          range: ["2022-01-01", "2022-06-01"],
          splitLine: {
            show: true,
            lineStyle: {
              color: "#000",
              width: px(3),
              type: "solid"
            }
          },
          itemStyle: {
            color: "#111",
            borderWidth: px(1),
            borderColor: "#111"
          }
        },
      ],
      series: [
        {
          name: "浏览量",
          type: "scatter",
          coordinateSystem: "calendar",
          data: data,
          symbolSize: function (val) {
            return val[1] / 1000 * px(2)
          },
          itemStyle: {
            color: "#f3c2cb"
          }
        },
        {
          name: "发布日期",
          type: "effectScatter",
          coordinateSystem: "calendar",
          data: data
            .sort(function (a, b) {
              return b[1] - a[1]
            })
            .slice(0, 12),
          symbolSize: function (val) {
            return val[1] / 1000 * px(2)
          },
          showEffectOn: "render",
          rippleEffect: {
            brushType: "stroke"
          },
          itemStyle: {
            color: "#5871c0",
            shadowBlur: 10,
            shadowColor: "#333"
          },
          zlevel: 1
        }
      ]
    })
    const myChart = echarts.init(ref.current)
    myChart.setOption(options)
  }, [])
  return (
    <div className="views chart-wrapper border">
      <h2 className="title-border">2022每日浏览量及发布时间</h2>
      <div ref={ref} className="chart"/>
    </div>
  )
}
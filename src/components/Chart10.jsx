import {getSubscribe} from "../data/getSubscribe"
import {useEffect, useRef} from "react"
import * as echarts from "echarts"
import {createEchartsOptions} from "../shared/createEchartsOptions"
import {px} from "../shared/fn"

export const Chart10 = () => {
  const ref = useRef(null)
  useEffect(() => {
    const myCharts = echarts.init(ref.current)
    const data = getSubscribe()
    const option = createEchartsOptions({
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: "none"
          },
          restore: {},
          saveAsImage: {}
        }
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          animation: false,
          label: {
            backgroundColor: "#505765"
          }
        }
      },
      grid: {
        x: px(40),
        x2: px(40),
        y: "20%",
        y2: "30%",
      },
      legend: {
        data: ["播放量", "新增关注"],
        top: "5%",
        left: "5%"
      },
      dataZoom: [
        {
          show: true,
          realtime: true,
          start: 80,
          end: 100,
          bottom:"5%",
          height:"10%"
        },
        {
          type: "inside",
          realtime: true,
          start: 80,
          end: 100
        }
      ],
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          axisLine: {onZero: false},
          data: data.dates.map(function (str) {
            return str.replace(" ", "\n")
          })
        }
      ],
      yAxis: [
        {
          name: "",
          type: "value",
          position: "left",
          min: 0,
          max: 100,
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(255, 255, 255, 1)",
              width: 2
            }
          }
        },
        {
          name: "",
          position: "right",
          nameLocation: "end",
          alignTicks: true,
          type: "value",
          min: 0,
          max: 100
        }
      ],
      series: [
        {
          name: "播放量",
          type: "line",
          areaStyle: {},
          lineStyle: {
            width: 1
          },
          emphasis: {
            focus: "series"
          },
          data: data.views
        },
        {
          name: "新增关注",
          type: "line",
          yAxisIndex: 1,
          areaStyle: {},
          lineStyle: {
            width: 1
          },
          emphasis: {
            focus: "series"
          },
          data: data.subscribes
        }
      ]
    })
    myCharts.setOption(option)
  }, [])
  return (
    <div ref={ref} className="chart"/>
  )
}
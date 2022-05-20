import * as echarts from "echarts"
import {useEffect, useRef} from "react"
import {px} from "../shared/fn.js"

export const Chart1 = (props) => {
  const ref = useRef(null)
  useEffect(() => {
    var myChart = echarts.init(ref.current)
    var option

    option = {
      textStyle: {
        fontSize: px(12),
        color: "#000000"
      },
      title: {show: false},
      legend: {show: false},
      xAxis: {
        type: "category",
        data: ["旅行", "好物测评", "日常生活", "美食探店"],
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: "#083B70"}
        },
        axisLabel: {
          fontSize: px(12),
          formatter(val) {
            if (val.length > 2) {
              const array = val.split("")
              array.splice(2, 0, "\n")
              return array.join("")
            } else {
              return val
            }
          }
        }
      },
      yAxis: {
        type: "value"
      },
      grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40),
      },
      series: [
        {
          data: [12, 20, 15, 8],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)"
          }
        }
      ]
    }

    option && myChart.setOption(option)

  }, [])
  return (
    <div {...props} ref={ref}/>
  )
}

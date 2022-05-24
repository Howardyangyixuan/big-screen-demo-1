import * as echarts from "echarts"
import {useEffect, useRef} from "react"
import {createEchartsXYOptions} from "../shared/createEchartsXYOptions"
import {px} from "../shared/fn"

export const Chart1 = () => {
  const ref = useRef(null)
  useEffect(() => {
    const myChart = echarts.init(ref.current)
    const option = createEchartsXYOptions({
      xAxis: {
        type: "category",
        data: ["旅行", "好物测评", "日常生活", "美食探店"],
        axisLabel: {
          fontSize: px(16),
          margin: px(5),
          formatter(val) {
            if (val.length > 2) {
              const array = val.split("")
              array.splice(2, 0, "\n")
              return array.join("")
            } else {
              return val
            }
          }
        },
      },
      yAxis: {
        axisLabel: {
          fontSize: px(16),
          margin: px(5),
          formatter: "{value}k"
        },
      },
      series: [
        {
          data: [12, 20, 15, 8],
          itemStyle: {
            color: "#5871c0",
          },
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)"
          }
        }
      ]
    })

    myChart.setOption(option)

  }, [])
  return (
    <div className="category-views chart-wrapper border">
      <h2 className="title-border">浏览量按类别统计</h2>
      <div className="chart" ref={ref}/>
    </div>
  )
}

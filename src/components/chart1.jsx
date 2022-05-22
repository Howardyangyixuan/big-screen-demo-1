import * as echarts from "echarts"
import {useEffect, useRef} from "react"
import {createEchartsXYOptions} from "../shared/createEchartsXYOptions"

export const Chart1 = () => {
  const ref = useRef(null)
  useEffect(() => {
    const myChart = echarts.init(ref.current)
    const option = createEchartsXYOptions({
      xAxis: {
        type: "category",
        data: ["旅行", "好物测评", "日常生活", "美食探店"],
      },
      yAxis: {
        axisLabel: {
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

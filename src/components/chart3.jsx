import {useEffect, useRef} from "react"
import * as echarts from "echarts"
import {createEchartsOptions} from "../shared/createEchartsOptions"
import {px} from "../shared/fn"

export const Chart3 = () => {
  const ref = useRef(null)
  useEffect(() => {
    const option = createEchartsOptions({
      tooltip: {
        trigger: "axis"
      },
      grid: {
        x: px(40),
        y: px(80),
        x2: px(40),
        y2: px(40)
      },
      legend: [
        {data: ["旅行", "好物测评"]},
        {data:["日常生活", "美食探店"],y:20}
      ],
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        data: ["一月", "二月", "三月", "四月", "五月", "六月"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "好物测评",
          type: "line",
          stack: "Total",
          data: [120, 152, 250, 90, 230, 210]
        },
        {
          name: "日常生活",
          type: "line",
          data: [150, 232, 100, 154, 278, 410]
        },
        {
          name: "美食探店",
          type: "line",
          data: [320, 332, 301, 390, 330, 320]
        },
        {
          name: "旅行",
          type: "line",
          data: [420, 532, 434, 490, 530, 620]
        }
      ]
    })
    const myCharts = echarts.init(ref.current)
    myCharts.setOption(option)
  }, [])
  return (<div>
    <div className="trends-likes chart-wrapper border">
      <h2 className="title-border">点赞趋势按类别统计</h2>
      <div className="chart" ref={ref}>hi</div>
    </div>
  </div>)
}
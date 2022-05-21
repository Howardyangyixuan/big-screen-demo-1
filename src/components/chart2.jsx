import * as echarts from "echarts"
import {useEffect, useRef} from "react"
import {px} from "../shared/fn.js"
import {createEchartsOptions} from "../shared/createEchartsOptions"

export const Chart2 = (props) => {
  const ref = useRef(null)
  useEffect(() => {
    const myChart = echarts.init(ref.current)
    const option = createEchartsOptions({
      legend: {show: true},
      yAxis: {
        type: "category",
        data: ["旅行", "好物测评", "日常生活", "美食探店"],
      },
      series: [
        {
          name: "点赞",
          type: "bar",
          data: [193, 234, 311, 121],
          itemStyle: {
            borderRadius: [0, 5, 5, 0] //（顺时针左上，右上，右下，左下）
          },
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0, color: "#95c4ed" // 0% 处的颜色
            }, {
              offset: 1, color: "#5871c0" // 100% 处的颜色
            }],
            global: false // 缺省为 false
          }
        },
        {
          name: "评论",
          type: "bar",
          data: [182, 234, 290, 104],
          itemStyle: {
            borderRadius: [0, 5, 5, 0] //（顺时针左上，右上，右下，左下）
          },
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0, color: "#f3c2cb" // 0% 处的颜色
            }, {
              offset: 1, color: "#db90a7" // 100% 处的颜色
            }],
            global: false // 缺省为 false
          }
        }
      ],
      grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40),
        // containLabel: true
      },
    })
    myChart.setOption(option)

  }, [])
  return (
    <div className="category-comments chart-wrapper border">
      <h2 className="title-border">评论和点赞按类别统计</h2>
      <div className="chart" ref={ref}/>
    </div>
  )
}

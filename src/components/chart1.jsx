import * as echarts from "echarts"
import {useEffect, useRef} from "react"
import {px} from "../shared/fn.js"
import {echartsBaseOptions} from "../shared/echartsBaseOptions"
import {createEchartsOptions} from "../shared/createEchartsOptions"

export const Chart1 = (props) => {
  const ref = useRef(null)
  useEffect(() => {
    const myChart = echarts.init(ref.current)
    const option = createEchartsOptions({
      xAxis: {
        type: "category",
        data: ["旅行", "好物测评", "日常生活", "美食探店"],
      },
      series: [
        {
          // color:['#697eb0'],
          data: [12, 20, 15, 8],
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
    <div className="category-views border">
      <h2>浏览量按类别统计</h2>
      <div className="chart1" ref={ref}/>
    </div>
  )
}

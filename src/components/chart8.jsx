import {useEffect, useRef} from "react"
import * as echarts from "echarts"
import {px} from "../shared/fn.js"
import {createEchartsOptions} from "../shared/createEchartsOptions"

export const Chart8 = () => {
  const ref = useRef(null)
  useEffect(() => {
    const myChart = echarts.init(ref.current)
    const option = createEchartsOptions({
      legend: {
        top: "bottom",
        left: "center",
        itemWidth: px(20),
        itemHeight: px(20),
      },
      series: [
        {
          name: "用户年龄分布",
          type: "pie",
          radius: ["55%", "70%"],
          top:-px(50),
          // left: "0%",
          // bottom: "20%",
          avoidLabelOverlap: false,
          label: {
            show: false,
            fontSize: px(20),
            fontWeight: "bold",
            position: "center"
          },
          emphasis: {
            label: {
              show: true,
              formatter: "{b}\n共{c}人\n约{d}%",
              backgroundColor: "pink",
              fontSize:px(30),
              width: px(160),
              height: px(160),
              borderRadius: px(80)
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 250+1258, name: '男性' },
            { value: 384+890, name: '女性' },
            { value: 210, name: 'LGBT人群' },
          ]
        }, {
          name: "用户年龄分布",
          type: "pie",
          radius: ["0%", "30%"],
          top:-px(50),
          itemStyle: {
            color: "rgba(245, 194, 203, 0)"
          },
          label: {
            show: true,
            fontSize: px(30),
            textBorderColor: "rgba(255, 0, 0, 0)",
            fontWeight: "bold",
            position: "center",
            formatter:"性别分布"
          },
          data: [{value: 0, name: ""}]
        },
      ]
    })
    myChart.setOption(option)
  }, [])
  return (
    <div ref={ref} className="chart"/>
  )
}
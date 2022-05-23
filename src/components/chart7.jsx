import {useEffect, useRef} from "react"
import * as echarts from "echarts"
import {px} from "../shared/fn.js"
import {createEchartsOptions} from "../shared/createEchartsOptions"
import {getUser} from "../data/getUser"

export const Chart7 = (props) => {
  const settings = props.type === "age" ? {
    data: getUser().age,
    labelFormatter: "年龄分布"
  } : {
    data: getUser().gender,
    labelFormatter: "性别分布"
  }
  const ref = useRef(null)
  useEffect(() => {
    const myChart = echarts.init(ref.current)
    const option = createEchartsOptions({
      legend: {
        top: "bottom",
        left: "center",
        itemWidth: px(12),
        itemHeight: px(12),
      },
      series: [
        {
          name: "用户年龄分布",
          type: "pie",
          radius: ["50%", "60%"],
          top: -px(50),
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
              fontSize: px(30),
              width: px(150),
              height: px(150),
              borderRadius: px(75)
            }
          },
          labelLine: {
            show: false
          },
          data: settings.data
        }, {
          name: "用户年龄分布",
          type: "pie",
          radius: ["0%", "30%"],
          top: -px(50),
          itemStyle: {
            color: "rgba(245, 194, 203, 0)"
          },
          label: {
            show: true,
            fontSize: px(30),
            textBorderColor: "rgba(255, 0, 0, 0)",
            fontWeight: "bold",
            position: "center",
            formatter: settings.labelFormatter
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
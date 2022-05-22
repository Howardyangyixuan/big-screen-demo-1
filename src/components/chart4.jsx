import {useEffect, useRef} from "react"
import {createEchartsXYOptions} from "../shared/createEchartsXYOptions"
import * as echarts from "echarts"
import {px} from "../shared/fn"

export const Chart4 = () => {
  const ref = useRef(null)
  useEffect(() => {
    const option = createEchartsXYOptions({
      xAxis: {
        type: "category",
        data: ["00:00", "01:30", "06:00", "07:30", "09:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00", "19:30", "21:00", "22:30", "00:00"],
        axisLabel: {
          fontSize: px(12),
          formatter(val) {
            return parseInt(val) + "点"
          }
        },
      },

      yAxis: {
        type: "value",
        axisLabel: {
          fontSize: px(12),
          formatter: "{value}k"
        },
        axisPointer: {
          snap: true
        }
      },
      visualMap: {
        show: false,
        dimension: 0,
        pieces: [
          {
            gt: 1,
            lte: 2,
            color: "#5871c0"
          },
          {
            gt: 5,
            lte: 8,
            color: "#fb607f"
          },
          {
            gt: 11,
            lte: 14,
            color: "#fb607f"
          }
        ]
      },
      series: [
        {
          symbol: "circle",
          name: "浏览量",
          type: "line",
          lineStyle: {
            color: "#5470C6",
            width: px(5)
          },
          data: [110, 80, 70, 90, 130, 120, 250, 310, 290, 210, 140, 190, 120, 250, 110],
          areaStyle: {},
          markArea: {
            label: {
              color:"#fff",
              textBorderColor:"#111",
              textBorderWidth:px(4)
            },
            data: [
              [
                {
                  name: "午高峰",
                  xAxis: "12:00",
                },
                {
                  xAxis: "13:30"
                }
              ],
              [
                {
                  name: "晚高峰",
                  xAxis: "21:00"
                },
                {
                  xAxis: "22:30"
                }
              ],
              [
                {
                  name: "睡眠时间",
                  xAxis: "01:30",
                  itemStyle: {
                    color: "#5871c0",
                  },
                },
                {
                  xAxis: "06:00"
                }
              ]
            ]
          }
        }
      ]
    })
    const myChart = echarts.init(ref.current)
    myChart.setOption(option)
  }, [])
  return (
    <div className="trends-time chart-wrapper border">
      <h2 className="title-border">浏览时间趋势统计</h2>
      <div ref={ref} className="chart">hi</div>
    </div>
  )
}
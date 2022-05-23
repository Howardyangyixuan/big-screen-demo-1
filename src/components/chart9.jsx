import {useCallback, useEffect, useRef} from "react"
import * as echarts from "echarts"
import {px} from "../shared/fn.js"
import {createEchartsXYOptions} from "../shared/createEchartsXYOptions"
import {virtualData, videoColors} from "../shared/getVirtualData"

export const Chart9 = (props) => {
  const ref = useRef(null)
  let type = props.type === "comment" ? 1 : 2
  const positionSetting = props.position === "right" ?
    {
      xInverse: true,
      yPosition: "right",
      labelPosition: "insideRight",
      graphic: {right: "68%"},
      title:{
        text: "点赞数",
        right: px(10),
      }
    }
    :
    {
      xInverse: false,
      yPosition: "left",
      labelPosition: "insideLeft",
      graphic: {left: "68%"},
      title:{
        text: "浏览量",
        left: px(10),
      }
    }

  let myChart
  const updateFrequency = 1000
  const data = virtualData
  const dimensionX = type
  const dimensionY = 3
  //获取数据内的所有日期，用于按时间更新
  const dates = []
  const setTimeOutId = []
  const dateIndex = data[0].length - 1
  for (let i = 0; i < data.length; ++i) {
    const idx = data[i].length - 1
    if (dates.length === 0 || dates[dates.length - 1] !== data[i][idx]) {
      dates.push(data[i][idx])
    }
  }
  let startIndex = 0
  let startDate = dates[startIndex]
  const option = createEchartsXYOptions({
      dataset: {
        source: data.filter(function (d) {
          return d[dateIndex] === startDate
        })
      },
      tooltip: {show: false},
      title: {
        ...positionSetting.title,
        top: px(10),
        textStyle: {
          fontSize: px(20)
        },
      },
      grid: {
        x: px(15),
        x2: px(15),
        y: px(60),
        y2: px(40),
      },
      xAxis: {
        max: 1500,
        inverse: positionSetting.xInverse
      },
      yAxis: {
        type: "category",
        inverse: true,
        position: positionSetting.position,
        max: 4,
        axisLabel: {
          inside: true,
          show: false,
          fontSize: px(16),
          rich: {
            flag: {
              fontSize: 25,
              padding: 5
            }
          },
          z: 1,
        },
        animationDuration: 0,
        animationDurationUpdate: 300
      },
      series: [
        {
          realtimeSort: true,
          seriesLayoutBy: "column",
          type: "bar",
          itemStyle: {
            color: function (param) {
              return videoColors[param.value[0]] || "#5470c6"
            }
          },
          encode: {
            x: dimensionX,
            y: dimensionY
          },
          label: {
            z: 2,
            show: true,
            precision: 0,
            position: positionSetting.labelPosition,
            formatter: `{b}:{@[${dimensionX}]}`,
            valueAnimation: true,
            fontFamily: "monospace"
          }
        }
      ],
      // Disable init animation.
      animationDuration: 0,
      animationDurationUpdate: updateFrequency,
      animationEasing: "linear",
      animationEasingUpdate: "linear",
      graphic: {
        elements: [
          {
            type: "text",
            ...positionSetting.graphic,
            bottom: px(30),
            style: {
              text: startDate,
              fontSize: px(40),
              fill: "rgba(100, 100, 100, 0.25)"
            },
            z: 10
          }
        ]
      }
    }
  )
  useEffect(() => {
    myChart = echarts.init(ref.current)
    myChart.setOption(option)
  }, [])
  for (let i = startIndex; i < dates.length - 1; ++i) {
    (function (i) {
      const id = setTimeout(function () {
        updateDate(dates[i + 1])
      }, (i - startIndex + 1) * updateFrequency)
      setTimeOutId.push(id)
    })(i)
  }

  function updateDate(date) {
    const source = data.filter(function (d) {
      return d[dateIndex] === date
    })
    option.series[0].data = source
    option.graphic.elements[0].style.text = date
    myChart.setOption(option)
  }

  const onChange = (e) => {
    //停止动画更新
    for (let id of setTimeOutId) {
      clearTimeout(id)
    }
    const idx = e.target.selectedIndex
    const date = e.target.options[idx].value
    updateDate(date)
  }

  const select =
    useCallback(
      () => {
        console.log("hi")
        const result = []
        for (let i = 1; i <= 10; i++) {
          result.push(<option key={i} value={"第" + i + "天"}>{"第" + i + "天"}</option>)
        }
        return result
      }
      , [])
  return (
    <>
      <div ref={ref} className="chart"/>
      <select {...props} size="3" defaultValue="请选择" onChange={onChange}>
        <option value="请选择" disabled>请选择</option>
        {select()}
      </select>
    </>
  )
}
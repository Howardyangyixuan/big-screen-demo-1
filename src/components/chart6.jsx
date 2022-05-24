import {useEffect, useRef} from "react"
import * as echarts from "echarts"
import {px} from "../shared/fn"
import geoJSON from "../geo/100000_full.json"
import {createEchartsXYOptions} from "../shared/createEchartsXYOptions"

export const Chart6 = () => {
  const ref = useRef(null)
  useEffect(() => {
    // const myChart = echarts.init(ref.current, null, {
    //   renderer: "canvas",
    //   useDirtyRect: false
    // })
    const myChart = echarts.init(ref.current)
    echarts.registerMap("China", geoJSON)
    const option = createEchartsXYOptions({
      tooltip: {
        // formatter: "{b}:{c}人"
      },
      toolbox: {
        show: true,
        orient: "vertical",
        left: "right",
        top: "center",
        feature: {
          dataView: {
            readOnly: true,
            optionToContent(opt) {
              console.log(opt)
              const name = opt.series[0].name
              let table = "<table class=\"table\"><thead><tr>"
                + "<th>地区</th>"
                + "<th>" + name + "</th>"
                + "</tr>"
                + "</thead>"

              const dataset = opt.dataset[0].source
              for (let i = 0; i < dataset.length; i++) {
                const data = dataset[i]
                table += "<tr>"
                  + "<td>" + data.name + "</td>"
                  + "<td>" + data.value + "</td>"
                  + "</tr>"
              }
              return table
            },
            buttonColor: "#ce3260",
            text: "",
            textColor: "#ce3260",
            backgroundColor: "#f5e3e9",
          },
          restore: {},
          saveAsImage: {}
        },
        itemSize: px(30),
        itemGap: px(10)
      },
      textColor: {
        axisLine: {
          lineStyle: {color: "#FFF"}
        },
      },
      label: {
        fontSize: px(16),
      },
      grid: {
        left: "10%",
        top: "50%",
        bottom: "5%",
        right: "5%"
      },
      dataset: {
        // 用 dimensions 指定了维度的顺序。直角坐标系中，
        // 默认把第一个维度映射到 X 轴上，第二个维度映射到 Y 轴上。
        // 如果不指定 dimensions，也可以通过指定 series.encode
        // 完成映射，参见后文。
        dimensions: ["name", "value"],
        source: [
          {name: "北京市", value: 20057},
          {name: "天津市", value: 1477},
          {name: "重庆市", value: 1477},
          {name: "上海市", value: 21686},
          {name: "黑龙江省", value: 4918},
          {name: "吉林省", value: 4368},
          {name: "辽宁省", value: 3368},
          {name: "河北省", value: 4737},
          {name: "河南省", value: 4737},
          {name: "湖北省", value: 15204},
          {name: "湖南省", value: 10765},
          {name: "山东省", value: 6992},
          {name: "山西省", value: 3992},
          {name: "陕西省", value: 5477},
          {name: "广东省", value: 14045},
          {name: "广西省", value: 3368},
          {name: "江苏省", value: 8172},
          {name: "江西省", value: 5243},
          {name: "安徽省", value: 5932},
          {name: "福建省", value: 3595},
          {name: "浙江省", value: 7891},
          {name: "香港特别行政区", value: 2318},
          {name: "澳门特别行政区", value: 1218},
          {name: "台湾省", value: 818},
          {name: "海南省", value: 4518},
          {name: "云南省", value: 3068},
          {name: "贵州省", value: 4028},
          {name: "四川省", value: 12178},
          {name: "青海省", value: 2190},
          {name: "甘肃省", value: 3338},
          {name: "内蒙古自治区", value: 806},
          {name: "新疆维吾尔自治区", value: 725},
          {name: "西藏自治区", value: 227},
          {name: "宁夏回族自治区", value: 463},
          {name: "广西壮族自治区", value: 832},
          {name: "境外IP", value: 5881},
        ].sort((a, b) => b.value - a.value)
      },
      xAxis: {
        type: "category",
        axisLine: {
          // lineStyle: {color: "#FFF"}
        },
        axisLabel: {
          margin: px(15),
          fontSize: px(20),
          formatter(val) {
            return val.substring(0, 2)
          }
        }
      },
      yAxis: {
        axisLabel: {
          margin: px(15),
          fontSize: px(16),
        },
        axisLine: {
          // lineStyle: {color: "#FFF"}
        },
      },
      series: [
        {
          name: "用户人数",
          type: "bar",
          emphasis: {
            focus: "self",
          },
          tooltip: {
            formatter(val) {
              return `${val.value.name} <br/> ${val.value.value}人`
            }
          }
        },
        {
          name: "用户人数",
          type: "map",
          roam: true,
          select: {disabled: true},
          center: [105, 23],
          zoom: 1.2,
          scaleLimit: {
            max: 8,
            min: 1
          },
          emphasis: {
            itemStyle: {
              areaColor: "#ffff66",
            }
          },
          itemStyle: {
            borderColor: "black",
            borderWidth: px(2),
          },
          map: "China",
          label: {
            show: true
          },
          showLegendSymbol: true,
        }
      ],
      visualMap: {
        left: "right",
        bottom: "5%",
        min: 1000,
        max: 10000,
        text: ["High", "Low"],
        realtime: false,
        calculable: true,
        inRange: {
          color: ["#5871c0", "#f3c2cb", "#fb607f"]
        },
        itemHeight: px(250),
        align: "right",
        itemWidth: px(40),
        textGap: px(16),
        textStyle: {
          fontSize: px(20),
        },
      },
    })
    myChart.setOption(option)
    myChart.on("mouseover", {seriesIndex: 0}, function (event) {
      myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 1,
        name: event.name
      })
    })
    myChart.on("mouseout", {seriesIndex: 0}, function (event) {
      myChart.dispatchAction({
        type: "downplay",
        seriesIndex: 1,
        name: event.name
      })
    })
    myChart.on("mouseover", {seriesIndex: 1}, function (event) {
      myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        name: event.name
      })
    })
    myChart.on("mouseout", {seriesIndex: 1}, function (event) {
      myChart.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
        name: event.name
      })
    })
  }, [])
  return (
    <div className="map chart-wrapper border">
      <h2 className="title-border">用户IP归属地</h2>
      <div ref={ref} className="chart"/>
    </div>
  )
}
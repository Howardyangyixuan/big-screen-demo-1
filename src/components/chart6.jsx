import {useEffect, useRef} from "react"
import * as echarts from "echarts"
import {px} from "../shared/fn"
import svgChina from "../geo/中华人民共和国.svg"

export const Chart6 = () => {
  const ref = useRef(null)
  useEffect(() => {
    var myChart = echarts.init(ref.current, null, {
      renderer: "canvas",
      useDirtyRect: false
    })
    var app = {}
    var ROOT_PATH = "https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples"
    var option

    const xhr = new XMLHttpRequest()
    xhr.open("get", svgChina)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
          console.log(xhr.response)
          echarts.registerMap("iceland_svg", {svg: xhr.response})

          option = {
            grid: {
              left: '60%',
              top: '20%',
              bottom: '20%'
            },
            tooltip: {},
            geo: {
              tooltip: {
                show: true
              },
              map: "iceland_svg",
              roam: true,
              zoom:3
            },
            series: {
              type: "effectScatter",
              coordinateSystem: "geo",
              geoIndex: 0,
              symbolSize: function (params) {
                return (params[2] / 100)  + 5
              },
              itemStyle: {
                color: "#b02a02"
              },
              encode: {
                tooltip: 2
              },
              data: [
                [116.40, 39.90, 100],
                [121.47, 31.23, 110],
                [120.15, 30.28, 80],
                [116.98, 36.67, 61],
                [113.27, 23.13, 70],
                [104.07, 30.67, 81]
              ].map((arr)=>[arr[0]+710,arr[1]+295,arr[2]])
            }
          }
          myChart.setOption(option)
        }
      }
    }
    xhr.send()

  }, [])
  return (
    <div className="map chart-wrapper">
      <h2 className="title-border">用户IP归属地</h2>
      <div ref={ref} className="chart"/>
    </div>
  )
}
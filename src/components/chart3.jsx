import {useEffect, useRef} from "react"
import * as echarts from "echarts"
import {createEchartsOptions} from "../shared/createEchartsOptions"

export const Chart3 = () => {
  const ref = useRef(null)
  useEffect(() => {
    const option = createEchartsOptions({})
    const myCharts = echarts.init(ref.current)
    myCharts.setOption(option)
  }, [])
  return (<div>
    <div className="trends chart-wrapper border">
      <h2 className="title-border">类别趋势</h2>
      <div className="chart" ref={ref}>hi</div>
    </div>
  </div>)
}
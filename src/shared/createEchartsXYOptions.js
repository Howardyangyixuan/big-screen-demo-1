import {echartsXYBaseOptions} from "./echartsXYBaseOptions"
import {echartsBaseOptions} from "./echartsBaseOptions"


export const createEchartsXYOptions = (options) => {
  return {
    ...echartsBaseOptions,
    ...echartsXYBaseOptions,
    ...options,
    yAxis: {
      ...echartsXYBaseOptions.yAxis,
      ...options.yAxis
    },
    xAxis: {
      ...echartsXYBaseOptions.xAxis,
      ...options.xAxis
    },
  }
}
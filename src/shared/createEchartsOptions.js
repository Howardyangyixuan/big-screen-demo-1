import {echartsBaseOptions} from "./echartsBaseOptions"

export const createEchartsOptions = (options) => {
  return {
    ...echartsBaseOptions,
    ...options,
    yAxis: {
      ...echartsBaseOptions.yAxis,
      ...options.yAxis
    },
    xAxis: {
      ...echartsBaseOptions.xAxis,
      ...options.xAxis
    },
  }
}
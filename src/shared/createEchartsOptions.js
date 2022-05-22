import {echartsBaseOptions} from "./echartsBaseOptions"


export const createEchartsOptions = (options) => {
  return {
    ...echartsBaseOptions,
    ...options,
  }
}
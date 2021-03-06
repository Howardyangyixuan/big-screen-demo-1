import {px} from "./fn"

function formatter(val) {
  if (val.length > 2) {
    const array = val.split("")
    array.splice(2, 0, "\n")
    return array.join("")
  } else {
    return val
  }
}

export const echartsXYBaseOptions = {
  xAxis: {
    axisTick: {show: false},
    axisLine: {
      lineStyle: {color: "#000000"}
    },
    axisLabel: {
      margin: px(5),
      fontSize: px(16),
      formatter(val) {
        return formatter(val)
      }
    },
  },
  yAxis: {
    axisTick: {show: false},
    axisLine: {
      lineStyle: {color: "#000000"}
    },
    axisLabel: {
      margin:px(5),
      fontSize: px(16),
      formatter(val) {
        return formatter(val)
      }
    }
  }
}
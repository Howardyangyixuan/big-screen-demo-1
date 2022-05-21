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

export const echartsBaseOptions = {
  title: {show: false},
  legend: {show: true},
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  grid: {
    x: px(40),
    y: px(40),
    x2: px(40),
    y2: px(40),
    // containLabel: true
  },
  xAxis: {
    axisTick: {show: false},
    axisLine: {
      lineStyle: {color: "#000000"}
    },
    axisLabel: {
      fontSize: px(12),
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
      fontSize: px(12),
      formatter(val) {
        return formatter(val)
      }
    }
  }
}
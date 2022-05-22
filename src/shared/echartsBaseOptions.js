import {px} from "./fn"

export const echartsBaseOptions = {
  title: {show: false},
  legend: {show: false},
  color:["#e0115f","#65bef9","#fb607f","#5871c0","#f6d5cf","#f4c8e0","#b7839a"],
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
}
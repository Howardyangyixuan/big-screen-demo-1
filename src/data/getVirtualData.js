export const videoColors = {
  "1": "#e0115f",
  "2": "#65bef9",
  "3": "#fb607f",
  "4": "#5871c0",
  "5": "#f6d5cf",
  "6": "#f4c8e0",
  "7": "#b7839a",
}
const videoList = {
  "1": "封校日常：东西航的纷争",
  "2": "899的电饭煲到底好在哪儿?",
  "3": "羊一圈：求职艰辛历程",
  "4": "北海公园奇遇记",
  "5": "520·人类迷惑行为大赏",
}
const getVirtualData = () => {
  const data = []
  const comments = {}
  const views = {}
  for (let key in videoList) {
    views[key] = Math.floor(Math.random() * 1000)
    comments[key] = Math.floor(Math.random() * views[key])
  }
  for (let i = 1; i <= 10; i++) {
    for (let key in videoList) {
      const random = Math.floor(Math.random() * 100)
      views[key] += random
      comments[key] += Math.floor(Math.random() * random)
      data.push([key, views[key], comments[key], videoList[key], `第${i}天`])
    }
  }
  return data
}
export const virtualData = getVirtualData()
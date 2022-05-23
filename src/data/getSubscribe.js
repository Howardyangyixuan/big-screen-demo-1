export const getSubscribe = () => {
  const dates = []
  const views = []
  const subscribes = []
  const now = new Date()
  Date.prototype.getYearMonthDayHours = function () {
    return this.getFullYear() + "/" + (this.getMonth() + 1) + "/" + this.getDate() + " " + this.getHours() + ":00"
  }
  dates.push(now.getYearMonthDayHours())
  for (let i = 0; i < 30 * 24; i++) {
    now.setHours(now.getHours() - 1)
    dates.push(now.getYearMonthDayHours())
    const random = Math.floor(Math.random() * 5)
    const view = random * Math.floor(now.getHours() % 22 + Math.random() * 5)
    views.push(view)
    const subscribe = Math.floor(Math.random() * view / 3 + Math.random() * 3)
    subscribes.push(subscribe)
  }
  dates.reverse()
  return {
    dates,
    views,
    subscribes
  }
}
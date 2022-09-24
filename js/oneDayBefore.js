const lastRun = '20220617-0928' // string
const nowDate = new Date()
const oneDayBefore = nowDate.getFullYear() + ('0' + (nowDate.getMonth() + 1)).slice(-2)+('0' + (nowDate.getDate() - 1)).slice(-2) + '-' +  ('0' + nowDate.getHours()).slice(-2) + ('0' + nowDate.getMinutes()).slice(-2)

console.log(oneDayBefore)
console.log(lastRun)
console.log(lastRun > oneDayBefore)
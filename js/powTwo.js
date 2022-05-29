const sum = (arr) => {
  return arr.reduce((acc, cur) => {
    return acc + cur
  }, 0)
}

const makePowTwo = (n) => {
  let arr = []
  for(let i = 1; i <= n; i++) {
    const latest = sum(arr) + 1
    arr.push(latest)
  }
  return arr
}

console.log(makePowTwo(sum(10)))

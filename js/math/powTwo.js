const sum = (arr) => {
  return arr.reduce((acc, cur) => {
    return acc + cur
  }, 0)
}

const arr = []
for(let i = 1; i <= 10; i++) {
  const latest = sum(arr) + 1
  arr.push(latest)
}

console.log(arr)

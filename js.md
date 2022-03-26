dicimal to binary
```
const toBinary = n => parseInt(n.toString(2))
```
get biggest val in obj
```
const obj = { A: 3000, B: 1000, C: 2000, D: 10000, E: 20000, F: 9000, G: 7000 }
const getBiggestValInObj = obj => {
  return Object.entries(obj).reduce((a,b) => b[1] > a[1] ? b : a)
}
console.log(getBiggestValInObj(obj)) // [ 'E', 20000 ]
```
remove duplicates
```
const removeDuplicates = arr => {
    [new Set(...arr)]
}
const arr = [1,2,2,3,4,4,4,5,6,7,8,8,8,9]
console.log(removeDuplicates(arr))
```

get prime num
```
const to = 100
const from = 2
let numObj = {}

const makeArray = (from, to) => Array(to - from + 1).fill(from).map((x,i) => x + i)

makeArray(from, to).reduce((a,i) => {
  a[i] = true
  return a
}, numObj)

const turnFalseMultiple = num => {
  for(i = num; i < to; i += num){
    numObj[i] = false
  }
}

const isTrueVal = obj => {
  let arr = []
  for (let key in obj){
    if(obj[key]){
      arr.push(key)
    }
  }
  return arr
}

const checkEachNum = num => {
  makeArray(from, num).forEach(x => {
    const len = makeArray(from, num).length + 1
    if(x !== len && num % x === 0) {
      numObj[num] = false
      turnFalseMultiple(num)
    }
  })
}

Object.keys(numObj).forEach(x => checkEachNum(x))

const getPrimeNum = obj => {
  for (let key in obj){
    if(obj[key]) {
      console.log(key)
    }
  }
}

getPrimeNum(numObj)
```

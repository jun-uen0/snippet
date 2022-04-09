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
bubble sort
```shell
const sortArry = arr => arr.sort((a,b) => a - b)
```
dicimal to binary
```shell
const toBinary = n => parseInt(n.toString(2))
```
get biggest val in obj
```shell
const obj = { A: 3000, B: 1000, C: 2000, D: 10000, E: 20000, F: 9000, G: 7000 }
const getBiggestValInObj = obj => {
  return Object.entries(obj).reduce((a,b) => b[1] > a[1] ? b : a)
}
console.log(getBiggestValInObj(obj)) // [ 'E', 20000 ]
```
remove duplicates
```shell
const removeDuplicates = arr => {
  return [...new Set(arr)]
}
const arr = [1,2,2,3,4,4,4,5,6,7,8,8,8,9]
console.log(removeDuplicates(arr))
```
transpose array
```shell
const getTransposeArr = arr => {
  let transposeArr = []
  for(let i = 0; i < arr[0].length; i++){
    transposeArr.push(arr.map(x => x[i]))
  }
  return transposeArr
}
```
number to string for each idx
```shell
const numToStg = arr => arr.map(x => Number(x))
```
string to number for each idx
```shell
const stgToNum = arr => arr.map(x => Number(x))
const stgToNum = arr => arr.map(Number)
```
sum all element in array
```shell
const sum = arr => arr.reduce((a,b)=> a + b)
```
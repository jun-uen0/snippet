rest parameters
```shell
const rest = sum(...args) => {
  return args.reduce((previous, current) => {
    return previous + current;
  });
}
const result1 = sum(1, 2, 3);
const result2 = sum(1, 2, 3, 4, 5);

document.write(`結果A：${result1}, 結果B：${result2}`);
```
reduce
```shell
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue, index, array) => {
    console.log('previousValue',previousValue)
    console.log('currentValue',currentValue)
    console.log('index',index)
    console.log('array',array)
    return previousValue + currentValue
  },initialValue);

console.log(sumWithInitial);
```
-> output
```shell
previousValue 0
currentValue 1
index 0
array [ 1, 2, 3, 4 ]
previousValue 1
currentValue 2
index 1
array [ 1, 2, 3, 4 ]
previousValue 3
currentValue 3
index 2
array [ 1, 2, 3, 4 ]
previousValue 6
currentValue 4
index 3
array [ 1, 2, 3, 4 ]
10
```
replace
```shell
#  bad replace
const str = "apple,banana,orange";
const replaced = str.replace(',', ' ')
console.log(replaced) // apple banana,orange
```

- good replace
```shell
# good replace
const str = "apple,banana,orange";
const replaced = str.replace(/,/g, ' ')
console.log(replaced) // apple banana orange
```
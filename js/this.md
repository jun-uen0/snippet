### Understanding "this"

```js
const jun = {
  livingIn: "Japan",
  age: 27,
  gender: "male",
  getGender: function () { return jun.gender }
}

console.log(jun.getGender()) // male
```
Change object name 'jun' in return at 'getGender'
```js
const junThis = {
  livingIn: "Japan",
  age: 27,
  gender: "male",
  getGender: function () { return this.gender } // change here
}
console.log(junThis.getGender()) // male
```
'this' refer to the its own object name

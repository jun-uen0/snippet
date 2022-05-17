const getLargest = (nums) => {
  const sArray = nums.sort((a, b) => {
    return a - b
  })
  const uSarray = sArray.filter((elm, index, self) => {
    return index == self.indexOf(elm)
  })
  return uSarray[uSarray.length - 1] // get second largest with -2
}

console.log(getLargest([1,2,3,4,4,3,2,1])) // 4

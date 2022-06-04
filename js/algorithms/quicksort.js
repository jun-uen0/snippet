const sort = arr => {
  if (arr.length < 2) return arr

  let pivot = arr[0]
  let left = []
  let right = []

  for (let i = 1, total = arr.length; i < total; i++) {
    if (arr[i] < pivot) left.push(arr[i])
    else right.push(arr[i])
  }
  console.log("pivot: ", pivot)
  console.log("arr: ", arr)
  console.log("left: ", left)
  console.log("right: ", right)
  console.log("------------------------")
  return [
    ...sort(left), // recursively call sort on the left side
    pivot,         // add the pivot to the sorted array
    ...sort(right) // recursively call sort on the right side
  ]
}

console.log(sort([3, 5, 2, 3, 1, 4, 7, 6, 8, 9]))

// output:
/**pivot:  3
arr:  [
  3, 5, 2, 3, 1,
  4, 7, 6, 8, 9
]
left:  [ 2, 1 ]
right:  [
  5, 3, 4, 7,
  6, 8, 9
]
------------------------
pivot:  2
arr:  [ 2, 1 ]
left:  [ 1 ]
right:  []
------------------------
pivot:  5
arr:  [
  5, 3, 4, 7,
  6, 8, 9
]
left:  [ 3, 4 ]
right:  [ 7, 6, 8, 9 ]
------------------------
pivot:  3
arr:  [ 3, 4 ]
left:  []
right:  [ 4 ]
------------------------
pivot:  7
arr:  [ 7, 6, 8, 9 ]
left:  [ 6 ]
right:  [ 8, 9 ]
------------------------
pivot:  8
arr:  [ 8, 9 ]
left:  []
right:  [ 9 ]
------------------------
[
  1, 2, 3, 3, 4,
  5, 6, 7, 8, 9
]
 */

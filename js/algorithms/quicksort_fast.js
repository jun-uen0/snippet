const partition = (arr, left, right) => {
  let pivot = arr[Math.floor((left + right) / 2)]
  while (left <= right) {
    while (arr[left] < pivot) {
      left++
    }
    while (arr[right] > pivot) {
      right--
    }
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }
  return left
}

const quickSort = (arr, left, right) => {
  if (left < right) {
    let pivot = partition(arr, left, right)
    quickSort(arr, left, pivot - 1)
    quickSort(arr, pivot + 1, right)
  }
}

const sortedArray = (arr) => {
  quickSort(arr, 0, arr.length - 1)
  return arr
}

console.log(sortedArray([6,2,3,1,5,4])) // [1,2,3,4,5,6]

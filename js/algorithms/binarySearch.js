let idx = 0

function binarySearch (arr, target) {

  if (arr.length === 0) {
    if(arr[0] === target) {
      return idx
    } else {
      return -1
    }
  }

  const mid = Math.floor(arr.length / 2)
  const pivot = arr[mid]

  if (pivot === target) {
    idx += mid
    return idx
  }

  if (pivot > target) {
    const left = arr.slice(0, mid)
    return binarySearch(left, target)
  }

  if (pivot < target) {
    const right = arr.slice(mid + 1)
    idx += mid + 1
    return binarySearch(right, target)
  }
  return
}

console.log(binarySearch([-1,0,3,5,9,12], 9))

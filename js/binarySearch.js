let idx = 0

const compare = (arr, target) => {

  if(arr.length === 0) {
    if(arr[0] === target) {
      return idx
    } else {
      return -1
    }
  }

  const mid = Math.floor(arr.length / 2)
  const pivot = arr[mid]
  const right = arr.slice(mid + 1)
  const left = arr.slice(0, mid)
  if (pivot === target) {
    idx += mid
    return idx
  } else if (pivot > target) {
    return compare(left, target)
  } else {
    idx += mid + 1
    return compare(right, target)
  }
}

fn main() {
  print!("{}", binary_search(&[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
}
fn binary_search(arr: &[i32], target: i32) -> i32 {
  let mut left = 0;
  let mut right = arr.len() - 1;
  while left <= right {
    let mid = left + (right - left) / 2;
    if arr[mid] == target {
      return mid as i32;
    } else if arr[mid] < target {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  -1
}
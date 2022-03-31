iterator
```shell
for iter in 0..5 {
  println!("{}", iter);
}
for iter in 0..=5 {
  println!("{}", iter);
}
```
get_odd_num
```shell
# https://stackoverflow.com/questions/26243025/remove-an-element-from-a-vector
let mut numbers = vec![1, 2, 3, 4, 5, 6, 8, 9, 11, 13, 14, 15];
numbers.drain_filter(|x| *x % 2 == 0).collect::<Vec<_>>();
assert_eq!(numbers, vec![1, 3, 5, 9, 11, 13, 15]);
```
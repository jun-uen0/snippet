stop warning msg
```shell
#![allow(dead_code)]
```
iterator
```shell
for iter in 0..5 {
  println!("{}", iter);
}
for iter in 0..=5 {
  println!("{}", iter);
}
```
get odd num
```shell
# https://stackoverflow.com/questions/26243025/remove-an-element-from-a-vector
let mut numbers = vec![1, 2, 3, 4, 5, 6, 8, 9, 11, 13, 14, 15];
numbers.drain_filter(|x| *x % 2 == 0).collect::<Vec<_>>();
assert_eq!(numbers, vec![1, 3, 5, 9, 11, 13, 15]);
```
get data type
```shell
fn type_of<T>(_: &T) -> &'static str {
  std::any::type_name::<T>()
}
// println!("{}", type_of(&10));
```
String to int
```shell
let my_string = "27".to_string();  // parse() works with &str and String
let my_int = my_string.parse::<i32>().unwrap();
```
floor and ceil
```shell
fn main() {
  let num_32 = 3.14159_f32;
  println!("{}", num_32.floor()); // Output: 3
  println!("{}", num_32.ceil()); // Output: 4
}
```
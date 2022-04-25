stop warning msg
```shell
#![allow(dead_code)]
```
iterator
```shell
fn main(){
  for iter in 0..5 {
    println!("{}", iter); // 0 1 2 3 4
  }
  for iter in 0..=5 {
    println!("{}", iter); // 0 1 2 3 4 5
  }
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
ref link: https://stackoverflow.com/questions/30355185/how-to-read-an-integer-input-from-the-user-in-rust-1-0
```shell
use std::io;

fn main() {
  let mut input_text = String::new();
  io::stdin()
    .read_line(&mut input_text)
    .expect("failed to read from stdin");

  let trimmed = input_text.trim();
  match trimmed.parse::<u32>() {
    Ok(i) => println!("your integer input: {}", i),
    Err(..) => println!("this was not an integer: {}", trimmed),
  };
}
```
floor and ceil
```shell
fn main() {
  let num_32 = 3.14159_f32;
  println!("{}", num_32.floor()); // Output: 3
  println!("{}", num_32.ceil()); // Output: 4
}
```
generic type
```shell
struct MyAnime<T> {
  anime: T,
}
fn main() {
  let str_data = MyAnime::<&str> { anime: "Steins;Gate" };
  let bool_data = MyAnime::<bool> { anime: true };
  let inference_data = MyAnime { anime: 0.571024};
  println!(
    "{} {} {}",
    str_data.anime, bool_data.anime, inference_data.anime,
  );
}
```
read input having space (like "10 11")
```shell
use std::io;

fn main() {
  let mut input = String::new();
  io::stdin().read_line(&mut word)
    .expect("failed to read from stdin");
  let vec: Vec<&str> = input.split_whitespace().collect();
  let first_line = vec[0].trim().to_string();
  let second_line = vec[1].trim().parse().unwrap_or(0);
  println!("first_line is {}, and second_line is: {}", first_line, second_line);
}
```

none and option
rust doesn't have null but None
```shell
struct MyAnime<T> {
  anime: Option<T>,
}

fn main() {
  let str_anime = MyAnime::<&str> { anime: None };
  if str_anime.anime.is_none() {
    println!("i do not have favorite anime")
  } else {
    println!("i do have favorite anime")
  }
  // i do not have favorite anime
  
  let str_anime = MyAnime::<&str> { anime: Some("Toradora!") };
  match str_anime.anime {
    Some(v) => println!("i do have favorite anime: {}", v),
    None => println!("i do not have favorite anime"),
  }
  // i do have favorite anime: Toradora!
}
```
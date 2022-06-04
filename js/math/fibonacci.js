const fibonacci = (n) => {
  let fib = [0, 1]
  if (n < 2) {
    return fib[n]
  }
  while (fib.length < n) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2])
  }
  return fib
}
console.log(fibonacci(10))
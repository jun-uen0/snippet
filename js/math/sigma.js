class sigma {
  constructor(start, end) {
    this.start = start
    this.end = end
  }
  calc = (start, end, exp) => {
    let sum = 0
    for(let i=this.start; i<=this.end; i++) {
      sum += Math.pow(i,exp)
    }
    return sum
  }
  square = () => {
    return this.calc(this.start, this.end, 2)
  }
  cube = () => {
    return this.calc(this.start, this.end, 3)
  }
}

const problem01 = new sigma(1,3)
console.log(problem01.square()) // 14
console.log(problem01.cube()) // 36

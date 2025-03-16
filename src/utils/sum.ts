export function sum(a: number, ...rest: number[]) {
    return [a, ...rest].reduce((acc, cur) => acc + cur, 0)
  }
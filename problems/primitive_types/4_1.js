export function run() {
  const x = 5;
  const result = solve(x);
  console.log(result); // Expected: 0
}

function solve(x) {
  let res = 0;
  while (x !== 0) {
    const inter = x & 1;
    res ^= inter;
    x >>= 1;
  }
  return res;
}

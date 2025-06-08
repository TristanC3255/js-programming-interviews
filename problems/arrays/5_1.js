export function run() {
  const arr = [3, 5, 1, 4, 3, 2, 4, 3];
  const pivotIndex = 1; // pivot = arr[1] = 5
  const result = solve(arr, pivotIndex);
  console.log(result);
}

function solve(arr, i) {
  const pivot = arr[i];
  let s = 0;
  let e = arr.length - 1;
  let j = 0;

  while (j <= e && s <= e) {
    const curr = arr[j];
    if (curr < pivot) {
      [arr[j], arr[s]] = [arr[s], arr[j]];
      s += 1;
      j += 1;
    } else if (curr > pivot) {
      [arr[j], arr[e]] = [arr[e], arr[j]];
      e -= 1;
    } else {
      j += 1;
    }
  }

  return arr;
}



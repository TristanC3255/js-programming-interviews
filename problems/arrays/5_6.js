export function run() {
  const prices = [310, 315, 275, 295, 260, 270, 290, 230, 255, 250];
  const profit = solve(prices);
  console.log(profit);
}

function solve(arr) {
  const currMins = [Infinity];
  const currMaxs = [-1];

  for (const e of arr) {
    currMins.push(Math.min(currMins[currMins.length - 1], e));
    currMaxs.push(Math.max(currMaxs[currMaxs.length - 1], e));
  }

  let maxProfit = 0;
  for (let i = 0; i < currMins.length; i++) {
    maxProfit = Math.max(maxProfit, currMaxs[i] - currMins[i]);
  }

  return maxProfit;
}

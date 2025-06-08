export function run() {
  console.log(solve("123"));    // [123, "123"]
  console.log(solve("-123"));   // [-123, "-123"]
  console.log(solve("+123"));   // [123, "123"]
}

function solve(val) {
  const digitMap = {};
  "0123456789".split("").forEach((char, i) => {
    digitMap[char] = i;
  });

  function strToInt(strVal) {
    let pos = true;
    if (strVal[0] === "-") {
      pos = false;
      strVal = strVal.slice(1);
    } else if (strVal[0] === "+") {
      strVal = strVal.slice(1);
    }

    let res = null;
    for (const c of strVal) {
      if (!(c in digitMap)) continue;

      if (res === null) {
        res = digitMap[c];
      } else {
        res *= 10;
        res += digitMap[c];
      }
    }

    if (res === null) res = 0;
    return pos ? res : -res;
  }

  function intToStr(intVal) {
    return `${intVal}`;
  }

  if (typeof val === "string") {
    return [strToInt(val), val];
  } else {
    return [val, intToStr(val)];
  }
}

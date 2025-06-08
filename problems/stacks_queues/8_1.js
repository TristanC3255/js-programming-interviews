class IntStack {
  constructor() {
    this._stack = [];
    this._maxTracker = [];
    this.max = null;
  }

  push(val) {
    this._stack.push(val);
    if (this._maxTracker.length === 0) {
      this._maxTracker.push(val);
    } else {
      const maxVal = Math.max(this._maxTracker[this._maxTracker.length - 1], val);
      this._maxTracker.push(maxVal);
    }
    this.max = this._maxTracker[this._maxTracker.length - 1];
  }

  pop() {
    if (this._stack.length < 1) return null;

    this._maxTracker.pop();
    const v = this._stack.pop();

    this.max = this._maxTracker.length > 0 ? this._maxTracker[this._maxTracker.length - 1] : null;

    return v;
  }
}

export function run() {
  console.log(solve());
}

function solve() {
  const stack = new IntStack();

  if (stack.pop() !== null) return false;

  stack.push(5);
  stack.push(2);
  stack.push(1);

  if (stack.max !== 5) return false;

  stack.push(8);
  if (stack.max !== 8) return false;

  stack.pop();
  if (stack.max !== 5) return false;

  return true;
}

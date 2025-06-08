class IntNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }

  toList() {
    const result = [];
    let current = this;
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  }
}

function createIntLinkedList(arr) {
  if (arr.length === 0) return null;
  const head = new IntNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new IntNode(arr[i]);
    current = current.next;
  }
  return head;
}

export function run() {
  const list1 = createIntLinkedList([1, 2, 3]);
  const list2 = createIntLinkedList([2, 3, 4]);

  const merged = solve(list1, list2);
  console.log(merged ? merged.toList() : []);
}

function solve(list1, list2) {
  const head = new IntNode(-1);
  let tail = head;

  while (list1 !== null && list2 !== null) {
    let val;
    if (list1.val < list2.val) {
      val = list1.val;
      list1 = list1.next;
    } else {
      val = list2.val;
      list2 = list2.next;
    }
    tail.next = new IntNode(val);
    tail = tail.next;
  }

  let rest = list1 !== null ? list1 : list2;
  while (rest !== null) {
    tail.next = new IntNode(rest.val);
    tail = tail.next;
    rest = rest.next;
  }

  return head.next;
}

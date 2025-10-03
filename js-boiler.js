// ------------------- Masai Assignment Boilerplate -------------------

function runProgram(input) {
  input = input.trim().split("\n");
  let line = 0;

  let t = +input[line++]; // number of test cases
  for (let i = 0; i < t; i++) {
    // Example usage:
    let n = +input[line++];
    let arr = input[line++].split(" ").map(Number);

    // 👉 call your solve function here
    // solve(n, arr);
  }
}

// ------------------- Helper Functions -------------------

// Get array of numbers from line
function getArray(line) {
  return line.split(" ").map(Number);
}

// Get number from line
function getNumber(line) {
  return +line;
}

// Get string from line
function getString(line) {
  return line.trim();
}

// ------------------- Stack Class -------------------
class Stack {
  constructor() {
    this.items = [];
  }

  push(x) {
    this.items.push(x);
  }

  pop() {
    if (this.empty()) return undefined;
    return this.items.pop();
  }

  top() {
    if (this.empty()) return undefined;
    return this.items[this.items.length - 1];
  }

  empty() {
    return this.items.length === 0;
  }
}

// ------------------- Queue Class -------------------
class Queue {
  constructor() {
    this.data = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(x) {
    this.data[this.tail++] = x;
  }

  dequeue() {
    if (this.empty()) return undefined;
    const val = this.data[this.head];
    delete this.data[this.head++];
    return val;
  }

  front() {
    if (this.empty()) return undefined;
    return this.data[this.head];
  }

  empty() {
    return this.head === this.tail;
  }
}

// ------------------- Input Handling -------------------
process.stdin.resume();
process.stdin.setEncoding("utf8");
let read = "";
process.stdin.on("data", function (chunk) {
  read += chunk;
});
process.stdin.on("end", function () {
  runProgram(read);
});

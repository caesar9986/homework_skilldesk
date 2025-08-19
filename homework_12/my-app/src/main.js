const queue = [];

const pushQueue = document.querySelector(".pushQueue");
const shiftQueue = document.querySelector(".shiftQueue");

let numberQueue = 0;
pushQueue.addEventListener("click", function () {
  queue.push(numberQueue++);
  console.log(queue);
})

shiftQueue.addEventListener("click", function () {
  queue.shift(numberQueue--);
  console.log(queue);
})

const stack = [];

const pushStack = document.querySelector(".pushStack");
const popStack = document.querySelector(".popStack");

let numberStack = 0;
pushStack.addEventListener("click", function () {
  stack.push(numberStack++);
  console.log(stack);
})

popStack.addEventListener("click", function () {
  stack.pop(numberStack--);
  console.log(stack);
})
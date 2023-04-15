function newStack() {
  const stack = [];

  return {
    push(val) {
      stack.push(val);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach(val => console.log(val));
    }
  }
}

let myStack = newStack();
myStack.push(10);
myStack.push(20);

myStack.printStack();

myStack.pop();

myStack.printStack();

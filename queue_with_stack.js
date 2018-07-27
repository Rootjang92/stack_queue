function Queue_stack() {
  var stack1 = [];
  var stack2 = [];

  this.enqueue = function(element) {
    return stack1.push(element);
  };

  this.dequeue = function() {
    if (stack2.length > 0) {
      return stack2.pop();
    }
    var result = stack1.pop();
    while (stack1.length > 1) {
      stack1.push(stack2.pop());
    }
    return result;
  };
}

var queue = new Queue_stack();
// var enqueue = queue.enqueue();
var dequeue = queue.dequeue();

console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.enqueue(1));




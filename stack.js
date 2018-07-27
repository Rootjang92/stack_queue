// stack을 이용한 queue 만들기.
// push, pop
// 위에 있는 데이터를
// 스택 2개. a에서 pop한 녀석을 b에서 받게 한 후. a에 하나씩 가져와서 pop.
// 2개의 stack으로 구현.

function Stack() {
  var items = [];

  this.pop = function() {
    return items.pop();
  }
  this.isEmpty = function() {
    return items.length === 0;
  }
  this.print = function() {
    console.log(items.toString());
  }
  this.push = function(element) {
    dataStack.push(element);
  }
  this.peek = function() {
   return dataStack[0];
  }
  this.size = function() {
   return dataStack.length;
  }
}
var stack = new Stack();
// console.log(stack.isEmpty());
// console.log(stack.pop());
// console.log(stack.print());



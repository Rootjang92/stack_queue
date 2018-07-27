function Quene() {
  var items = [];

  this.enquene = function(element){
    return items.push(element);
  }
  this.dequene = function() {
    return items.shift();
  }
  this.front = function() {
    return items[0];
  }
  this.isEmpty = function() {
    return items.length === 0;
  }
  this.size = function() {
    return items.length;
  }
  this.claer = function() {
    return items = [];
  }
  this.print = function() {
    console.log(items.toString());
  }
}

var quene = new Quene();
var dequene = quene.dequene();

console.log(quene.isEmpty());
console.log(quene.enquene(1));
console.log(quene.enquene(2));
console.log(quene.enquene(3));
console.log(quene.enquene(4));
console.log(quene.size());
// console.log(quene.print());
quene.print();
console.log(quene.dequene());


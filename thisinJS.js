var aa = function () {
  this.result = this.p1 + this.p2;
  console.log(this);
}

var cal = {
  p1 : 1,
  p2 : 2,
  add : aa
}

cal.add()
console.log(cal.add);
console.log()


// function SomeClass() {
//   this.message = "hello world";
//   this.printMessage = function () {
//     console.log(this.message);
//   }
// }

// var obj = new SomeClass();
// var someFunc = obj.printMessage.bind(obj);
// someFunc();

//soluction 1
// function SomeClass() {
//   this.message = "hello world";
//   this.printMessage = function () {
//     console.log(this.message);
//   }
// }

// var obj = new SomeClass();
// var someFunc = obj.printMessage;
// someFunc.call(obj)

//solution 2
// class SomeClass {
//   constructor() {
//     this.message = "hello world";
//     this.printMessage = this.print.bind(this)
//   }

//   print () {
//     console.log(this.message);
//   }
// }

// var obj = new SomeClass();
// obj.printMessage();
// var someFunc = obj.printMessage;
// someFunc();
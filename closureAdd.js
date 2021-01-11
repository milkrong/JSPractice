//closure add
function adder (number) {
  return function (plus) {
    return number + plus;
  }
}

let addFive = adder(5);
console.log(addFive(6))
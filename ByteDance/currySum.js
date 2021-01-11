 function curry (fn, currArgs) {
  return function() {
    let args = [].slice.apply(arguments);
    if(currArgs !== undefined) {
      args = args.concat(currArgs);
    }
    if(args.length < fn.length) {
      return curry(fn, args);
    }
    return fn.call(this, ...args);
  }
}

let add = curry((a, b, c) => a + b + c);

console.log(add(1, 2)(3));
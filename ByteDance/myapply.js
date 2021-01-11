Funciton.prototype.myApply = function(context) {
  let context = context || window;
  context.fn = this;

  let result;
  if(arguments[1]) {
    result = context.fn(...arguments);

  } else {
    result = context.fn();
  }

  delete context.fn;
  return result;
}
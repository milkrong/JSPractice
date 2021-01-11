// console.log(counterString(stringInput));
var obj = {
   one: {
     ooo:123,
       two: {
           three: {
               four: {
                   five: 44,
                   six: "foo"
               }
           }
       }
   },
   ddd: 22
}

function find (objInput, target) {
  if(objInput[key] === target) {
    return true
  }
  if (typeof objInput !== "object") {
    return false
  }
  for(let key of Object.keys(objInput)) {
    if(find(objInput[key], target)) {
      return true
    }
  }
  return false;
}

console.log(find(obj, 22))
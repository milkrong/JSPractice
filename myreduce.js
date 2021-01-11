Array.prototype.myReduce = function(callback,init) {
  let acc,idx;
  if(init){
    acc = init // check if init is there
    idx = 0
  } else {
    acc = this[0]
    idx = 1
  }
  for(let i = idx;i<this.length;i++) {
    acc = callback(acc,this[i],i,this)
  }
  return acc
}
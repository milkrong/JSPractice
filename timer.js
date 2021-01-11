let timer  = {i : 0}
let interval = setInterval((timer) => {
  timer.i++
  if(timer.i === 10) {
    clearInterval(interval);
  }
  console.log(timer.i);
}, 1000, timer);
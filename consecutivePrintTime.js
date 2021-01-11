// for (let i=0; i<3; i++){ 
//   (function(index) {
//     setTimeout(() => console.log(index), index*1000)
//   })(i);
// }

// for (let i=0; i<3; i++){ 
//     setTimeout(() => console.log(i), i*1000)
// }

for (var i = 0; i<3; i++) {
  function timeConsole() {
    var k = i;
    setTimeout(() => console.log(k), k*1000)
  }
  timeConsole();
}

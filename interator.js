function* stringIterator(string) {
  let index= 0
  while (true) {
    yield console.log(string[index]);
    index ++;
  }
  console.log("end")
}

let sInter = stringIterator("abc");
sInter.next();
sInter.next();
sInter.next();
sInter.next();

// function MyInterator (string) {
//     this.string = string;
//     this.index = 0
//     this.next = function() {
//         if (this.index < this.string.length) {
//             console.log(this.string[this.index]);
//             this.index++;
//         } else {
//             console.log("end");
//         }
//     }
// }


// let m = new MyInterator("abc");
// m.next();
// m.next();
// m.next();
// m.next();
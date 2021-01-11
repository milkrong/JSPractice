


// // ouput : Matt Jack
// async 

var puzzle = {
  user : {
    first : "Ban",
    last : "Junm"
  },
  setFirst : function (first) {
    this.user.first = first;
  },
  setLast : function (last) {
    this.user.last = last;
  },

  getName : function () {
    getFirst(function(first) {
      puzzle.setFirst();
      getLast(function (last) {
        puzzle.setLast();
        console.log(puzzle.user.first + '' + puzzle.user.last);
      })
    });
    
  }
}

function getFirst(cb) {
  setTimeout(function() {
    return cb("Matt")
  }, 500)
}

function getLast(cb) {
  setTimeout(function() {
    return cb("Eric")
  }, 500)
}
puzzle.getName();

// getFirstName().then(firstname => {
//   console.log(firstname)
//   getLastName().then(value => {
//     console.log(value);
//   })
// })

// function getFirstName () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Matt"), 500)
//   })
// }
// function getLastName () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Jack"), 500)
//   })
// }

// function getName() {
//    return Promise.all([getFirstName(), getLastName()])
// }

// async function fuck () {
//   const run = Date.now();
//    const res = await getName();
//    console.log(res);
//   console.log(Date.now() - run);
// }

// fuck()!!!!!
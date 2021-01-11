const mostFrequent = arr =>
  Object.entries(
    arr.reduce((a, v) => {
      a[v] = a[v] ? a[v] + 1 : 1;
      return a;
    }, {})
  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0];

  console.log(mostFrequent([1,2,3,4,4,4]))


// const mostFrequent = arr => {
//   const freqMap = arr.reduce((a, v) => {
//     a[v] = a[v] ? a[v] + 1 : 1;
//     return a;
//   }, {})

//   return Object.entries().reduce((res, keyValue) => (keyValue[1] > res[1] ? keyValue : res), [null, 0])[0]
// }


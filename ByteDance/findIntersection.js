let arr = [[1,2,3], [2,3], [2,3,4], [2,3,6], [1,2,3]]

const intersection = (arr1, arr2) => {
  const set = new Set(arr1)
  return [... new Set(arr2.filter(n => set.has(n)))]
}

const multiIntersection = (arr) => {
  return arr.reduce((res, cur) => {
    return intersection(res, cur)
  }, arr[0])
}

console.log(multiIntersection(arr))
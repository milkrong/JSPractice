function removeDuplicate (arr) {
  const arrSet = new Set(arr);
  return [...arrSet];
}

function removeDuplicate2 (arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  })
}

function removeDuplicate3 (arr) {
  return arr.reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item]
  }, [])
}
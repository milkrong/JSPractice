const stringInput = "abcccc";

const counterString = (string) => {
  let stringList  = string.split("");
  return stringList.reduce((counter, cur) => {
    counter[cur] ? counter[cur]++ : counter[cur] = 1;
    return counter;
  }, {})
}
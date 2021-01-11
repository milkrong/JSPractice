let obj = {a : "one", b : "two", c : "three"}

let res = [];
for (let [key, value] of Object.entries(obj)) {
  res.push(`${key}=${value}`)
}

console.log(res.join("&"));
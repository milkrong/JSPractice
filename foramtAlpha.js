function formatNumericAlpha (string) {
  let alphas = string.match(/[A-Za-z]/g);
  let nums = string.match(/[0-9]/g);
  if (Math.abs(alphas.length - nums.length) > 1) {
    return [...alphas, ...nums].join('');
  }
  let res = [];
  while (alphas.length > 0 || nums.length > 0) {
    res.push(alphas.length > nums.length ? alphas.shift() : nums.shift())
  }

  return res.join('');
}

console.log(formatNumericAlpha("a1aa"))
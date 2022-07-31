function deleteNth(arr, n) {
  let count = {};
  let ans = [];
  for (const el of arr) {
    if (count[el]) count[el] = count[el] + 1;
    else count[el] = 1;
    if (count[el] <= n) ans.push(el);
  }
  return ans;
}

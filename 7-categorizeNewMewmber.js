function openOrSenior(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] > 54 && data[i][1] > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  }
  return result;
}

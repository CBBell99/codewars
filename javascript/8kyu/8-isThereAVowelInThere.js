const isVow = (a) =>
  a.map((charCode) =>
    /[aeiou]/.test(String.fromCharCode(charCode))
      ? String.fromCharCode(charCode)
      : charCode
  );

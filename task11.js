function commonLetters(str1, str2) {
    let nStr1 = str1.split("");
    let nStr2 = str2.split("");
    let res = "";
    for (let i = 0; i < nStr1.length; i++) {
      for (let j = 0; j < nStr2.length; j++) {
        if (nStr1[i] === nStr2[j]) {
          res += nStr1[i];
        }
      }
    }
    return res;
  }
  console.log(commonLetters("house", "computers"));
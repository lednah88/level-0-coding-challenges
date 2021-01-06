function maximun(...num) {
    let max = 0;
    for (let i = 0; i < num.length; i++) {
      if (num[i] > max) {
        max = num[i];
      }
    }
    return max;
  }
  console.log(maximun(0, 2, 1));
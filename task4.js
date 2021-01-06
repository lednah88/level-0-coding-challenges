function sum3(x, y) {
    let sum = (x + y).toString();
    if (x == 3 || y == 3 || sum.match(/3/g)) {
      return true;
    } else {
      return false;
    }
  }
  console.log(sum3(0, 13));
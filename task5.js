function areaOfATriangle(a, b, c) {
    let s = (1 / 2) * (a + b + c);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
  console.log(areaOfATriangle(3, 4, 5));
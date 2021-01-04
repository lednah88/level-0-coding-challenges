// Tast 1
let x = 0;
let y = 1;
console.log(x);
console.log(y);
x += 3;
y += x;
console.log(x);
console.log(y);

// Task 2
let x = 1 + 1 * 2;
let y = (1 + 1) * 2;
let z = 1 + 1 * 2;
let a = 1 + (1 * 2) / 2;
let b = (1 + 1 * 2) / 2;
console.log(b);

// Task 3
function sum65(x, y) {
  if (x == 65 || y == 65 || x + y == 65) {
    return true;
  } else {
    return false;
  }
}
console.log(sum65(5, 60));

// Task 4
function sum3(x, y) {
  let sum = (x + y).toString();
  if (x == 3 || y == 3 || sum.match(/3/g)) {
    return true;
  } else {
    return false;
  }
}
console.log(sum3(0, 13));

// Task 5
function areaOfATriangle(a, b, c) {
  let s = (1 / 2) * (a + b + c);
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
console.log(areaOfATriangle(3, 4, 5));

// Task 6
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

// Task 7
function celsiusToFereignheit(num) {
  return (num * 9) / 5 + 32 + " F";
}
console.log(elsiusToFereignheit(25));

function fereignheitToCelsius(num) {
  return ((num - 32) * 5) / 9 + " C";
}
console.log(fereignheitToCelsius(98.6));

// Task 8
function time(num) {
  let hours = Math.floor(num / 60);
  let minutes = num % 60;
  return hours + " hours, " + minutes + " minutes";
}
console.log(time(133));

// Task 9
function sumOfMultiples() {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfMultiples());

// Task 10
function vowels(str) {
  return str.match(/[aeiou]/gi);
}
console.log(vowels("xongIleUa"));

// Task 11
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

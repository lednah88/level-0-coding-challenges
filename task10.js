function vowels(str) {
  return str.match(/[aeiou]/gi).toString();
}
console.log(vowels("xongIleUa"));

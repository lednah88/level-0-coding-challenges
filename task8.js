function timeConversion(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    if (hours < 2) {
      return hours + " hour, " + minutes + " minutes";
    } else {
      return hours + " hours, " + minutes + " minutes";
    }
  }
  console.log(timeConversion(133));
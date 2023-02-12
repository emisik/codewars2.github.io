function boolToWord(bool) {
  if (bool === true) {
    return "Yes";
  } else if (bool === false) {
    return "No";
  }
}

//Convert Time past Midnight to Milliseconds
function past(h, m, s) {
  let hour = h * 3600000;
  let minutes = m * 60000;
  let seconds = s * 1000;

  return hour + minutes + seconds;
}

//Calculate the Sum of all Positive Numbers in an Array
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));

//Multiply elements of an array
function grow(x) {
  let result = 1;
  for (let i = 0; i < x.length; i++) {
    result *= x[i];
  }
  return result;
}

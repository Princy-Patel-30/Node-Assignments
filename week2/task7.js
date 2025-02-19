// Create a function that takes an array and a callback function specifying the
// operation to be performed on each element of the array.
// The function should return a new modified array. (Don’t use map).

function demo(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);
    newArr.push(result);
  }
  return newArr;
}

const numbers = [1, 2, 3, 4];

const increment = demo(numbers, function (num) {
  return num + 1;
});

console.log(increment);

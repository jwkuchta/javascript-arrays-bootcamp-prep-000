let nums = [1, 3, 8, 19, 45, 4, 6];

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    console.log(i);

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
      console.log(i);
      console.log(arr);
    }
  }
  return arr;
}

console.log(filterRangeInPlace(nums, 3, 20))

function rangeSum(start, end) {
let arr = [];
let counter = 0;
let sum = 0;
  for(let i = start; i <= end; i++) {
    arr.push(i);

    sum = sum + arr[counter];
    counter++;
  }

  console.log(sum)

}

rangeSum(1, 10);


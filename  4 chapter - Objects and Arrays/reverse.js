// function reverseArrayImmutable(arr) {
  
//   let reversedArray = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//       reversedArray.push(arr[i])
//   }

//   return reversedArray;
// }

// console.log(reverseArrayImmutable([1,2,3,4,5]));


function reverse(arr) {

  for (let i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {

      let el = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = el;

      console.log(arr);
  }
}

reverse([1,4,6,10,3,9]);

// function reverseArrayImmutable(arr) {
  
//   let reversedArray = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//       reversedArray.push(arr[i])
//   }

//   return reversedArray;
// }

// console.log(reverseArrayImmutable([1,2,3,4,5]));


function reverse(arr) {

  for (let i = 0; i < (arr.length / 2); i++) {

    let el = arr[i];

    console.log(el);

    arr[i] = arr[arr.length - 1 - i];

    console.log(arr[i]);
    arr[arr.length - 1 - i] = el;
  }

  return console.log(arr);
} 

reverse([1,2,3,4,5,6]);
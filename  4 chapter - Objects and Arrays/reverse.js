// function reverseArrayImmutable(arr) {
  
//   let reversedArray = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//       reversedArray.push(arr[i])
//   }

//   return reversedArray;
// }

// console.log(reverseArrayImmutable([1,2,3,4,5]));


function reverseMutable(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
      arr.push(arr[i]);
      arr.splice(5)
    }

  return console.log(arr);
}

let y = reverseMutable([1,2,3,4,11,6,7,9]);

console.log(y);

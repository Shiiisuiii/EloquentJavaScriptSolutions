function range(start, end, step) {
  
  let arr = [];

  if(start > end) {
    for (let i = start; i >= end ; i-= step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i <= end; i+= step) {
      arr.push(i);
    }
  }
  

  console.log(arr);
}

range(9, 1, 1);

function countLetter(word, letter) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === letter || word.charAt(i) === "E") {
      count = count + 1;
    }
  }

  return console.log(count);
}

countLetter("Chelsea", "e");


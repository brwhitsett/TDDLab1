"use strict";

const translate = (word) => {
  word = word.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(word[0])) {
    return word + "way";
  } else {
    const index = word.split("").findIndex((letter) => vowels.includes(letter));
    return word.slice(index) + word.slice(0, index) + "ay";
  }
};

module.exports = translate;

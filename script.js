'use strict';

export function repeatWord(word, count) {
  let words = '';
  for (let i = 1; i <= count; ++i) {
    words += word + i + ', ';
  }
  return words;
}

repeatWord('слово', 3);


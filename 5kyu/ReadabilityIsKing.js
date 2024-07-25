// https://www.codewars.com/kata/52b2cf1386b31630870005d4

// Readability is King

// We will use the Flesch–Kincaid Grade Level to evaluate the readability of a piece of text. This grade level is an approximation for what schoolchildren are able to understand a piece of text. For example, a piece of text with a grade level of 7 can be read by seventh-graders and beyond.

// The way to calculate the grade level is as follows:

// (0.39 * average number of words per sentence) + (11.8 * average number of syllables per word) - 15.59
// Write a function that will calculate the Flesch–Kincaid grade level for any given string. Return the grade level rounded to two decimal points.

// Ignore hyphens, dashes, apostrophes, parentheses, ellipses and abbreviations.

// Remember that the text can contain more than one sentence: code accordingly!

// HINT: Count the number of vowels as an approximation for the number of syllables, but count groups of vowels as one (e.g. deal is one syllable). Do not count y as a vowel!

// Example
// "The turtle is leaving." ==> 3.67
// The average number of words per sentence is 4 and the average number of syllables per word is 1.5. The score is then (0.39 * 4) +  (11.8 * 1.5) - 15.59 = 3.67

function fleschKincaid(text) {
  // Find sentences
  const sentences = text.split(/[.!?] /g);
  
    // Find n words
  const words = text.split(' ');
  const avgWords = words.length / sentences.length;

  // Find total syllables
  const reg = /[aeiou]\s|[aeiouy](?=[^aeiouy])/gi;
  const syllables = text.match(reg).length;
  const avgSyllables = syllables / words.length;

  return Math.round(((0.39* avgWords) + (11.8 * avgSyllables) - 15.59) * 100) / 100;
}

//console.log(fleschKincaid("The turtle is leaving.")); //==> 3.67
//console.log(fleschKincaid("A good book is hard to find")); // -1.06
console.log(fleschKincaid("To be or not to be. That is the question.")); // -0.66
console.log(fleschKincaid("Oh no! The lemming is falling.")) // 1.31
console.log(fleschKincaid("Do not cut your fingers as your katana is getting sharper! Be gentle.")) // 4.19
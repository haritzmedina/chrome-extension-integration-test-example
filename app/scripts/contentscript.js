console.log('\'Allo \'Allo! Content script');

const WikipediaAugmentator = require('./WikipediaAugmentator');

console.log('Hey');

let wikipediaAugmentator = new WikipediaAugmentator();

wikipediaAugmentator.init();
